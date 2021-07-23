import React, { useEffect, useState } from 'react';

const Pagination = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`).then(e => e.json())
    .then(e => {
      setUsers(e.data);
      setTotalPages(e.total_pages);
    })
  }, [page]);

  function handleChangePage(newPage) {
    setPage(newPage);
  }

  return (
    <div>
      <table className="list-user">
        <thead>
          <tr>
            <th>Id</th>
            <th>Email address</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(e => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.email}</td>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
                <td><img className="avatar" alt="avatr" src={e.avatar}></img></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <ul className="pagination">
        <li className={`page-item ${page === 1 ? 'disable' : ''}`} onClick={() => handleChangePage(page - 1)}>Prev</li>
        {[...Array(totalPages)].map((e, i) =>
          <li className={`page-item ${page === (i + 1) ? 'active' : ''}`} key={i} onClick={() => handleChangePage(i + 1)}>{i + 1}</li>
        )}
        <li className={`page-item ${page === totalPages ? 'disable' : ''}`} onClick={() => handleChangePage(page + 1)}>Next</li>
      </ul>
    </div>
  )
}

export default Pagination;
