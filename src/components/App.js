import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './Navbar'
import Home from './Home'
import Tariff from './Tariff'
import Contact from './Contact'

const App = () => {
    return (
        <div>
            <Nav />
            <Route path="/" exact component={Home} />
            <Route path="/tariff" exact component={Tariff} />
            <Route path="/contact" exact component={Contact} />
        </div>
    )
}


export default App;