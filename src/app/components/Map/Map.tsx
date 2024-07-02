import { useMemo, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

interface MapProps { latitude: number; longitude: number}

export default function Map({ latitude, longitude }: MapProps) {
  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string});  
  if (!isLoaded) return <div>Loading...</div>;
  return <MapKit/>;
  function MapKit(){
    const center = useMemo(() => ({ lat: latitude, lng: longitude }), [])
    return (
      <GoogleMap center={center} mapContainerClassName="w-full h-full min-h-[450px] rounded-2xl" options={{ disableDefaultUI: true, zoom: 12, styles: [
        { elementType: "geometry", stylers: [{ color: "#111827" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#111827" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#111827" }] },
        { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#6f3d47" }]},
        { featureType: "poi", elementType: "labels.text.fill", stylers: [{ color: "#6f3d47" }],},
        { featureType: "poi.park",elementType: "geometry", stylers: [{ color: "#263c3f" }],},
        { featureType: "poi.park", elementType: "labels.text.fill", stylers: [{ color: "#6b9a76" }]},
        { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }],},
        { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#212a37" }],},
        { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca5b3" }],},
        { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#746855" }]},
        { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1f2835" }],},
        { featureType: "road.highway", elementType: "labels.text.fill", stylers: [{ color: "#f3d19c" }]},
        { featureType: "transit", elementType: "geometry", stylers: [{ color: "#2f3948" }]},
        { featureType: "transit.station", elementType: "labels.text.fill", stylers: [{ color: "#d59563" }]},
        { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }]},
        { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }]},
        {featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#17263c" }]},
      ], }}>
      </GoogleMap>
    );
  }
}
