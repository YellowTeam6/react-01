import React from "react"
import ReactEcharts from 'echarts-for-react';
import {Card} from "antd"

class Pie extends React.Component{
    getOption(){
        return{
            title : {
                text: '丁东存日常状态图',
                subtext: '真实无虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['拉屎','放屁','犯困','迷糊','重启电脑','学习']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:8, name:'拉屎'},
                        {value:2, name:'放屁'},
                        {value:4, name:'犯困'},
                        {value:5, name:'迷糊'},
                        {value:0.1, name:'学习'},
                        {value:3, name:'重启电脑'},
                        
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ] 
        } 
    }
    render(){
        return(
            <Card>
                <ReactEcharts option={this.getOption()} />
            </Card>
        )
    }
}
export default Pie