const React = require('react');

//Components
const Navbar = require('Navbar');

var Main = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    );
};


module.exports = Main;
