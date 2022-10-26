import React from 'react'
import { Input } from 'semantic-ui-react'

function Search({search, setSearch}) {

  function handleChange (e){
    setSearch(e.target.value)
  }
  
  return (
    <Input icon='search' placeholder='Search...' value={search} onChange={handleChange} />
  )
}

export default Search