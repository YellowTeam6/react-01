import Loadable from 'react-loadable';
import React from "react"
import {Icon} from "antd"

const Loadingdom = ()=>{
    return (
        <div style={{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Icon type="loading" style={{color:"orange",fontSize:"2.5rem"}}/>
        </div>
    )
}

export default (loader,loading=Loadingdom)=>{
    return  Loadable({
        loader,
        loading
    })
}