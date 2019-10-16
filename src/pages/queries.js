import React, { useContext, useEffect, useState } from 'react';
import {requests} from '../api/searchAgent'

const Queries = props => {
    const [productDetails,setProductDetails] = useState(false);
    useEffect(()=>{
        requests.call("get",`queries`)
        .then((res)=>{
            console.log(res);
            setProductDetails(res.data)
        })
    },[])
   
   let content = <div>{JSON.stringify(productDetails)}</div>

    return content;

}

export default Queries