import React from 'react'
import HeaderMiddle from './component/HeaderMiddle';
import links from './data'
import Hero from './component/hero'
const index = () => {


  return (
    <div>
      <HeaderMiddle links={links}/>
      <Hero/>
    </div>
  )
}

export default index
