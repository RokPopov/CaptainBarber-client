import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

import { fetchBarbershopsLocations } from "../../store/map/actions";
import { selectLocations } from "../../store/map/selectors";

export default function BarbershopMap() {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocations);
  const [activeBarbershop, setActiveBarbershop] = useState(null);
  const skater = new Icon({
    iconUrl: "https://image.flaticon.com/icons/svg/2821/2821012.svg",
    iconSize: [25, 25],
  });

  useEffect(() => {
    dispatch(fetchBarbershopsLocations());
  }, [dispatch]);
  console.log("locations", locations);
  console.log("zero", locations[0]);

  return (
    <div>
      <h1
        className="mt-5 mb-5"
        style={{
          fontSize: "3rem",
          marginBottom: "2rem",
          textShadow: "3px 3px 5px #000000",
          textAlign: "center",
        }}
      >
        Map of Amsterdam's Barbershops
      </h1>
      <Map center={[52.377956, 4.89707]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations &&
          locations.map((location) => (
            <Marker
              icon={skater}
              key={location.id}
              position={[location.latitude, location.longitude]}
              onClick={() => {
                setActiveBarbershop(location);
              }}
            />
          ))}
        {activeBarbershop &&
          locations.map((location) => (
            <Popup
              key={location.id}
              position={[location.latitude, location.longitude]}
            >
              <div>{location.address}</div>
            </Popup>
          ))}
      </Map>
    </div>
  );
}
