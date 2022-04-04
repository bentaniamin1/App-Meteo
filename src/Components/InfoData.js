import React, {useState} from 'react'

export  function InfoData({name, country, humidity, temps, temperature}) {

    return (
    <>
      <p>{name}</p>
      <p>{country}</p>
      <p>{humidity}</p>
      <p>{temps}</p>
      <p>{temperature}</p>
    </>
  )
}
