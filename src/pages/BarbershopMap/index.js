import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  const razor = new Icon({
    iconUrl: "https://image.flaticon.com/icons/svg/484/484167.svg",
    iconSize: [25, 25],
  });

  useEffect(() => {
    dispatch(fetchBarbershopsLocations());
  }, [dispatch]);

  return (
    <div>
      <h1
        className="mt-5 mb-5"
        style={{
          fontSize: "3rem",
          marginBottom: "2rem",
         
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
              icon={razor}
              key={location.id}
              position={[location.latitude, location.longitude]}
              onClick={() => {
                setActiveBarbershop(location);
              }}
            >
              <Popup
                key={location.id}
                position={[location.latitude, location.longitude]}
                onClose={() => {
                  setActiveBarbershop(null);
                }}
              >
                <Link to={`/barbershops/${location.barbershopId}`}>
                  <h5
                    style={{
                      color: "#fff",
                    }}
                  >
                    {location.address}
                  </h5>
                </Link>
              </Popup>
            </Marker>
          ))}
      </Map>
    </div>
  );
}
