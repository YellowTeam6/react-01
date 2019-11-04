import React from "react"
import {HashRouter,Link,Switch,Route,withRouter,Redirect} from 'react-router-dom'
import Login from "./pages/login/login"
import Admin from "./pages/admin/admin"

class RootRoute extends React.Component{
    render(){
       return(
        <HashRouter>
            <Switch>
                <Redirect exact from="/" to="/login"></Redirect>
                <Route path="/login" component={Login}></Route>
                <Route path="/admin" component={Admin} ></Route>
            </Switch>
        </HashRouter>
       )
    }
}
export default RootRoute