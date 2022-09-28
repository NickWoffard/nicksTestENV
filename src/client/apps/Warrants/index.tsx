import React, { useRef } from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();
import {
  Loader,
} from '../exports';
import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams, GridTableRowsIcon, GridToolbar, GridCellParams, renderActionsCell } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';


const get_rows = (response) => {
  var rows: GridRowsProp = response;
  return rows;
}

class WarrantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
    serverFunctions.get_rows(window['db'].warrant, ['Review'], {}).then((response) => this.setState({data: response}));
  }

  columns: GridColDef[] = [
    { field: 'affiant', headerName: 'Affiant', flex: 1 },
    { field: 'agency_case_number', headerName: 'Case number', flex: 0.5 },
    { field: 'primary_crime', headerName: 'Primary crime', flex: 0.5 },
    {
      field: 'urgency',
      headerName: 'Urgency',
      flex: 1,
      renderCell: (params: GridCellParams) => (
        <strong>
          <Chip variant="outlined" icon={<i className="fa-solid fa-flag" />} color={(params.row.urgency.includes('Next Hour')) ? ('error') : ('primary')} label={`${params.row.urgency}`} />
        </strong>
      ),
    },
    {
      field: 'view_button',
      headerName: '',
      flex: 0.5,
      renderCell: (params: GridCellParams) => (
        <strong>
          <button type="button" className="btn btn-outline-info btn-sm">View</button>
        </strong>
      ),
    },
    {
      field: 'approve_button',
      headerName: '',
      flex: 0.5,
      renderCell: (params: GridCellParams) => (
        <strong>
          <button type="button" className="btn btn-outline-primary btn-sm">Approve/Deny</button>
        </strong>
      ),
    },
  ];
  render() {
    return (
      this.state['data'] == '' ? (<Loader />) : (
        <>
          <h1>Warrants</h1>
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
        </>
      )
    )
  }
}
export default WarrantForm;
