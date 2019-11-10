import React, { Fragment } from "react"
import Style from  "./update.module.less"
import { Table, Divider, Tag,Card, Button } from 'antd';

const { Column, ColumnGroup } = Table;
const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

class Update extends React.Component{
    constructor(){
        super()
        this.state={
            dataSource:[],
            img:""
        }
    }

    getList(){
        this.$axios.post("/hehe/admin/food/findByTypePage").then((data)=>{
            console.log(data)
            if(data.err===0){
                this.setState({dataSource:data.list,name:data.name,desc:data.desc,price:data.price})
            }
        })
    }
    componentDidMount(){
        this.getList()
    
    }

    update=()=>{
        console.log(this.refs.file)
        //let img=this.refs.file.files[0]
        let File=new FileReader()
        File.onload=()=>{
            console.log("结束")
            console.log(File.result)
            //this.setState({img:File.result})
        }
        console.log(File)
        //File.readAsDataURL(img)
    }
    delete=(_id)=>{
        this.$axios.post("/hehe//admin/food/del",{_id}).then((data)=>{
            console.log(data)
            this.getList()
        })
    }
    render(){
        let {dataSource,name,desc,price}=this.state
        return(
            <Table dataSource={dataSource}>
                <Column title="商品名称" dataIndex="name" key="name" />
                <Column title="价格" dataIndex="price" key="price" />
                <Column title="详情" dataIndex="desc" key="desc" />
                <Column
                title="商品图片"
                key="action"
                render={() => (
                    <Fragment >
                            <input type="file" ref="file" id="file"/>
                    </Fragment>

                )}
                />
                <Column
                title="操作"
                key="action"
                render={(data) => (
                    <Fragment><Button onClick={this.update.bind(this)}>提交</Button><Button onClick={this.delete.bind(this,data._id)}>删除</Button></Fragment>
                )}
                />
            </Table>
            
        )
    }
}
export default Update