import React from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridTableRowsIcon, GridToolbar, GridCellParams, renderActionsCell } from '@mui/x-data-grid';
import { GASClient } from 'gas-client';
import Chip from '@mui/material/Chip';
const { serverFunctions } = new GASClient();
import { Model, StylesManager, } from 'survey-core';
import { PopupSurvey } from 'survey-react-ui';

StylesManager.applyTheme("modern");

import { ViewPleaModal, Loader } from '../exports'

const get_rows = (response) => {
  var rows: GridRowsProp = response;
  return rows;
}



const surveyJson = {
  "title": "Pleas",
  "logoPosition": "right",
  "completedHtml": "<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>",
  "completedHtmlOnCondition": [
    {
      "html": "<h3>Thank you for your feedback.</h3><h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>"
    },
    {
      "html": "<h3>Thank you for your feedback.</h3><h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br />"
    }
  ],
  "pages": [
    {
      "name": "Approve or Deny",
      "elements": [
        {
          "type": "dropdown",
          "name": "approved",
          "title": "Do you approve this plea?",
          "choices": [
            "Yes",
            "Yes - with modifications",
            "No"
          ]
        },
        {
          "type": "comment",
          "name": "supervisor_comments",
          "title": "Enter any comments here"
        }
      ]
    }
  ],
  "showQuestionNumbers": "off"
};

class PleaDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      show_modal: false,
      selected_plea: '',
      selected_case_number: '',
      approving_plea: false,
    };
    this.approvePlea = this.approvePlea.bind(this);
    this.viewPlea = this.viewPlea.bind(this);
    serverFunctions.get_user_email().then((response) => {
      serverFunctions.get_rows(window['db'].plea, ['Initial Requests', 'Second Supervisor Queue'], { supervisor: response }).then((response) => { this.setState({ data: response }) });
    })

  }

  approvePlea = (params) => {
    this.setState({ approving_plea: true, selected_plea: params.row, selected_case_number: params.row.court_case_number });
  }

  viewPlea = (params) => {
    this.setState({ show_modal: true, selected_plea: params.row });
  }


  columns: GridColDef[] = [
    { field: 'entered_by', headerName: 'User', flex: 1 },
    { field: 'court_case_number', headerName: 'Court case number', flex: 1 },
    { field: 'da_number', headerName: 'DA number', flex: 1 },
    {
      field: 'tier',
      headerName: 'Tier',
      flex: 0.5,
      renderCell: (params: GridCellParams) => (
        <strong>
          <Chip variant="outlined" icon={<i className="fa-solid fa-flag" />} color={(params.row.tier < 2) ? ('error') : ('primary')} label={`Tier ${params.row.tier}`} />
        </strong>
      ),
    },
    {
      field: 'approvals',
      headerName: 'Approvals',
      flex: 0.5,
      renderCell: (params: GridCellParams) => (
        <strong>
          <Chip color={((params.row.approvals_remaining/params.row.approvals_required) > 0.5) ? ('primary') : ('success')} label={`${params.row.approvals_remaining}/${params.row.approvals_required}`} />
        </strong>
      ),
    },
    {
      field: 'view_button',
      headerName: '',
      flex: 0.5,
      renderCell: (params: GridCellParams) => (
        <strong>
          <button type="button" data-bs-toggle="modal" data-backdrop='static' data-bs-target="#view-plea-modal" onClick={() => { this.viewPlea(params) }} className="btn btn-outline-info btn-sm">View</button>
        </strong>
      ),
    },
    {
      field: 'approve_button',
      headerName: '',
      flex: 0.5,
      renderCell: (params: GridCellParams) => (
        <strong>
          <button type="button" onClick={() => { this.approvePlea(params) }} className="btn btn-outline-primary btn-sm">Approve/Deny</button>
        </strong>
      ),
    },
  ];

  render() {
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (result) {
      var sanitizer = { ...result.data };
      sanitizer['cases_not_resolved'] = JSON.stringify(sanitizer['cases_not_resolved']);
      serverFunctions.insert_row(window['db'].plea, 'Initial Requests', sanitizer);
      this.setState({ approving_plea: false });
    })
    return (
      this.state['data'] == '' ? (
        <Loader />
        ) : (
        <>
          <ViewPleaModal selected_plea={this.state['selected_plea']} />
          <h1>Pleas</h1>
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid
              rows={get_rows(this.state['data'])}
              columns={this.columns}
              components={{ Toolbar: GridToolbar }}
              componentsProps={{
                toolbar: {
                  showQuickFilter: true,
                  quickFilterProps: { debounceMs: 500 },
                },
              }}
            />
          </div>
          <PopupSurvey title={this.state['selected_case_number']} model={survey} isExpanded={this.state['approving_plea']} />
        </>
      )
    )
  }
}
export default PleaDashboard;

