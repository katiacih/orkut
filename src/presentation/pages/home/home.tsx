import React from 'react'
import Menu from '../../../main/menu/menu'
import Contents from './contents'
import Navbar from '../../components/navbar'
import CardProfile from '../../components/card-profile'

function Home() {
  return (
    <div>
      <Navbar />
      <Contents />
      <CardProfile />
      <Menu />
    </div>    
  )
}

export default Home
