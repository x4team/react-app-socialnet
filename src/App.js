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

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div class='app-wrapper-content'>
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               store={props.store}
                               />}/>
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path="/newpost"
                           render={() => <NewPost
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path="/friends"
                           render={() => <Friends
                               profilePage={props.state.profilePage}/>}/>
                    <Route path="/media" render={() => <Media />}/>
                    <Route path="/feeds" render={() => <Feeds />}/>
                </div>
                <Footer />
            </div>
    );
}

export default App;
