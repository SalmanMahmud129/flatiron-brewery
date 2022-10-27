import React from 'react'
import { Input } from 'semantic-ui-react'

function Search({search, setSearch}) {

  function handleChange (e){
    setSearch(e.target.value)
  }
  
  return (
    <div  style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Input icon='search' placeholder='Search...' value={search} onChange={handleChange} />
    </div>
  )
}

export default Search