import React from 'react'
import Head from 'next/head'
import { useSession } from "next-auth/react";

import layoutStyles from '../styles/Layout.module.css'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

function Layout({ children }) {
  const { data: session } = useSession();
  
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta name='keywords' content='E-commerce' />
      </Head>
      <Navbar session={session}/>
      <main className={layoutStyles.container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout