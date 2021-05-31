import React,{useContext} from 'react';
import {CustomerContext} from './CustomerContext';
import {Link} from 'react-router-dom';

//material UI
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    }
}));

  
const List = ({UpdatedCustomer,sort}) => {
    const classes = useStyles();
    const [customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage,defaultBid,setdefaultBid] = useContext(CustomerContext);
    const indexOfLastCustomer = currentPage*customerPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer-customerPerPage;
    let currentCustomer;
    if(sort===0){
        currentCustomer = UpdatedCustomer.slice(indexOfFirstCustomer,indexOfLastCustomer);
    }
    else if(sort===1){
        currentCustomer = UpdatedCustomer.sort((a, b) => {return a[defaultBid] - b[defaultBid]}).slice(indexOfFirstCustomer,indexOfLastCustomer);
    }else if(sort===2){
        currentCustomer = UpdatedCustomer.sort((a, b) => {return b[defaultBid] - a[defaultBid]}).slice(indexOfFirstCustomer,indexOfLastCustomer);
    }

    const displayList= () =>{
        if(!isLoading){
            return currentCustomer.map(item=>{
                return(
                    <Paper elevation={3} >
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
                    </Paper>
                )
            })
        }else{
            return("Fetching data....")
        }
    }


    return (
        <div>
            {displayList()}
        </div>
    )   
}

export default List
