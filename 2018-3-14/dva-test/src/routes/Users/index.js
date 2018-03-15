import React from 'react'
import {connect} from 'dva';
import List from './List'

class Users extends React.Component {
    render(){
        const {loading,users:{list}} = this.props;

        // 列表参数
        const ListProps = {
            columns:[{
                title: 'ID',
                dataIndex: 'name',
                key:'1'
              }, {
                title: '姓名',
                dataIndex: 'name',
                key:'2'
              }, {
                title: 'phone',
                dataIndex: 'phone',
                key:'3'
              }],
            data:list,
            loading
        }

        return (
            <div>
                <List {...ListProps} />
            </div>
        )
    }
}

export default connect((state)=>({
    users:state.users,
    loading:state.loading.global
}))(Users)