//  creating a second component : Hello
const Hello =(props)=>{

    // console.log(props)
    return (
      <h1 style={{color:"red"}}>Hello {props.name} !</h1>
    )
}

export default Hello; // exporting the Hello component