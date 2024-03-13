 import Hello from "./components/Hello"; //import the Hello component

import './App.css'; // import the App.css file

 // creating our first component 

 const App = () => {
  return (
       <div className="text-center">
            <Hello name="React"/>
            <Hello name="CSS"/>
            <Hello name="HTML"/>
            <Hello name="JS"/>
            <p>Hey hope you're doing well</p>
       </div>
  )
}


export default App;