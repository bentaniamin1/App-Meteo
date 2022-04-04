import React, {useState} from 'react'

export  function InfoData({name, country, humidity, temps, temperature}) {

    return (
    <>
      <p>Ville :{name}</p>
      <p>Country :{country}</p>
      <p>Humidity :{humidity}</p>
      <p>temps :{temps}</p>
      <p>Température :{temperature} C°</p>
    </>
  )
}
