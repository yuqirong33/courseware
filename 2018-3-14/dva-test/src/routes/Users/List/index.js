import React from 'react'
import { Table } from 'antd';

export default function({columns,data,loading}){
    return <Table columns={columns} dataSource={data} loading={loading} rowKey={record => record.id} />
}