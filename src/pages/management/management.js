import React, { Fragment } from "react"
import { Card, Button, Icon, Table , Pagination} from "antd"


class Management extends React.Component {

    columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            render: text => <a>{text}</a>,
        },
        {
            title: '角色名',
            dataIndex: 'name',
        },
        {
            title: '用户列表',
            dataIndex: 'list',
        },
        {
            title: '描述',
            dataIndex: 'describe',
        },
        {
            title: '操作',
            dataIndex: 'del',
        },
    ];
    data = [
        {
            ID: '1',
            name: '超级管理员',
            list: "丁东存",
            describe: '拥有至高无上的权利',
            del: <div>
                    <Button size="small">修改</Button>
                    <Button size="small">删除</Button>
                </div>
        },
        {
            ID: '2',
            name: '总编',
            list: "刘梅枝",
            describe: '具有添加、审核、发布、删除内容的权限',
            del: <div>
                    <Button size="small">修改</Button>
                    <Button size="small">删除</Button>
                </div>
        },
        {
            ID: '3',
            name: '栏目主编',
            list: "刘宝云",
            describe: '只对所在栏目具有添加、审核、发布、删除内容的权限',
            del: <div>
                    <Button size="small">修改</Button>
                    <Button size="small">删除</Button>
                </div>
        },
        {
            ID: '4',
            name: '栏目编辑',
            list: "王帅",
            describe: '只对所在栏目具有添加、删除草稿等权利',
            del: <div>
                    <Button size="small">修改</Button>
                    <Button size="small">删除</Button>
                </div>
        },

    ];

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
                    <div>总数据条数:{this.data.length}</div>
                </div>
                <Card title="角色管理">
                    <Table rowSelection={this.rowSelection} columns={this.columns} dataSource={this.data} pagination={false}/>
                    <Pagination simple defaultCurrent={1} total={50} style={{marginTop:"15px",height:"50px"}}/>
                </Card>
            </Fragment>
        )
    }
}

export default Management