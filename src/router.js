
import React from "react"
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import loadable from "./utils/loadable"

const Login = loadable (()=>import("./pages/login/login"))
const Admin = loadable (()=>import("./pages/admin/admin"))
const Reg = loadable (()=>import("./pages/reg/reg"))
const Management = loadable(()=>import("./pages/management/management"))
class RootRoute extends React.Component{
    render(){
       return(
        <HashRouter>
            <Switch>
                <Redirect exact from="/" to="/login"></Redirect>
                <Route path="/login" component={Login}></Route>
                <Route path="/reg" component={Reg} ></Route>
                <Route path="/admin" component={()=>{
                    return (
                        <Admin>
                            <Route path="/admin/management" component={Management}></Route>
                        </Admin>
                    )
                }}>  
                </Route>
            </Switch>
        </HashRouter>
       )
    }
}
export default RootRoute