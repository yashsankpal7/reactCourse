import './App.css';
import {Fragment} from 'react'
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

// import pic1 from ""

function App() {
  return (
    <Fragment> 
      <div className="App">
        <APP_/>
        <Classwork3/>
        <Classwork4/>
        <Classwork5/>
        <Classwork6/>
        <div className='App-Box'> ------- </div>
        <Assignment8/>
        <Assignment9/>
        <Assigment10/>
        <Assignment11/>
        <Assignment12/>
        <Assignment13/>
      </div>
    </Fragment>
  );
}

export default App;
