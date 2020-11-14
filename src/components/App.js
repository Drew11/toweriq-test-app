import React, {useState, useEffect, } from 'react';
import {useDispatch, useSelector } from "react-redux";
import { fetchUsers } from '../actions';
import Pagination from './pagination/pagination';
import { Table , Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ()=>{

  const users = useSelector(state=>state.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState(null);
  const usersPerPage = 5;
  const usersOnPage = users&&users.slice(currentPage*usersPerPage - usersPerPage, currentPage*usersPerPage)
          .map(user=>{
              return <tr
                  className="user-item"
                  key={user.id}
              >
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
              </tr>
          });

  const setTimer = () => {
        let i = 1;
        const interval = setInterval(() => {
                setCurrentUser(users[i]);
                i++;
                i = i % users.length
            }, 8000
        );
       return () => clearInterval(interval);
    };

    useEffect(() => {
        dispatch(fetchUsers());
    },[dispatch]);

    useEffect(() => {
        users&&setTimer();
        users&&setCurrentUser(users[0]);
    },[users]);

  return (
    <div className="App">
      <header className="header">
          <h1>Test task</h1>
      </header>
      <main>
          <Table  striped bordered hover variant="dark" className="user-list">
              <thead>
              <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
              </tr>
              </thead>
              <tbody>
              {usersOnPage}
              </tbody>
          </Table>
          <div className="current-user">
              <Card
                  bg="dark"
                  text= 'white'
                  style={{ width: '18rem' }}
                  className="mb-2"
              >
                  <Card.Body>
                      {currentUser&&currentUser.name}
                  </Card.Body>
              </Card>
          </div>

      </main>

        <Pagination
            pages={Math.ceil(users&&users.length / usersPerPage)}
            setCurrentPage={setCurrentPage}
        />

        <footer className="footer">
        </footer>
    </div>
  );
};

export default App;
