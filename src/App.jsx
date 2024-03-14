import User from "./components/User"

const App = () => {
  
  const isLoggedIn = false 
  return (
    <div>
       {
        isLoggedIn ?    
        ( <User message="Welcome,User !" buttonlabel="Logout"/> ) :
        ( <User message="Please Login" buttonlabel="Login"/> )
       }

    </div>
  )
}

export default App