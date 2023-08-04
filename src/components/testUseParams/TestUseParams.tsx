import React from 'react'
import { useParams } from 'react-router-dom'

const TestUseParams = () => {
    const { id } = useParams(); 
  return (
    <div>TestUseParams {id} </div>
  )
}

export default TestUseParams