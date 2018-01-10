import React, {Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/style.css';

import NavBar from './components/NavBar';
import ListView from './components/ListView';
import Login from './components/LoginForm';
import data from './dataset/DataSet';

export default class App extends Component {
  state = {
    isLogged: false,
    dataSet: data
  }

  userLogged() {
    const { isLogged } = this.state;
    
    this.setState({isLogged: !isLogged});
  }

  delteItem(id) {
    const {dataSet} = this.state;
    const updateData = dataSet.filter(item => item.id !== id);
    this.setState({dataSet: updateData});
  }

  render() {
    const {isLogged, dataSet} = this.state;
    const View = isLogged
      ? <ListView dataSet={dataSet} delteItem={(id) => this.delteItem(id)}/>
      : <Login userLogged={() => this.userLogged()}/>
    return (
      <div className="row">
        <NavBar isLogged={isLogged} userLogged={() => this.userLogged()}/> {View}
      </div>
    );
  }
}

render(
  <App/>, document.getElementById('app'));