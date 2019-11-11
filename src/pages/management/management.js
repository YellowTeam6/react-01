import React, { Fragment } from "react"
import { Card, Button, Icon, Table , Pagination} from "antd"


class Management extends React.Component {
    constructor(){
        super();
        this.state={
            dataSource:[],
            total:0
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
            render: (data) => {
                return (
                    <div>
                        <Button size="small">修改</Button>
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
    // rowSelection object indicates the need for row selection
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    render() {
        let {dataSource,total} = this.state;
        return (
            <Fragment>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Button style={{ marginBottom: "0.2rem", background: "tomato" }}>
                        <Icon type="close" />
                        批量删除
                    </Button>
                    <Button style={{ marginBottom: "0.2rem", background: "skyblue" }} >
                        <Icon type="plus" />
                        添加角色
                    </Button>
                </div>
                    <div>总数据条数:{total}</div>
                </div>
                <Card title="角色管理">
                    <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={dataSource} pagination={false}/>
                    <Pagination simple defaultCurrent={1} total={50} style={{marginTop:"15px",height:"50px"}}/>
                </Card>
            </Fragment>
        )
    }
}

export default Management