/* eslint-disable no-unreachable */
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
const MapContainer = () => {
  return (
    <APIProvider apiKey={"AIzaSyCgD-_FFpd64PkTuAUUs4YU7GcmcCp1rI8"}>
      <div style={{ height: "100vh", weight: "100%" }} className="mapContainer">
        <Map zoom={9} center={{ lat: 23.773066, lng: 90.426343 }}></Map>
      </div>
    </APIProvider>
  );
};
export default MapContainer;
