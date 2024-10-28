function Content ({name,setName}){
    name == '' ? name = prompt('What is your name?') : setName(name)    
    return (
        <p> {`Hi ${name}, this is my first React Application. Wish me luck!`}</p>
    )
}

export default Content