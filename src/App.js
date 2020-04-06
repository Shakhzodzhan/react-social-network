import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Account from './components/Account/Account';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = () => {


    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            {/*<div className="app-wrapper-content">*/}
            {/*    <Dialogs/>*/}
            {/*</div>*/}


            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            {/*<Route path='/dialogs' component={Dialogs}/>*/}
            <Route path='/account' render={() => <Account/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            {/*<Route path='/account' component={Account}/>*/}
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
            {/*<AccountInfo/>*/}
        </div>
    );
}

export default App;
