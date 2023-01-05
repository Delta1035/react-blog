import { api } from '@src/services/api.service'
import { Pagination } from 'antd';
import React, { useState } from 'react'

export default function articleList() {
  const [index,setIndex] = useState(1);
  const [size,setSize] = useState(10);
  api.getArticle(index,size).then(articleList=>{
    console.log('articleList :>> ',articleList);
  })


  return (
    <div>
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
    </div>
  )
}
