import React, {useState, useEffect,} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from '../actions';
import Spinner from './spinner/spinner';
import Pagination from './pagination/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from "./main/main";

const App = () => {

    const users = useSelector(state => state.users);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [currentUser, setCurrentUser] = useState(null);
    const usersPerPage = 5;
    const usersOnPage = users && users.slice(currentPage * usersPerPage - usersPerPage, currentPage * usersPerPage)
        .map(user => {
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
    }, [dispatch]);

    useEffect(() => {
        users && setTimer();
        users && setCurrentUser(users[0]);
    }, [users]);

    const main = !loading && users ? <Main
        usersOnPage={usersOnPage}
        currentUser={currentUser}
    /> : null;
    const errorView = !loading && error ? <div className="error">{`Error: ${error}`}</div>: null;
    const spinner = loading ? <Spinner/> : null;

    return (
        <div className="App">
            <header className="header">
                <h1>Test task</h1>
            </header>
            {main}
            {errorView}
            {spinner}
            <Pagination
                pages={Math.ceil(users && users.length / usersPerPage)}
                setCurrentPage={setCurrentPage}
            />
            <footer className="footer">
            </footer>
        </div>
    );
};

export default App;
