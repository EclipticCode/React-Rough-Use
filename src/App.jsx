import Note from "./components/Note"

const App = (props) => {

  const addNote= (e)=>{
    e.preventDefault()
   console.log('clicked')
  }
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

     <form onSubmit={addNote}>
      <input />
      <button type="submit">Save</button>
     </form>
    </div>
  )
}

export default App