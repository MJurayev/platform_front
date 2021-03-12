import React from 'react'
import { Route } from 'react-router'
import BooksList from '../../components/BooksList/BooksList'
// import CategoryItems from '../../components/CategoryItems/CategoryItems'
import Footer from '../../components/Footer/Footer'
import MundarijaHeader from '../../components/MundarijaHeader/MundarijaHeader'
import Navbar from '../../components/Navbar/Navbar'
import PosterList from '../../components/PosterList/PosterList'
import SlideList from '../../components/SlideList/SlideList'

export default function Mundarija() {
    return (
        <div>
            <Navbar />
            <MundarijaHeader />
            <Route path="/mundarija/posters"><PosterList/></Route>
            <Route path="/mundarija/books"><BooksList/></Route>
            <Route path="/mundarija/slides"><SlideList/></Route>
            <Footer />
        </div>
    )
}
