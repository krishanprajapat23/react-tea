import Header from "./components/Header"
import Footer from "./components/Footer"
import logo from "./assets/logo.png"
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
        <Header logo={logo}/>
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout
