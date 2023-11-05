import React, { useEffect, useState } from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  useMapEvent,
} from "react-leaflet";
import { useCities } from "../hooks/useCities";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { cities } = useCities();
  // const { position, getPosition } = useGeolocation();

  const [mapPosition, setMapPosition] = useState([38, -9]);

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  useEffect(
    function () {
      if (lat && lng) setMapPosition([lat, lng]);
    },
    [lat, lng]
  );

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city, i) => (
          <Marker position={[city.position.lat, city.position.lng]} key={i}>
            <Popup>{`${city.emoji} ${city.name}`}</Popup>
          </Marker>
        ))}
        <CityLocator position={mapPosition} />
        <DetectClick />
        {/* <LocationMarker /> */}
      </MapContainer>
    </div>
  );
}

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function CityLocator({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => {
      console.log(e);
      navigate(`form/?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
