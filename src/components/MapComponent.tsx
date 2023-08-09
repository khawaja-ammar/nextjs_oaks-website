import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 31.400489,
  lng: 74.360914,
};

const markerPosition = {
  lat: 31.400489,
  lng: 74.360914,
};

export default function MapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.MAP_API as string}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
}
