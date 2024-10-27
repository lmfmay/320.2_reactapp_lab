function Content ({name}){
    return (
        <p> {name !== '' ? `Hi ${name}, this is my first React Application. Wish me luck!` : "I don't know you.."}</p>
    )
}

export default Content