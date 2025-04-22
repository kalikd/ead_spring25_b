// Two ways to create components
// 1. Function components
// 2. Class components

import {Component} from 'react'
import lib, { PI as PY } from './lib'
import Counter from './Counter';
import Clock from './Clock';
import TypeSpeedTracker from './TypeSpeedTracker';
import SmartHome from './SmartHome';

import Register from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages';
import About from './pages/About';
import ProductDetails from './ProductDetails';
import Categories from './pages/Categories';
import ProductByCategory from './ProductsbyCategory';
import NotFound from './pages/NotFound';
import withCentered from './CenteredHOC';
import HoverCounter from './pages/HoverCounter';
import CounterX from './CounterX';

// class App extends Component {
//   constructor(props){
//     this.state = {
//       name: 'KD'
//     }
//   }


//   changeName(){
//     this.setState({
//       name: 'Ali'
//     })
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     )
//   }
// }

function Button({color, title, clickHandler}) {
  return <button style={{backgroundColor: color}} onClick={clickHandler}>{title}</button>
}

// Button.defaultProps = {
//   color: 'blue',
//   title: 'Click me'
// }

// Button.propTypes = {
//   color: PropTypes.string,
//   title: PropTypes.string,
//   clickHandler: PropTypes.func
// }

// Function component
function App() {
  const name = 'KD';
  function getName(){
    return 'Ali';
  }
  const res = name && <h1>Hello {name}!</h1>

  const CenteredHome = withCentered(Home);
  const CenteredAbout = withCentered(About);
  return (
    <>
      {/* <h1>Hello {lib.callMe()}!</h1>
      <h2>{PY}</h2> */}
      {/* {res} */}
      {/* <Button color={'green'} title={'Click me'} clickHandler={() => alert('You clicked me!')} />
      <Button color={'red'} title="Save" clickHandler={() => alert('Saved!')} /> */}
      {/* <Counter /> */}
      {/* <Clock /> */}
      {/* <TypeSpeedTracker/> */}
      {/* <SmartHome/> */}
      {/* <Products /> */}
      {/* <Register /> */}
      <BrowserRouter>
        
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound/>} />
          <Route path="/" element={<CenteredHome titleX={'KUCHBHI'}/>} />
          <Route path="/hcounter" element={<CounterX render={(count, increment) => <HoverCounter count={count} increment={increment} />} />} />
          <Route path="/products/:pid/" element={<ProductDetails />} />
          <Route path="/categories" element={<Categories />}>
            <Route path=":categoryName" element={<ProductByCategory />} />
          </Route>
          <Route path="/about" element={<CenteredAbout/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}



export default App
