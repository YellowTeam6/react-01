
import React from "react"
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import loadable from "./utils/loadable"

const Login = loadable (()=>import("./pages/login/login"))
const Admin = loadable (()=>import("./pages/admin/admin"))
const Reg = loadable (()=>import("./pages/reg/reg"))
const Management = loadable(()=>import("./pages/management/management"))
const Pie = loadable (()=>import("./pages/pie/pie"))
const Update = loadable (()=>import("./pages/update/update"))
class RootRoute extends React.Component{
    render(){
       return(
        <HashRouter>
            <Switch>
                <Redirect exact from="/" to="/admin/user/login"></Redirect>
                <Route path="/admin/user/login" component={Login}></Route>
                <Route path="/admin/user/reg" component={Reg} ></Route>
                <Route path="/admin" component={()=>{
                    return (
                        <Admin>
                            <Route path="/admin/user" component={Management}></Route>
                            <Route path="/admin/home" component={Pie}></Route>
                            <Route path="/admin/foodlist" component={Update}></Route>
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