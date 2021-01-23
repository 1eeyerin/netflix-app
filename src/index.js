import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import "./scss/app.scss";
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import theme from "./utils/Theme";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <ScrollToTop />
                    <App />
                </ThemeProvider>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

