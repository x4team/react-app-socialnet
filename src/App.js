import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import NewPost from "./components/NewPost/NewPost";
import Friends from "./components/Friends/Friends";
import Media from "./components/Media/Media";
import Feeds from "./components/Feeds/Feeds";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div class='app-wrapper-content'>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/newpost" component={NewPost}/>
                    <Route path="/friends" component={Friends}/>
                    <Route path="/media" component={Media}/>
                    <Route path="/feeds" component={Feeds}/>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
