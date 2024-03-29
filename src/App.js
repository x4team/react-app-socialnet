import React from 'react';
import {Route} from "react-router-dom";

import './App.css';
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
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/dialogs"
                       render={() => <DialogsContainer
                       />}/>
                <Route path="/profile/:userId?"
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
                <Route path="/login" render={() => <LoginPage/>}/>

            </div>
            <Footer/>
        </div>
    );
}

export default App;
