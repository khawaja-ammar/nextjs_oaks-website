"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect } from "react";

const mapOptions = {
  center: {
    lat: 31.400489,
    lng: 74.360914,
  },
  zoom: 18,
};

export default async function MapComponent() {
  const loadGoogleMaps = () => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_MAP_API!,
      version: "weekly",
      libraries: ["marker", "places"],
    });

    return loader.load();
  };

  useEffect(() => {
    loadGoogleMaps().then((google) => {
      const map = new google.maps.Map(
        document.getElementById("map")!,
        mapOptions
      );

      const marker = new google.maps.Marker({
        position: { lat: 31.400489, lng: 74.360914 },
        map: map,
        title: "Oaks Packaging",
      });
    });
  }, []);

  return (
    <div id="map" className="h-[400px] w-full">
      loading ...
    </div>
  );
}
