
const Note = (props) => {
  // if(props.note.important){
  //   return <li>{props.note.content}{"*"}</li>
  // }
  return (
     <li>{props.note.important ?props.note.content + "*" : props.note.content} </li>
  )
}

export default Note