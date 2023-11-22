import React from "react"
import RootLayout from "./layout"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Projects from "./components/Projects"

export const metadata = {
  title: 'Home',
  description: 'homepage',
}

export default function Home() {
  return (
    <RootLayout>
      <Header/>
      <Projects/>
      <Footer/>
    </RootLayout>
  )
}