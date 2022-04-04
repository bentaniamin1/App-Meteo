import './App.css';
import React, {useEffect, useState} from 'react';
import { SearchCity } from  './Components/SearchCity'
import { InfoData } from  './Components/InfoData'




function App() {

    const [newCity, setCity] = useState()
    const [data, setData] = useState(undefined)
    const[name, setName] = useState()
    const[country, setCountry] = useState()
    const[humidity, setHumidity] = useState()
    const[temperature, setTemperature] = useState()
    const[temps, setTemps] = useState()
    const[Error, setError] = useState(true)
    const[messageError, setMessageError] = useState(true)

    const [infoData, setInfoData] = useState()

    useEffect(() => {
        try {

            const fetchApi = async() =>
            {
                
                const url =`http://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=984402b43af0b9ab91207b62f676bef0`;
                const response = await fetch(url);
                const respJs = await response.json();
                console.log(respJs);
                setData(respJs);
                setName(respJs.name);
                setCountry(respJs.sys.country);
                setTemps(respJs.weather[0].main);
                setHumidity(respJs.main.humidity);
                setTemperature(respJs.main.temp);

            }
            fetchApi();

            
        }
        catch {
            
            alert('city not found');
            
        }
        
        
    },[newCity])
    
    console.log(name);
    return (
        <>
    <div className='row'>
        <h1 className='col-sm-6 titre '>Application Météo</h1>
    </div>
    <div className='row'>
        <div className="App col-sm-6" >
            <SearchCity setCity={setCity} newCity={newCity}/>
            <InfoData name={name} country={country} humidity={humidity} temps={temps} temperature={temperature}/>


        </div>
    </div>
        </>
    );
}

export default App;