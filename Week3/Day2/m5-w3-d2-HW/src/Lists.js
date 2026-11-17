import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Lists({ alldata }) {
  const listrows = [];

  alldata.forEach((element) => {
    listrows.push(
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{element.author}</td>
        <td />
        <td />
      </tr>
    );
  });

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>{listrows}</tbody>
    </table>
  );
}

export default Lists;
