import card from '../Card/card'
import './Card-list.css'
 
const CardList=(props)=>
{
    const {giants}=props

    return(
        <div className='card-List'>
            {
                giants.map(
                   (giant,index)=>(
                       <card key={index} giant={giant} />
                   ) 
                )
            }
        </div>
    )
}
export default CardList