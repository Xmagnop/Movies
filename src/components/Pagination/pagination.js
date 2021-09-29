import React from 'react';
import { Pagination } from '@material-ui/core';
import './pagination.css';
import getWindow from '../getWindow';

const CustomPagination = (props) =>{

    const{width} = getWindow();

    const handleChangePage = (page) =>{
        props.setPage(page);
        window.scroll(0, 0);
    }

    return(
        <div className="pagination_container">
            <Pagination count={props.total} color="primary" size={ width > 539 ? "large" : "small" } onChange={(e) => handleChangePage(e.target.textContent)} />
        </div>
    )

}

export default CustomPagination;