import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'

const MainLayout = (props) => {
    return (
        <>
            <Navbar />
            <div className="container main-contaniner">
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout
