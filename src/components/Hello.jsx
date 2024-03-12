//  creating a second component : Hello
const Hello =(props)=>{

    // console.log(props)
    const headerStyle = {
        color:'green'
    }
    return (
      <h1 style={headerStyle}>Hello {props.name} !</h1>
    )
}

export default Hello; // exporting the Hello component