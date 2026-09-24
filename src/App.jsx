import { useState } from "react";
import { resources } from "./data/resources";
import { contactInfo } from "./data/contactInfo";
import "./styles/home.css";
import "./styles/resources.css";
import "./styles/contact.css";
import "./styles/map.css";
import "./styles/assistant.css";
import CampusMap from "./components/Map";



function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Marywood Campus Navigator</h1>

      {/* Tabs */} {/* try to fix the tab buttons to be more even */}
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("Home")}>Home</button>
        <button onClick={() => setActiveTab("Resources")}>Resources</button>
        <button onClick={() => setActiveTab("Map")}>Map</button>
        <button onClick={() => setActiveTab("Assistant")}>Assistant</button>
      </div>

       {/* HOME PAGE */}
      {activeTab === "Home" && (
        <div>
          <h2>Welcome to Marywood University</h2>
          <p>
            Navigate campus resources, find buildings, and access student support tools.
          </p>

          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <img src="/src/assets/marywood1.jpg" style={{ width: "45%" }} />
            <img src="/src/assets/marywood3.jpg" style={{ width: "45%" }} />
          </div>

          <div style={{ marginTop: "30px" }}>
            <button onClick={() => setActiveTab("Resources")}>Explore Resources</button>
            <button onClick={() => setActiveTab("Map")} style={{ marginLeft: "10px" }}>
              View Campus Map
            </button>
            <button onClick={() => setActiveTab("Assistant")} style={{ marginLeft: "10px" }}>
              Guided Assistance
            </button>
            <button onClick={() => setActiveTab("Contact")}>Contact Us</button>
          </div>
        </div>
      )}

     
      {/* MAP PAGE */}
      {activeTab === "Map" && (
        <div>
          <h3>Interactive Campus Map</h3>
          <CampusMap />
        </div>
      )}
{/* RESOURCES PAGE */}
{activeTab === "Resources" && (
  <div>
    <h3>Campus Resources</h3>

    <div className="resources-container">
      {resources.map(r => (
        <div key={r.id} className="resource-card">
          <img src={r.image} alt={r.name} className="resource-image" />

          <h4>{r.name}</h4>
          <p>{r.description}</p>

          {r.category && <p><strong>Category:</strong> {r.category}</p>}
          {r.building && <p><strong>Building:</strong> {r.building}</p>}
          {r.hours && <p><strong>Hours:</strong> {r.hours}</p>}
          {r.contactNumber && <p><strong>Phone:</strong> {r.contactNumber}</p>}
          {r.contactEmail && <p><strong>Email:</strong> {r.contactEmail}</p>}
        </div>
      ))}
    </div>
  </div>
)}




      {/* ASSISTANT PAGE */}
      {activeTab === "Assistant" && (
        <div>
          <h3>Guided Assistance</h3>
          <p>Search tool coming soon.</p>
        </div>
      )}

      {/* CONTACT PAGE */}
      {activeTab === "Contact" && (
  <div>
    <h3>Contact Us</h3>
    <p><strong>Phone:</strong> {contactInfo.phone}</p>
    <p><strong>Email:</strong> {contactInfo.email}</p>
    <p><strong>Address:</strong> {contactInfo.address}</p>
  </div>
)}

    </div>
  );
}

export default App;
