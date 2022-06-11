import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Location.css"

const position = [52.548624 , 13.418179750442507]


const Location = () => {

    return (
        <div className="container">
          <div className="location-header">
          <h4>Our Location</h4>
          <p>Müllerstrasse 143 13353 Berlin</p>
          </div>
        <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
        <TileLayer           
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"    />
        <Marker position={position} >
          <Popup >
            MANGO RESTAURANT <br /> Müllerstrasse 143 13353 Berlin
          </Popup>
        </Marker>
      </MapContainer>
      </div>
    );
  }

  export default Location;
