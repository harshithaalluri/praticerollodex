import './Search.css'
const Search = (props) =>{
    return(
        <input
            name='search'
            className='search-box'
            type='password'
            placeholder='search giants'
            onChange = {props.handleSearch}
        />
    )
}
export default Search