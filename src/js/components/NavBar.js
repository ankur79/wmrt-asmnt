import React, {Component} from 'react';

const NavBar = (props) => {
    const {isLogged, userLogged} = props;
    const headerText = isLogged
        ? <div className="sticky-top navbar-dark bg-primary app-header row">
                <div className="col-md-1 col-sm-1 col-xs-1" onClick={() => userLogged()}>
                    <h4><i className="fa fa-chevron-left" aria-hidden="true"></i></h4>
                </div>
                <div className="col-md-10 col-sm-10 col-xs-10">
                    <h4 className="text-white">List</h4>
                </div>
            </div>
        : <div className="sticky-top navbar-dark bg-primary app-header">
            <h4 className="text-white">Welcome</h4>
        </div>;
    return <div>{headerText}</div>

}

export default NavBar;