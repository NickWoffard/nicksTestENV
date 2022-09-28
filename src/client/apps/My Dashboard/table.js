/*import React from 'react';
import { GASClient } from 'gas-client';
const { serverFunctions } = new GASClient();
import MUIDataTable from 'mui-datatables';
const MyTable = () => {
    var data;
    serverFunctions.get_rows(window.db.staff, 'Employee', ['first_name', 'last_name', 'email', 'staff_guid'], {}).then((response) => {data = response})
    const columns = [
      { label: 'Title', name: 'title' },
      { label: 'Author', name: 'authors' },
      { label: 'Page Count', name: 'num_pages', options: { sort: true } },
      { label: 'Rating', name: 'rating' }
    ];
    const options = {
      filterType: 'checkbox'
    };
    return (
      <div style={{ maxWidth: '100%' }}>
        <MUIDataTable
          columns={columns}
          data={data}
          title='Books Directory'
          options={options}
        />
      </div>
    );
  };
  export default MyTable;*/