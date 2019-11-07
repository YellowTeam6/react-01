import React, { Fragment } from "react"
import { Card, Button , Icon} from "antd"

class Management extends React.Component {
    constructor() {
        super()
        this.state = {
            nav: ["ID", "权限", "用户列表", "描述", "操作"]
        }
    }
    render() {
        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button style={{marginBottom:"0.2rem",background:"skyblue"}}>
                        <Icon type="plus" />
                        添加角色
                    </Button>
                    <div>总数据条数{this.state.nav.length}</div>
                </div>
                <Card title="角色管理">
                    122
                </Card>
            </Fragment>
        )
    }
}

export default Management