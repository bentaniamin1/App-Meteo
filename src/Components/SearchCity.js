import React, {useState} from 'react'

export  function SearchCity({setCity, newCity}) {
    const [search, setSearch] = useState()

    const handleChangeCity= (e) =>{
        setSearch(e.target.value)
    }
    
    const handleSubmit= (e) =>{
        e.preventDefault()

        setCity(search)

    }

  
    return (
    <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Rechercher une Ville :</label>
            <input type="text" class="form-control" id="InputText" aria-describedby="texthelp" onChange={handleChangeCity}></input>
        </div>
        <button type="submit" class="submit btn btn-primary">Rechercher</button>
    </form>
  )
}
