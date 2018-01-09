import React, {Component} from 'react';

const NavBar = (props) => {
    const {isLogged} = props;
    const headerText = isLogged
        ? <div className="sticky-top navbar-dark bg-primary app-header row">
                <div className="col-xs-1">
                    <h4 className="text-white">&lt;</h4>
                </div>
                <div className="col-xs-10">
                    <h4 className="text-white">List</h4>
                </div>
            </div>
        : <div className="sticky-top navbar-dark bg-primary app-header">
            <h4 className="text-white">Welcome</h4>
        </div>;
    return <div>{headerText}</div>

}

export default NavBar;