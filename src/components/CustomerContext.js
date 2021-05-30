import React,{useState,createContext, useEffect} from 'react';
import axios from "axios";

export const CustomerContext = createContext(); 

export const CustomerProvider = props => {
    const [customerAPI, setcustomerAPI] = useState([]);
    const [isLoading,setisLoading]= useState(true);
    const [customerPerPage,setcustomerPerPage] = useState(3);
    const [currentPage,setcurrentPage] = useState(1);

    useEffect(()=>{
        const fetchItems = async() => {
            const result = await axios('https://intense-tor-76305.herokuapp.com/merchants');
            setcustomerAPI(result.data);
            setisLoading(false);
        } 
        fetchItems();
    },[])

    return (
        <CustomerContext.Provider value={[customerAPI,setcustomerAPI,isLoading,customerPerPage,setcustomerPerPage,currentPage,setcurrentPage]}>
            {props.children}
        </CustomerContext.Provider>
    )
}

