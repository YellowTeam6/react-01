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
        let img=this.refs.file.files[0]
        let File=new FileReader()
        File.onload=()=>{
            console.log("结束")
            console.log(File.result)
            this.setState({img:File.result})
        }
        console.log(File)
        File.readAsDataURL(img)
    }
    render(){
        return(
            <Fragment >
            <Card className={Style.card}>
                <input type="file" ref="file"/>
                <br/>
                <button onClick={this.update.bind(this)}>提交</button>
                <br/>
                <img src={this.state.img} className={Style.img}/>

            </Card>
            </Fragment>
        )
    }
}
export default Update