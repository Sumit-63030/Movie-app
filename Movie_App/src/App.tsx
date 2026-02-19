
// import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
// import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import Trending from './pages/Trending'
import Movies from './pages/Movies'
import Tv from './pages/Tv'
import Search from './pages/Search'
import Error from './pages/Error'
const  App = () =>{



  return (
    <>
    <Header />
    <Routes>
    <Route path = "/" element = {<Trending />}/>
    <Route path = "/movies" element = {<Movies />}/>
    <Route path = "/tv" element = {<Tv/>}/>
    <Route path = "/search" element = {<Search />}/>
    <Route path = "*" element = {<Error />}/>
    </Routes>
    <Footer />
    
    </>
  )
}

export default App;
