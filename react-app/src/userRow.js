import React, { Component } from "react";

class UserRow extends Component {
  render() {
    const { data } = this.props;
    return (
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.email}</td>
        <td>{data.country}</td>
        <td>{data.gender === '0' ? 'Male' : 'Female'}</td>
        <td>{data.des}</td>
        <td><button onClick={() => this.props.remove(data.id)}>Remove</button></td>
      </tr>
    );
  }
}

export default UserRow;
