import './card.css'

const card=(props)=>{
   const{giant}=props
   const{id,email,name}=giant

    return(
        <div className='card-cotainer'>
          <img alt='giants'
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
           />
          <h2> {name}</h2>
            <p> {email}</p>
        </div>
    )
}

export default card