import React,{useContext} from 'react';
import {CustomerContext} from './CustomerContext';
import {Link} from 'react-router-dom';

const List = ({UpdatedCostumer}) => {
    const [customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage,defaultBid,setdefaultBid] = useContext(CustomerContext);
    const indexOfLastCustomer = currentPage*customerPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer-customerPerPage;
    const currentCustomer = UpdatedCostumer.slice(indexOfFirstCustomer,indexOfLastCustomer);

    const displayList= () =>{
        if(!isLoading){
            return currentCustomer.map(item=>{
                return(
                    <Link to={"customer/"+item.id}>
                        <div className="customerDiv" key={item.id}>
                            <div className="customerAvtar">
                                <img src={item.avatarUrl} alt="avtar"/>
                            </div>
                            <div className="customerDetail">
                                <label>Customer - </label>{item.firstname? item.firstname +" "+item.lastname : "invalid data in JSON"}<br/>
                                <label>Email - </label>{item.email? item.email : "invalid data in JSON"}<br/>
                                <label>Phone - </label>{item.phone? item.phone : "invalid data in JSON"}<br/>
                            </div>
                            <div className="customerBid">
                                <label>{defaultBid} bid =</label>{item[defaultBid]}
                                <br/>
                                {"(Click to see all bids)"}
                            </div>
                        </div>
                    </Link>
                )
            })
        }else{
            return("Fetching data....")
        }
    }


    return (
        displayList()
    )
}

export default List
