import React, { useState, useReducer,useContext } from 'react';
import GlobalContext from './productContext';
import { requests } from '../api/searchAgent'

const GlobalState = props => {

    let [results, setResults] = useState(false);
    // let [username, setUn] = useState(false);

    // let [authState, setRawState] = useState({
    //     auth: false,
    //     username: false,
    // });
    // const setAuthState = (obj) => {
    //     setRawState({ ...authState, ...obj })
    // }
    // const logout = () => {
    //     setAuth(false);
    //     setUn(false);
    // }
    const fetchProducts = (query) => {

        requests.call("get", query ? `products?query=${query}` : "products")
            .then((res) => {
                console.log("setting the state with", res.data)
               setResults(res.data)
            })
            .catch(() => {
                setResults(false)

            })


    }

    return (
        <GlobalContext.Provider
            value={{
                results, setResults,
                fetchProducts
               
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;