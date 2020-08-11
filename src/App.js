import React from 'react';
import {Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NewPost from "./components/NewPost/NewPost";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Feeds from "./components/Feeds/Feeds";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MusicContainer from "./components/Music/MusicContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={() => <DialogsContainer
                       />}/>
                <Route path="/profile"
                       render={() => <ProfileContainer
                       />}/>
                <Route path="/users"
                       render={() => <UsersContainer />}/>

                <Route path="/newpost"
                       render={() => <NewPost
                           store={props.store}
                       />}/>
                <Route path="/friends"
                       render={() => <Friends
                           profilePage={props.state.profilePage}/>}/>
                <Route path="/music"
                       render={() => <MusicContainer/>}/>
                <Route path="/feeds" render={() => <Feeds/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
