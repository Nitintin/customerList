import React,{useContext} from 'react';
import {CustomerContext} from './CustomerContext';


const CustomerBid = ({match}) => {
    const [customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage] = useContext(CustomerContext);

    const fetchAllBids = () => {
        if(!isLoading){
            const customerID = match.url.split("/")[2];
            const selectedUserDetails = customerAPI.filter(item => item.id === customerID)[0];
            if(selectedUserDetails.bids){
                if(selectedUserDetails.bids.length>0){
                    return(selectedUserDetails.bids.map(item => {
                        return(
                            <div className="customerDiv" key={item.id}>
                                <div className="customerBidList">
                                    <label>Txn Amount - </label>{item.amount}
                                </div>
                                <div className="customerBidList">
                                    <label>Txn For - </label>{item.carTitle}
                                </div>
                                <div className="customerBidList">
                                    <label>Txn Date - </label>
                                    {Date(item.created).split("GMT")[0]}
                                </div>
                            </div>
                        )
                    }));
                }else{
                    return(<div className="customerDiv">No Transactions to display for this user</div>)
                }
                
            }else{
                return(<div className="customerDiv">Invalid data coming from API!</div>)
            }
            
        }else{
            return(<div>Details are being fetched</div>)
        }

    }
    return (
        <div className="wrapperDiv">
            {fetchAllBids()}
        </div>
    )
}

export default CustomerBid
