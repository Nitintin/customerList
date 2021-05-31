import React,{useContext,useState} from 'react';
import {CustomerContext} from './CustomerContext';
import Pagination from './Pagination';
import List from './List';

//material UI
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 40
    },
    selectEmpty: {
      marginTop: theme.spacing(10)
    }
}));

const CustomerList = () => {
    const [customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage,defaultBid,setdefaultBid] = useContext(CustomerContext);
    const [sort,setSort] = useState(0);

    const classes = useStyles();
    
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
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label" >Sort By</InputLabel>
                            <Select name="sortDropdown" onChange={(e)=>setSort(parseInt(e.target.value))} labelId="demo-simple-select-label" id="demo-simple-select" >
                                <MenuItem value="0">Choose...</MenuItem>
                                <MenuItem value="1">Asc Order</MenuItem>
                                <MenuItem value="2">Desc Order</MenuItem>
                            </Select>
                    </FormControl>
                </div>
                <div className="defaultBidCTA">
                    <Button variant="contained" color="primary" onClick={()=>toggleDefaultBid()}>Show {defaultBid==="max"? "min" : "max" } bid</Button>
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
