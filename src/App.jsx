//  creating a second component : Hello
const Hello =()=>{
      return (
        <h1>Hello World !</h1>
      )
}






// creating our first component 

const App = () => {
  return(
       <div>
            <Hello/>
            <Hello/>
       </div>
  )
}


export default App;