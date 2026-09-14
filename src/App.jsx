import { useState } from "react";
import { resources } from "./data/resources";
import { contactInfo } from "./data/contactInfo";


function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Marywood Campus Navigator</h2>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("Home")}>Home</button>
        <button onClick={() => setActiveTab("Resources")}>Resources</button>
        <button onClick={() => setActiveTab("Map")}>Map</button>
        <button onClick={() => setActiveTab("Assistant")}>Assistant</button>
      </div>

       {/* HOME PAGE */}
      {activeTab === "Home" && (
        <div>
          <h3>Welcome to Marywood University</h3>
          <p>
            Navigate campus resources, find buildings, and access student support tools.
          </p>

          <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
            <img src="/src/assets/marywood1.jpg" style={{ width: "45%" }} />
            <img src="/src/assets/marywood2.jpg" style={{ width: "45%" }} />
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

      {/* RESOURCES PAGE */}
      {activeTab === "Resources" && (
        <div>
          <h3>Campus Resources</h3>
          {resources.map(r => (
            <div key={r.id} style={{ marginBottom: "10px" }}>
              <strong>{r.name}</strong>: {r.description}
            </div>
          ))}
        </div>
      )}

      {/* MAP PAGE */}
      {activeTab === "Map" && (
        <div>
          <h3>Interactive Campus Map</h3>
          <p>Map feature coming soon.</p>
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
