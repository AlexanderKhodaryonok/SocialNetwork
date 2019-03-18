import React from 'react';
import {Route, Switch} from "react-router";
import ConversationsPage from "./Components/ConversationsPage/ConversationsPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import LoginPage from "./Components/LoginPage/LoginPage";
import style from "./App.module.css";
import UsersPage from "./Components/UsersPage/UsersPage";
import Error404Page from "./Components/Error404Page/Error404Page";
import ProfileEdit from './Components/ProfileEdit/ProfileEdit'
import NewsPage from "./Components/NewsPage/NewsPage";

const App = () =>{

    return (
        <div className={style.wrapper}>
            <Switch>
               <Route exact path='/'
                       render={() => <NewsPage /> } />
                <Route exact path='/news'
                       render={() => <NewsPage /> } />
                <Route path='/conversations/:id?'
                       render={() => <ConversationsPage /> } />
                <Route path='/profile/edit'
                       render={() => <ProfileEdit /> } />
                <Route path='/profile/:id?'
                       render={() => <ProfilePage /> } />
                <Route path='/login'
                       render={() => <LoginPage /> } />
                <Route path='/find'
                       render={() => <UsersPage /> } />
                <Route path='/'
                       render={() => <Error404Page /> } />
            </Switch>
        </div>
    );
};

export default App;