import Note from "./components/Note"

const App = (props) => {
  return (
    <div>
     <h1>Notes</h1>
     <ul>
         {
          props.notes.map((note,index)=>{
           return <Note key={index} note = {note}/>
          })
           }
     </ul>
    </div>
  )
}

export default App