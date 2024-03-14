import { Component } from "react"
import Hello from "./components/Hello"

class App extends Component{
 constructor(props){
  super(props)

  // set the initial state
  this.state = {
    count : 0
  }
 }
 increment = ()=>{
  // update the state using the setState method
  this.setState({
    count : this.state.count + 1
  })

}
 render(){
  console.log(this.state)
  return(
    <div>
      <p>Count : { this.state.count }</p>
      <button onClick={this.increment}>Increment</button>
    </div>
  )
 }
}

export default App