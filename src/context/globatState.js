import React, { useState, useReducer, useContext } from 'react';
import GlobalContext from './productContext';
import { requests } from '../api/searchAgent'

const GlobalState = props => {

    let [results, setResults] = useState(false);
    let [queriesList, setQueriesList] = useState(false);

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

    const settingQueriesList = () => {
        requests.call("get", `queries`)
            .then((res) => {
                console.log("coming from context", res.data)
                setQueriesList(res.data)
            })
    }
    return (
        <GlobalContext.Provider
            value={{
                results, setResults,
                fetchProducts,
                setQueriesList, queriesList,
                settingQueriesList,

                }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};

export default GlobalState;