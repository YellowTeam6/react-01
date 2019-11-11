import React, { Fragment } from "react"
import { Card, Button, Icon, Table } from "antd"
import Add from "../../components/add/add"


class Management extends React.Component {
    constructor(){
        super();
        this.state={
            dataSource:[],
            total:0,
            flag:false
        }
    }
    columns = [
        {
            title: '账号',
            dataIndex: 'us',
            key: 'name',
        },
        {
            title: '密码',
            dataIndex: 'ps',
            key: 'age',
        },
        {
            title: '操作',
            key: 'del',
            render: (data,flag) => {
                return (
                    <div>
                        <Button size="small" onClick={()=>{
                            console.log(flag)
                           
                        }}>修改</Button>
                        <Button size="small" onClick={this.del.bind(this,data._id)}>删除</Button>  
                    </div>
                    
                )
            }
        },
    ]
    componentDidMount(){
        this.Management()
    }
    Management(){
        this.$axios.post("/hehe/admin/supperuser/findByKw")
        .then((data)=>{
            console.log(data)
            if(data.err===0){
                this.setState({dataSource:data.list,total:data.total})
            }
        })
    }
    del(_id){
        this.$axios.post("/hehe/admin/supperuser/del",{_id})
        .then((data)=>{
            console.log(data)
            if(data.err===0){
                this.Management()
            }
        })
    }
    add(){
        this.setState({flag:true})
    }
    adds(val){
        if(val){
            this.setState({flag:false})
            this.Management()
        }else{
            this.setState({flag:false})
        }
        
    }
    render() {
        let {dataSource,total,flag} = this.state;
        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Button style={{ marginBottom: "0.2rem", background: "skyblue" }} onClick={this.add.bind(this)}>
                        <Icon type="plus" />
                        添加角色
                    </Button>
                </div>
                    <div>总数据条数:{total}</div>
                </div>
                <Card title="角色管理">
                    <Table columns={this.columns} dataSource={dataSource} rowKey="_id"/>
                </Card>
                {flag?<Add adds={this.adds.bind(this)} ></Add>:""}
            </Fragment>
        )
    }
}

export default Management