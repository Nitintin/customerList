import React,{useContext,useState} from 'react';
import {CustomerContext} from './CustomerContext';
import Pagination from './Pagination';
import {Link} from 'react-router-dom';
import List from './List';

const CustomerList = () => {
    const [customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage,defaultBid,setdefaultBid] = useContext(CustomerContext);
    const [sort,setSort] = useState(0);

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
        return(customerAPI.map(item=>{
            const max_val = getBidData(item.bids,"max");
            const min_val = getBidData(item.bids,"min");
            return(
                {...item,
                max:max_val,
                min:min_val
                }
            );
        }));
    }

    return (
        <div className="wrapperDiv">
            <div className="clickToAction">
                <div className="otherCTA">

                </div>
                <div className="filterCTA">
                    <select name="sortDropdown" onChange={(e)=>setSort(parseInt(e.target.value))} >
                        <option value="0">Sort By...</option>
                        <option value="1">Asc Order</option>
                        <option value="2">Desc Order</option>
                    </select>
                </div>
                <div className="defaultBidCTA">
                    <button onClick={()=>toggleDefaultBid()}>Show {defaultBid==="max"? "min" : "max" } bid</button>
                </div>
            </div>
            <div className="customerList">
                <List UpdatedCustomer= {updatedCustomer()} sort={sort}/>
            </div>
            <div className="pagination">
                <Pagination/>
            </div>
        </div>
    )
}

export default CustomerList
