import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'

const AppLayout = () => {

  const navigation = useNavigation();
  if(navigation.state === "loading") {
    return "Loading...";
  }
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppLayout
