import './App.css';
import React, {useEffect, useState} from 'react';
import { SearchCity } from  './Components/SearchCity'




function App() {

    const [newCity, setCity] = useState()

    useEffect(() => {
        const fetchApi = async() =>
        {
            const url =`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=984402b43af0b9ab91207b62f676bef0`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(resJson.name);
        }
        fetchApi();
    })
    return ( 
    <div className="App" >
        <SearchCity setCity={setCity} newCity={newCity}/>
        <button className='btn btn-warning' > delete </button> 
    </div>
    );
}

export default App;