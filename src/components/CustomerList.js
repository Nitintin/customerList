import React,{useContext} from 'react';
import {CustomerContext} from './CustomerContext';

const CustomerList = () => {
    const [customerAPI, setcustomerAPI,isLoading] = useContext(CustomerContext);

    const displayCustomer=()=>{
        if(!isLoading){
            return customerAPI.map(item=>{
                return(
                    <div className="customerDiv" key={item.id}>
                        <div className="customerAvtar">
                            <img src={item.avatarUrl} width="100" height="100" alt="avtar"/>
                        </div>
                        <div className="customerDetail">
                            <label>Customer - </label>{item.firstname} {item.lastname}<br/>
                            <label>Email - </label>{item.email}<br/>
                            <label>Phone - </label>{item.phone}<br/>
                        </div>
                        <div className="customerBid">
                            {getMaxBid(item.bids)}
                        </div>
                    </div>
                )
            })
        }else{
            return("Loading")
        }
    }

    const getMaxBid = (bidArray) =>{
        let bids=[];
        bidArray.forEach(eachBid => {
            bids.push(eachBid.amount);
        });
        return(
            <div>Maximum Bid = {Math.max(...bids)}</div>
        );
    }

    const getMinBid = (bidArray) => {
        let bids=[];
        bidArray.forEach(eachBid => {
            bids.push(eachBid.amount);
        });
        return(
            <div>Minimum Bid = {Math.min(...bids)}</div>
        );
    }


    return (
        <div className="wrapperDiv">
            <div className="customerList">
                {displayCustomer()}
            </div>
        </div>
    )
}

export default CustomerList
