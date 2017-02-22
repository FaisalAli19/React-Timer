const React = require('react');
const { Link, IndexLink } = require('react-router');

var Navbar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Time App</li>
                    <li>
                        <IndexLink to="/" activeClassName="active">Timer</IndexLink>
                    </li>
                    <li>
                        <Link to="countdown" activeClassName="active">Countdown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="http://faisal-ali.com" target="_blank">Faisal Ali</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

module.exports = Navbar;
