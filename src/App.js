import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component, Fragment} from 'react'
import  styled  from 'styled-components'


import APP_ from './components/app_';
import Classwork3 from './components/classwork3';
import Classwork4 from './components/classwork4';
import Classwork5 from './components/classwork5';
import Classwork6 from './components/classwork6';
import Assignment8 from './components/Assignment8';
import Assignment9 from './components/Assignment9';
import Assigment10 from './components/Assigment10';
import Assignment11 from './components/Assignment11';
import Assignment12 from './components/Assignment12';
import Assignment13 from './components/Assignment13';
import Classwork7 from './components/classwork7';
import Classwork8 from './components/classwork8';
import Classwork9 from './components/classwork9';
import Classwork10 from './components/classwork10';
import Classwork11 from './components/classwork11';
import Classwork12 from './components/classwork12';
import Classwork13 from './components/classwork13';
import Assignment14 from './components/Assignment14';
import Assignment16 from './components/Assignment16';
import Assignment17 from './components/Assignment17';
import Assignment18 from './components/Assignment18';
import Assignment19 from './components/Assignment19';
import Assignment20 from './components/Assignment20';
import Assignment15 from './components/Assignment15';

// import pic1 from ""


// use function app when function will be thought

// function App() {
//   return (
  //   );
  // }

  
  export default class App extends Component {
    render() {
      return (
        // <div>App</div>
        <Wrap>
          <div className="App">
            <APP_/>
            <Classwork3/>
            <Classwork4/>
            <Classwork5/>
            <Classwork6/>
            <Classwork7/>
            <Classwork8/>
            <Classwork9/>
            <Classwork10/>
            <Classwork11/>
            <Classwork12/>
            <Classwork13/>
            <div className='App-Box'> ------- </div>
            <Assignment8/>
            <Assignment9/>
            <Assigment10/>
            <Assignment11/>
            <Assignment12/>
            <Assignment13/>
            <Assignment14/>
            <Assignment15/>
            <Assignment16/>
            <Assignment17/>
            <Assignment18/>
            <Assignment19/>
            <Assignment20/>
          </div>
        </Wrap>
      )
  }
}



const Wrap = styled.div``

