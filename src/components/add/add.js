import React from "react"
import { Card , Button , message} from "antd"
import Style from "./add.module.less"

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            us: "",
            ps: "",
        }
    }
    add(){
        let {us,ps} = this.state
        this.props.adds(1)
        this.$axios.post("/hehe/admin/supperuser/add",{us,ps})
        .then((data)=>{
            console.log(data)
            if(data.err===0){
                message.success("添加成功")
                this.props.adds(1)
            }
        })
    }
    render() {
        let { us, ps } = this.state
        return (
            <div className={Style.div}>
                <Card className={Style.card} title="添加用户">
                    <label>账号：</label>
                    <input type="text" value={us} onChange={(e) => {
                        this.setState({ us: e.target.value })
                    }} />
                    <br/>
                    <label>密码：</label>
                    <input type="text" value={ps} onChange={(e) => {
                        this.setState({ ps: e.target.value })
                    }} />
                    <br/>
                    <Button className={Style.btn} onClick={this.add.bind(this)}>添加</Button>
                </Card>
            </div>

        )
    }
}

export default Add