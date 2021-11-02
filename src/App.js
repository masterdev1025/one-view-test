import { useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import './App.css';
import { getUsers, getPost } from './services/actions';

function App(props) {
  useEffect(() => {
    props.actions.getUsers();
  }, [])
  return (
    <div className = "app">
      <table className="users">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              City
            </th>
            <th>
              Company
            </th>
          </tr>
        </thead>
        <tbody>
        {
          props.users && props.users.map((user, index) => (
            <tr key = { user.id }>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <td>{ user.address.city }</td>
              <td>{ user.company.name }</td>
            </tr>
          ))
        }
       </tbody>
      </table>
    </div>
  );
}

export default connect((state) => {
  return {
    ...state
  }
}, (dispatch) => {
  return {
    actions: bindActionCreators({
      getUsers, getPost
    }, dispatch)
  }
})(App);
