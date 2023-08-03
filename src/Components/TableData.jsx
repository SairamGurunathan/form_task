import React from 'react'

const TableData = ({userData}) => {

    return (
    <>
    <div className="container mt-3">
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">S No.</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
    </tr>
  </thead>
  <tbody>
  {userData.length === 0 ? (
    <tr>
      <td colSpan="7" className="text-center">No data available</td>
    </tr>
  ) : (
    userData.map((item, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.fName}</td>
        <td>{item.lName}</td>
        <td>{item.email}</td>
        <td>True</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
      </tr>
    ))
  )}
</tbody>
</table>
</div>
    </>
  )
}

export default TableData