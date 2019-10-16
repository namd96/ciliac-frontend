import React, { useContext, useEffect, useState } from 'react';
import {requests} from '../api/searchAgent'

const ProductDetails = props => {
    const [productDetails,setProductDetails] = useState(false);
    useEffect(()=>{
        requests.call("get",`product/${props.match.params.id}`)
        .then((res)=>{
            console.log(res);
            setProductDetails(res.data)
        })
    },[])
   
   let content = <div>{props.match.params.id}{JSON.stringify(productDetails)}</div>

    return content;

}

export default ProductDetails