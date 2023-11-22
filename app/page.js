import React from "react"
import RootLayout from "./layout"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import WorkEx from "./components/WorkEx"

export const metadata = {
  title: 'Home',
  description: 'homepage',
  icons: {
    icon: '/icon.ico',
  },
}

export default function Home() {
  return (
    <RootLayout>
      <Header/>
      <Projects/>
      <WorkEx/>
      <Footer/>
    </RootLayout>
  )
}