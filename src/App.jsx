// import { Component } from "react"
// import Hello from "./components/Hello"

// class App extends Component{
//  constructor(props){
//   super(props)

//   // set the initial state
//   this.state = {
//     count : 0
//   }
//  }
//  increment = ()=>{
//   // update the state using the setState method
//   this.setState({
//     count : this.state.count + 1
//   })

// }
//  render(){
//   console.log(this.state)
//   return(
//     <div>
//       <p>Count : { this.state.count }</p>
//       <button onClick={this.increment}>Increment</button>
//     </div>
//   )
//  }
// }

// export default App



// ------- increment and decrement button ---------

// import React, { Component } from 'react'

// export class App extends Component {

//   constructor(props){
//     super(props)

//     this.state = {
//       count : 0
//     }
//   }
  
//    increment = () => {
//     this.setState({
//       count : this.state.count + 1
//     })
//    }

//    decrement = () => {
//     this.setState ({
//       count : this.state.count - 1
//     })
//    }
//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count} </p>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>

//       </div>
//     )
//   }
// }

// export default App/


import React, { Component } from 'react'

export class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      pcount : 0,
      ncount : 0
    }
  }
  
   increment = () => {
    this.setState({
      pcount : this.state.pcount + 1
    })
   }

   decrement = () => {
    this.setState ({
      ncount : this.state.ncount + 1
    })
   }
  render() {
    console.log(this.state)
    return (
      <div>
        <p>Positive Count: {this.state.pcount} </p>
        <button onClick={this.increment}>Positive</button>
        <p>Negative Count: {this.state.ncount} </p>
        <button onClick={this.decrement}>Negative</button>

      </div>
    )
  }
}

export default App