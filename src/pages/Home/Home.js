import React from "react";
import CardList from "../../components/Card-List/Card-List";
import Search from "../../components/Search/Search";
import './Home.css'

class Home extends React.Component{
   constructor()
   {
    super();
    this.state=
    {
        giants:[],
        searchField:''
    }
   }
   componentDidMount()
   {
       fetch(`https://jsonplaceholder.typicode.com/users`)
       .then(response=>response.json)
       .then(users=>this.setState({Giants:users}))

   }
   handleSearch=(event)=>
   {
    this.setState({searchField:event.target.value}) 
   }
    
    render()
    {
        const {giants,searchField } = this.state
        const filteredGiants = giants.filter((giant) => giant.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
        <>
        <div className='App'>
            <h1>Giant Rollodex</h1>
            <Search handleSearch={this.handleSearch} />
            <CardList giants={filteredGiants} />
        </div>
        </>
        )
    }
}
export default Home
