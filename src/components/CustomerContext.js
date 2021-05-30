import React,{useState,createContext, useEffect} from 'react';
import axios from "axios";

export const CustomerContext = createContext(); 

export const CustomerProvider = props => {
    const [customerAPI, setcustomerAPI] = useState({});
    const [isLoading,setisLoading]= useState(true);

    useEffect(()=>{
        const fetchItems = async() => {
            const result = await axios('https://intense-tor-76305.herokuapp.com/merchants');
            console.log(result.data);
            setcustomerAPI(result.data);
            setisLoading(false);
        } 
        fetchItems();
    },[])

    return (
        <CustomerContext.Provider value={[customerAPI,setcustomerAPI,isLoading]}>
            {props.children}
        </CustomerContext.Provider>
    )
}

