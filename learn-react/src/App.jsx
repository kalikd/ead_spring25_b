import Clock from "./Clock"
import Counter from "./Counter"
// import lib, { PI as PY, callMe } from "./lib"
import {Component} from "react"
import TypeSpeedTracker from "./TypeSpeedTracker"
import SmartHome from "./SmartHome"
import Products from "./Products"
// Two ways to create a component
// 1. Function Component
// 2. Class Component



// Function Component
function Button({ title, clickHandler, color }) {
  return <button
    style={{ backgroundColor: color || 'blue' }}
    onClick={clickHandler}>
    {title}
  </button>
}

// function InnerComponent(){
//   return (
//     <div>
//       <h3>Inner Component</h1>
//       <span></span>
//     </div>
//   )
// }


// function OuterComponent(){
//   return (
//     <div>
//       <h1>Outer Component</h1>
//       <InnerComponent />
//     </div>
//   )
// }

// Button.defaultProps = {
//   color: 'blue',
//   title: 'Click Me'
// }

// Button.propTypes = {
//   title: PropTypes.string.isRequired,
//   clickHandler: PropTypes.func.isRequired,
//   color: PropTypes.string
// }

// Class Component
// class Button extends React.Component {
//   render() {
//     return <button>Click Me</button>
//   }
// }

function App() {
  // const name = 'KD'
  // function getName() {
  //   return 'Koibhi'
  // }
  // const res = name && (<h1>Hello {name}</h1>)
  // const products = [
  //   { id: 1, name: 'Laptop' },
  //   { id: 2, name: 'Mobile' },
  //   { id: 3, name: 'Camera' },
  // ]
  return (
    <>
      {/* <h1>Hello {name}</h1>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <Button color={'orange'} title={'Click Me'} clickHandler={() => alert('Clicked!')} />
      <Button color={'green'} title='Save' clickHandler={() => alert('Saved!')} />*/}
      {/* <Button color={'green'} title='Call Me' clickHandler={callMe} />  */}
      
      {/* <Counter/> */}
      {/* <span>{lib.fullName}</span>
      <span>{lib.PI}</span> */}
      {/* <Clock /> */}

      {/* <TypeSpeedTracker /> */}
      {/* <SmartHome /> */}
      <Products />
      
    </>

  )
}

export default App
