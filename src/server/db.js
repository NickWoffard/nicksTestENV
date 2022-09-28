import { Row } from 'react-bootstrap';
import { open, getRows, insertRow, updateRow, deleteRow } from './db-utils';


export const collect_profile = (database, table) => {
  var db = open(database);
  return getRows(db, table, [], { email: Session.getActiveUser().getEmail() }).pop();
};

export const staff_autocomplete = (database, tables, where = {}) => {
  var data = [];
  var db = open(database);
  tables.map((table) => {
    var rows = getRows(db, table, [], where);
    rows.map((row) =>
      data.push({
        id: String(Math.random()),
        text: String(Math.random()),
        data: row,
      })
    );
  });
  return data;
};

export const autocomplete = (database, tables, field, where = {}) => {
  var data = [];
  var db = open(database);
  tables.map((table) => {
    var rows = getRows(db, table, [], where);
    rows.map((row) =>
      data.push({
        id: String(Math.random()),
        text: String(row[field]),
        value: String(row[field]),
      })
    );
  });
  return data;
};

export const insert_row = (database, table, state) => {
  var db = open(database);
  insertRow(db, table, state);
  return state;
};

export const update_row = (database, table, state, where) => {
  var db = open(database);
  updateRow(db, table, state, where);
  return state;
};

export const move_row = (database, initial_table, target_table, where) => {
  var db = open(database);
  var row = getRows(db, initial_table, [], where).pop();
  insertRow(db, target_table, row);
  deleteRow(db, initial_table, where);
};

export const get_row = (database, table, columns, where) => {
  var db = open(database);
  return getRows(db, table, columns, where).pop();
};

export const get_rows = (database, tables, where) => {
  var data = [];
  var db = open(database);
  tables.map((table) => {
    var rows = getRows(db, table, [], where);
    rows.map((row) => {
      row.id = String(Math.random());
      data.push(row);
    }
    );
  });
  return data;
};

export const get_user_email = () => { return Session.getActiveUser().getEmail() };

export const get_user = (database) => {
  var db = open(database);
  return getRows(db, 'Employee', [], {email: Session.getActiveUser().getEmail()}).pop();
};
