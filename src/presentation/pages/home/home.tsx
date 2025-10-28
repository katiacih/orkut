import React from 'react'
import Menu from '../../../main/menu/menu'
import LandingContent from './landing-content'
import Navbar from '../../components/navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <LandingContent title='teste' isShowBreacrumbs={false}>
        <Menu />
      </LandingContent>

    </div>    
  )
}

export default Home
