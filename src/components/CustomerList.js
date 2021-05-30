import React,{useContext,useState} from 'react';
import {CustomerContext} from './CustomerContext';
import Pagination from './Pagination';
import {Link} from 'react-router-dom';
import List from './List';

const CustomerList = () => {
    const [customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage,defaultBid,setdefaultBid] = useContext(CustomerContext);

    const getBidData = (bidArray,key)=>{ 
        if(bidArray){
            let bids=[];
            bidArray.forEach(eachBid => {
                bids.push(eachBid.amount);
            });
    
            if(key==="max"){
                return(Math.max(...bids)!== -Infinity ? Math.max(...bids) : "NA");
            }else{
                return(Math.max(...bids)!== -Infinity ? Math.min(...bids) : "NA");
            }
        }else{
            return("invalid data")
        }
    }

    const toggleDefaultBid = () => {
        defaultBid==="max" ? setdefaultBid("min") : setdefaultBid("max");
    }

    const updatedCustomer = () =>{
        return(
            customerAPI.map(item=>{
                const max_val = getBidData(item.bids,"max");
                const min_val = getBidData(item.bids,"min");
                return(
                    {...item,
                    max:max_val,
                    min:min_val
                    }
                );
            })
        )
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
                <List UpdatedCostumer={updatedCustomer()} />
            </div>
            <div className="pagination">
                <Pagination/>
            </div>
        </div>
    )
}

export default CustomerList
