import React, { Component } from 'react';
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class MyList extends Component {
    render() { 
        let {dataList} = this.props;
        return (
            <List  className="my-list">
                <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() => {}}
                >
                    {dataList.filename} 
                </Item>
            </List>
        )
    }
}
 
export default MyList;