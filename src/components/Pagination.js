import React,{useContext} from 'react';
import {CustomerContext} from './CustomerContext';

const Pagination = () => {
    const [customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage] = useContext(CustomerContext);
    const totalPages = Math.ceil(customerAPI.length/customerPerPage);
    
    const displayPagination = () =>{
        var paginationButton = [];
        for(var i=1 ; i<=totalPages;i++){
            paginationButton.push(i);
        }

        return(paginationButton.map(item => <button key={item} onClick={()=>setcurrentPage(item)}>{item}</button>));
    }

    return (
        <>
            {displayPagination()}
        </>
    )
}

export default Pagination
