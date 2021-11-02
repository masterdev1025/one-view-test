import { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getUsers, getPost, getPostSucceed } from './services/actions';
import './App.css';

function App(props) {
  const [searchItem, setSearchItem] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    props.actions.getUsers();
  }, [])
  const handleRowClick = (userId) => {
    if( userId === selectedUser ){
      setSelectedUser(null);
      props.actions.getPostSucceed([]);
    } else {
      setSelectedUser(userId);
      props.actions.getPost(userId);
    }
    
  }
  return (
    <div className = "app">
      <h2>OVC-Interview-Test</h2>
      <h3>Users</h3>
      <input data-testid = "search-input" className = "search-input" placeholder = "search..."  onChange = {(e) => setSearchItem(e.target.value)} value = { searchItem }/>
      <table className="app-table">
        <thead>
          <tr>
            <th width = "25%">Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
        {
          props.users && props.users.filter(user => {
            return user.name.toUpperCase().includes( searchItem.toUpperCase() )
          }).map((user) => (
            <tr key = { user.id } onClick = {() => handleRowClick(user.id)} className = { user.id == selectedUser ? 'selected' : '' }>
              <td>{ user.name }</td>
              <td>{ user.email }</td>
              <td>{ user.address.city }</td>
              <td>{ user.company.name }</td>
            </tr>
          ))
        }
       </tbody>

      </table>
      <h3>Posts</h3>
      <table className = "app-table">
          <thead>
            <tr>
              <th width = "25%">Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {
              props.post && !props.postGetLoading &&  props.post.map((post, index) => (
                <tr key = {post.id}>
                  <td>{ post.title }</td>
                  <td>{ post.body }</td>
                </tr>
              ))
            }
            {
              props.postGetLoading && <tr>
                <td colSpan = "2" className = "loading-td">Loading...</td>
              </tr>
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
      getUsers, getPost, getPostSucceed
    }, dispatch)
  }
})(App);
