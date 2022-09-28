import { open, getRows, insertRow, updateRow, deleteRow } from './db-utils';


export const get_evaluation_template = (database, evaluation_series) => {
    var db = open(database);
    var job_specific_template = [];
    var non_job_specific_template = [];
    var rows = getRows(db, 'Evaluations', [], {evaluation_series: evaluation_series});
    if (rows.length == 0) {
      var i = 1;
      Array.from(getRows(db, `${evaluation_series} Criteria Template`)).map((row)=> {
        var question = {};
        question[`job_specific_${i}_criteria`] = row.criteria;
        question[`job_specific_${i}_description`] = row.criteria_description;
        job_specific_template.push(question);
        i++;
      });
      i = 1;
      Array.from(getRows(db, 'Job Related Capabilities Template')).map((row)=> {
        var question = {};
        question[`non_job_specific_${i}_criteria`] = row.criteria;
        question[`non_job_specific_${i}_description`] = row.criteria_description;
        non_job_specific_template.push(question);
        i++;
      });
    }
    return {
      job_specific_template: job_specific_template,
      non_job_specific_template: non_job_specific_template,
    };
  };

export const create_evaluation = (evaluation_sheet_id) => {
    var user = Session.getActiveUser().getEmail();
    var db = open('19MtMY3kavFgziZKzlkjvck4isUFWO0aEXK26FQHke0k');
    insertRow(db, 'Test', {question_1_description :'Test description'});
};