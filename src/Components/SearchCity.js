import React from 'react'

export  function SearchCity({setCity, newCity}) {

    const handleChangeCity= (e) =>{
        setCity(e.target.value)
    }

    const handleSubmit= (e) =>{
        e.preventDefault()
        console.log(newCity);
        return newCity

    }

  
    return (
    <form onSubmit={handleSubmit}>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Rechercher une Ville</label>
            <input type="text" class="form-control" id="InputText" aria-describedby="texthelp" onChange={handleChangeCity}></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  )
}
