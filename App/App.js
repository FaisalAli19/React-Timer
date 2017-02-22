const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, IndexRoute, hashHistory } = require('react-router');

//Components
const Countdown = require('./components/Countdown');
const Main = require('./components/Main');
const Timer = require('./components/Timer');

//foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css")
$(document).foundation();

//css
require("style-loader!css-loader!sass-loader!./styles/app.scss");

const App = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer}/>
            <Route path="countdown" component={Countdown}/>
        </Route>
    </Router>,
    App
);
