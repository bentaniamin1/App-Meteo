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
                
                const url =`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=378ed66b1dd61d1e7ede98209e3e3473`;
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
                
                <p> Ville: {data.name}</p>
            
        }

    </div>
    );
}

export default App;