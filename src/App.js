import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';


class App extends Component {
  render(){
    return(
      <div>
      <Navbar dar color="primary">
        <div className="container">
            <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
        </div>
      </Navbar> 
      <Menu />
    </div>
    )
  }
}


export default App;
