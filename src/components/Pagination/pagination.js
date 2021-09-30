import React, { useState } from 'react';
import { Pagination } from '@material-ui/core';
import './pagination.css';
import getWindow from '../getWindow';

const CustomPagination = (props) =>{

    const{width} = getWindow();
    const [current, setCurrent] = useState(1)

    const handleChangePage = (page) =>{
        props.setPage(parseInt(page));
        props.setLoading(true);
        setCurrent(parseInt(page));
        window.scroll(0, 0);
    }

    if(props.pagecurrent !== current){
        setCurrent(props.pagecurrent);
    }

    return(
        <div className="pagination_container">
            <Pagination hideNextButton="false" hidePrevButton="false" count={props.total} page={current} color="primary" size={ width > 539 ? "large" : "small" } onChange={(e) => handleChangePage(e.target.textContent)} />
        </div>
    )

}

export default CustomPagination;