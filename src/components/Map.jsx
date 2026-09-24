import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import { buildings } from "../data/buildings";
import { resources } from "../data/resources";
import { mapIcons } from "../data/mapIcons";

// Fix Leaflet icon issue in Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function CampusMap() {
  return (
    <MapContainer
      center={[41.433239, -75.634736]}
      zoom={16}
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {buildings.map((b) => {
        const linkedResources = resources.filter((r) => b.resources.includes(r.id));

        return (
          <Marker key={b.id} position={[b.lat, b.lng]}>
            <Popup>
              <strong>{b.name}</strong>

              {linkedResources.map((res) => (
                <div key={res.id} style={{ marginTop: "8px" }}>
                  <strong>{res.name}</strong>
                  <p style={{ margin: 0 }}>{res.description}</p>
                </div>
              ))}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default CampusMap;
