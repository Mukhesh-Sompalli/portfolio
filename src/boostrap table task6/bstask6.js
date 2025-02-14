import React from "react";
import "./bstask6.css"
import Table from 'react-bootstrap/Table';

function Bstask6() {
  return (
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>S.no</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
      
        
        <tr>
          <td>1</td>
          <td>Mukesh</td>
          <td>Raju</td>
          <td>ms@Raju</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bhargav</td>
          <td>Reddy</td>
          <td>@brreddy</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Mahesh</td>
          <td>Reddy</td>
          <td>@Mreddy</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Arun</td>
          <td>Reddy</td>
          <td>@areddy</td>
        </tr>
        <tr>
          <td>5</td>
          <td>lokesh</td>
          <td>Reddy</td>
          <td>@lreddy</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Bstask6;