import React from "react";
import Container from "react-bootstrap/Container";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./style.css";

export default function BarbershopMap() {
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
      </Map>
    </div>
  );
}
