import React, { memo } from 'react'

const Firstcomponent = () => {
    console.log('First component called');
  return (
    <div>
      <h3> my First react component</h3>
    </div>
  )
}

export default memo(Firstcomponent)
