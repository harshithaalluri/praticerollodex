import React from "react";
import './Home.css'

class Home extends React.Component{
   constructor()
   {
    super();
    this.state=
    {
        Giants:[]
    }
   }
   componentDidMount()
   {
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>response.json)
       .then(users=>this.setState({Giants:users}))

   }
    
    render()
    {
        return(
        <>
        <div className='App'>
            <h1>MOnster Rollodex</h1>

        </div>
        </>
        )
    }
}
export default Home
