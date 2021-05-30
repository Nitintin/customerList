import React,{useState,createContext} from 'react';

export const CustomerContext = createContext(); 

export const CustomerProvider = props => {
    const [customerAPI, setcustomerAPI] = useState({
        'name':'nitin',
        'age':24
    });

    return (
        <CustomerContext.Provider value={[customerAPI,setcustomerAPI]}>
            {props.children}
        </CustomerContext.Provider>
    )
}

