import React from 'react'
import { useGlobalContext } from './Context';

const Search = ()=>{ 
    const {query,searchPost} = useGlobalContext();
    return(
        <>
        <h1 className='heading'>Tech News Reading Website</h1>
        <form onSubmit={(e)=> e.preventDefault()}>
        <div>
        <input type='text' placeholder='search here'
            value={query}
            onChange={(e)=>searchPost(e.target.value)}>
        </input>
        </div>
        </form>
        </>
    )
}

export default Search;