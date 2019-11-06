import React, { Fragment } from "react"
import {Card} from "antd"
import Style from  "./update.module.less"

class Update extends React.Component{
    constructor(){
        super()
        this.state={
            img:""
        }
    }
    update(){

    }
    render(){
        return(
            <Fragment >
            <Card className={Style.card}>
                <input type="file" ref="file"/>
                <br/>
                <button onClick={this.update}>提交</button>
                <br/>
                <img src="this.state.img" className={Style.img}/>
            </Card>
            </Fragment>
        )
    }
}
export default Update