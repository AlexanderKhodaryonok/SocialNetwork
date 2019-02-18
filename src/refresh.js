import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './Redux-BLL/store';
import App from "./App";

const renderAll = () => {

    ReactDOM.render(
        <BrowserRouter>
           <App state={store.getState()}
                addNote={store.addNote.bind(store)}
                changeCurrentNote={store.changeCurrentNote.bind(store)}
                setCurrentConversation={store.setCurrentConversation.bind(store)}
                changeCurrentMessage={store.changeCurrentMessage.bind(store)}
                addMessage={store.addMessage.bind(store)} />
        </BrowserRouter>
        , document.getElementById('root'));

    serviceWorker.unregister();
};

store.subscribe(renderAll);

renderAll();

export default renderAll;