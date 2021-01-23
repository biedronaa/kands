import React from 'react'
import {Route} from 'react-router-dom'
import Nav from './Navbar'
import Home from './Home'
import Tariff from './Tariff'
import Contact from './Contact'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3'
import Footer from './Footer'
import Calculator from './Calculator'

const App = () => {
    return (
        <div>
            <Nav />
            <section>
                <Route path="/" exact component={Home} />
                <Route path="/cennik" exact component={Tariff} />
                <Route path="/kontakt" exact component={Contact} />
                <Route path="/1" exact component={Service1} />
                <Route path="/2" exact component={Service2} />
                <Route path="/3" exact component={Service3} />
                <Route path="/kalkulator" exact component={Calculator} />
            </section>
            <Footer />
        </div>
    )
}


export default App;