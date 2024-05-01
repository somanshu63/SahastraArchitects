import React, { useState } from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export default function MapWithMarkers() {
  const color = `hsl(0deg 100% 50%)`;

  return (
    <Map
      height={600}
      width={"100%"}
      defaultCenter={[30.316496, 78.032188]}
      defaultZoom={8}
    >
      <ZoomControl />

      <Marker width={30} anchor={[30.316496, 78.032188]} color={color} />
      <Marker width={30} anchor={[29.9457, 78.1642]} color={color}></Marker>
    </Map>
  );
}
