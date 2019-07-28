import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">HOME</NavLink></li>
                        <li><NavLink to="/about">ABOUT US</NavLink></li>
                        <li><NavLink to="/news">NEWS AND BLOG</NavLink></li>
                        <li><NavLink to="/islam">ISLAM</NavLink></li>
                        <li><NavLink to="/events">EVENTS</NavLink></li>
                        <li><NavLink to="/services">SERVICES</NavLink></li>
                        <li><NavLink to="/contact">CONTACT US</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;