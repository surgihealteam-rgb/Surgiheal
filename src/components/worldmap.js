import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const locations = [
  { name: 'Kukatpally', coords: [17.4933, 78.3995] },
  { name: 'LB Nagar', coords: [17.3660, 78.5286] },
  { name: 'Banjara Hills', coords: [17.4171, 78.4483] }
];

function WorldMap() {
  return (
    <MapContainer center={[17.4, 78.48]} zoom={11} style={{ height: "500px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {locations.map((loc, idx) => (
        <Marker position={loc.coords} key={idx}>
          <Popup>{loc.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default WorldMap;