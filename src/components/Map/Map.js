import React from 'react'
import { CircleMarker, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

const Map = () => {

    const homeIcon = new L.Icon({
        iconUrl: 'assests/company/company.png', // Replace with the path to your home icon image
        iconSize: [40, 40], // Adjust the size of the icon
        iconAnchor: [16, 32], // Adjust the anchor point of the icon
        popupAnchor: [0, -32], // Adjust the anchor point of the popup
    });

    const location = [7.319722396860908, 80.87789853468607];
    return (
        <MapContainer center={location} zoom={20} scrollWheelZoom={false} className='w-full h-80 mt-10 mb-10'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={location} icon={homeIcon}>
                <Popup>
                    Ududumbara
                </Popup>
            </Marker>


        </MapContainer>
    )

}

export default Map