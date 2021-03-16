import React from 'react'
import { Route } from 'react-router'
import BooksList from '../../components/BooksList/BooksList'
import MundarijaHeader from '../../components/MundarijaHeader/MundarijaHeader'

import PosterList from '../../components/PosterList/PosterList'
import SlideList from '../../components/SlideList/SlideList'
import TestsList from '../../components/TestsList/TestsList'

export default function Mundarija() {
    return (
        <div>
            <MundarijaHeader />
            <Route path="/mundarija/posters"><PosterList/></Route>
            <Route path="/mundarija/books"><BooksList/></Route>
            <Route path="/mundarija/slides"><SlideList/></Route>
            <Route path="/mundarija/tests"><TestsList/></Route>
        </div>
    )
}
