import './App.css';
import React, {useEffect, useState} from 'react';
import { SearchCity } from  './Components/SearchCity'




function App() {

    const [newCity, setCity] = useState()
    const [data, setData] = useState(undefined)
    const[Error, setError] = useState(true)
    const[messageError, setMessageError] = useState(true)

    useEffect(() => {
        try {

            const fetchApi = async() =>
            {
                
                const url =`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=984402b43af0b9ab91207b62f676bef0`;
                const response = await fetch(url);
                const respJs = await response.json();
                console.log(respJs);
                setData(respJs);
            }
            fetchApi();
        }
        catch {
  
            
        }},[newCity])
        

    return ( 
    <div className="App" >
        <SearchCity setCity={setCity} newCity={newCity}/>
        {data && 
                
            <p> Ville: {data.name} pays : {data.sys.country} temps: {data.weather[0].main}</p>
            
        }

    </div>
    );
}

export default App;