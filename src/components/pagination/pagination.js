import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import './pagination.css';

const Pagination = (props) => {

    const {pages, setCurrentPage} = props;

    const createPages = ()=> {
        let arr = [];
        for(let i = 1; i <= pages; i++) {
            arr.push(i)
        }
        return arr.map((page)=> <Button
            variant='secondary'
            className="h-100"
            key={page}
            onClick={()=>setCurrentPage(page)}
            >
                {page}
           </Button>
        );
    };

    return (<div className="pagination">
            <ButtonGroup
                size="sm-2"
                variant="secondary"
                aria-label="First group">
                {createPages()}
            </ButtonGroup>
           </div>
    );
};

export default Pagination;
