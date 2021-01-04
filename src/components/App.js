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
            <section class="bg-light">
                <Route path="/" exact component={Home} />
                <Route path="/cennik" exact component={Tariff} />
                <Route path="/kontakt" exact component={Contact} />
            </section>
        </div>
    )
}


export default App;