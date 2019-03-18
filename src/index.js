import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './Redux-BLL/store';
import App from "./App";
import {Provider} from "react-redux";
import style from "./index.module.css";
import axios from "./Redux-BLL/axios/axios-instance";
import {setIsAuth, setUserInfo} from "./Redux-BLL/Reducers/AuthReducer";

axios.get('auth/me')
     .then(res => {
         if (res.data.resultCode === 0) {
             store.dispatch(setIsAuth(true));
             store.dispatch(setUserInfo(res.data.data.id, res.data.data.login));
             console.log('id dispatched')
         }
     });

    ReactDOM.render(
        <Provider store={store}>
        <BrowserRouter>
            <App className={style.wrapper}/>
        </BrowserRouter>
        </Provider>
        , document.getElementById('root'));

    serviceWorker.unregister();

