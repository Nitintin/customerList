import React,{useContext,useState} from 'react';
import {CustomerContext} from './CustomerContext';
import Pagination from './Pagination';

const CustomerList = () => {
    const [customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage] = useContext(CustomerContext);
    const [defaultBid,setdefaultBid]=useState("max");
    const indexOfLastCustomer = currentPage*customerPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer-customerPerPage;
    const currentCustomer = customerAPI.slice(indexOfFirstCustomer,indexOfLastCustomer);

    const displayCustomer=()=>{
        if(!isLoading){
            return currentCustomer.map(item=>{
                return(
                    <div className="customerDiv" key={item.id}>
                        <div className="customerAvtar">
                            <img src={item.avatarUrl} alt="avtar"/>
                        </div>
                        <div className="customerDetail">
                            <label>Customer - </label>{item.firstname} {item.lastname}<br/>
                            <label>Email - </label>{item.email}<br/>
                            <label>Phone - </label>{item.phone}<br/>
                        </div>
                        <div className="customerBid">
                            {showBid(item.bids)}
                        </div>
                    </div>
                )
            })
        }else{
            return("Fetching data....")
        }
    }

    const showBid = (bidArray)=>{
        
        if(bidArray){
            let bids=[];
            bidArray.forEach(eachBid => {
                bids.push(eachBid.amount);
            });
    
            if(defaultBid==="max"){
                return(
                    <div>Maximum Bid = {Math.max(...bids)!== -Infinity ? Math.max(...bids) : "NA"}</div>
                );
            }else{
                return(
                    <div>Minimum Bid = {Math.max(...bids)!== -Infinity ? Math.min(...bids) : "NA"}</div>
                );
            }
        }
        
    }

    const toggleDefaultBid = () => {
        defaultBid==="max" ? setdefaultBid("min") : setdefaultBid("max");
    }


    return (
        <div className="wrapperDiv">
            <div className="clickToAction">
                <div className="otherCTA">

                </div>
                <div className="filterCTA">
                    
                </div>
                <div className="defaultBidCTA">
                    <button onClick={()=>toggleDefaultBid()}>Show {defaultBid==="max"? "min" : "max" } bid</button>
                </div>
            </div>
            <div className="customerList">
                {displayCustomer()}
            </div>
            <div className="pagination">
                <Pagination/>
            </div>
        </div>
    )
}

export default CustomerList
