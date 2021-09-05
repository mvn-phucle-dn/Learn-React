import React, { useEffect, useState } from 'react';

const Users = () => {
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
      <div className="list-key">
        <h1 className="title-page">List User</h1>
        <ul className="list-member">
          {
            users.map(e => (
              <li className="member-item" key={e.id}>
                <img src={e.avatar} alt="thumb" />
                <div className="member-info">
                  <h3><a href="#">{e.first_name}</a></h3>
                  <p>{e.email}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
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

export default Users;
