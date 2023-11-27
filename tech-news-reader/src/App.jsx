import React from 'react'
import Search from './Search';
import Pagination from './Pagination';
import Stories from './Stories';
import './app.css'

const App = ()=>{
    return(<>
     <div className='app-correction'>
        <Search />
        <Pagination />
        <Stories />
        </div>
        </>
    )
}

export default App;