import Loadable from 'react-loadable';
import React from "react"

const Loadingdom = ()=>{
    return (
        <span>loading...</span>
    )
}

export default (loader,loading=Loadingdom)=>{
    return  Loadable({
        loader,
        loading
    })
}