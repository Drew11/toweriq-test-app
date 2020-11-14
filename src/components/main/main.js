import React from 'react';
import { Table , Card } from 'react-bootstrap';
import './main.css';

const Main = (props) => {
    const {usersOnPage, currentUser} = props;
    return (
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
        )

};

export default Main;