import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'
import BottomNav from '../bottomNav/BottomNav'

const Layout = () => {
    return (
        <div>
            <Header />
            <main className='mb-50 pt-36 container mx-auto px-2 md:px-0 2xl:px-33 w-full'>
                <Outlet />
            </main>
            <BottomNav/>
            <Footer />
        </div>
    )
}

export default Layout
