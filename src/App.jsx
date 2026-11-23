import { useState } from "react";
import { resources } from "./data/resources";
import { contactInfo } from "./data/contactInfo";
import { buildings } from "./data/buildings";
import { categories } from "./data/categories";
import "./styles/home.css";
import "./styles/resources.css";
import "./styles/contact.css";
import "./styles/map.css";
import "./styles/assistant.css";
import CampusMap from "./components/Map";
import Assistant from "./components/Assistant";

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const getBuildingImage = (buildingName) => {
    const match = resources.find(
      (r) => r.building.trim() === buildingName.trim(),
    );
    return match ? match.image : null;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Marywood Campus Navigator</h1>

      {/* Tabs */}
      <div className="nav-tabs">
        <button
          className={`nav-btn ${activeTab === "Home" ? "active" : ""}`}
          onClick={() => setActiveTab("Home")}
        >
          Home
        </button>

        <button
          className={`nav-btn ${activeTab === "Resources" ? "active" : ""}`}
          onClick={() => {
            setSelectedBuilding(null);
            setActiveTab("Resources");
          }}
        >
          Resources
        </button>

        <button
          className={`nav-btn ${activeTab === "Map" ? "active" : ""}`}
          onClick={() => setActiveTab("Map")}
        >
          Map
        </button>

        <button
          className={`nav-btn ${activeTab === "Assistant" ? "active" : ""}`}
          onClick={() => setActiveTab("Assistant")}
        >
          Assistant
        </button>
      </div>

      {activeTab === "Home" && (
        <div>
          <h1>Welcome to Marywood University</h1>
          <p>
            Skip the hassle of searching for buildings, offices, and resources
            on campus. Use our interactive map to instantly locate campus
            buildings, explore resources to see what the campus has to offer, or
            chat with our assistant to find what you need quickly and easily.
          </p>

          <div className="home-images">
            <img src="/assets/marywood1.jpg" />
            <img src="/assets/marywood3.jpg" />
          </div>

          <div className="features-grid">
            <div
              className="feature-card"
              onClick={() => {
                setSelectedBuilding(null);
                setActiveTab("Resources");
              }}
            >
              <h3>Resource Directory</h3>
              <p>
                Browse academic, dining, athletic, and administrative offices
                with direct phone numbers and hours.
              </p>
              <span className="feature-link">Explore Resources →</span>
            </div>

            <div className="feature-card" onClick={() => setActiveTab("Map")}>
              <h3>Interactive Campus Map</h3>
              <p>
                Locate major buildings, view campus photos, and see which
                offices live inside each hall.
              </p>
              <span className="feature-link">View Campus Map →</span>
            </div>

            <div
              className="feature-card"
              onClick={() => setActiveTab("Assistant")}
            >
              <h3>Assistant Tool</h3>
              <p>
                Get help locating buildings and resources or find out where to
                handle transcripts and financial aid.
              </p>
              <span className="feature-link">Open Assistant →</span>
            </div>
          </div>

          <div className="home-info">
            <div className="info-pill">
              <strong>Campus Safety (24/7):</strong> 570-348-6242
            </div>
            
            <div className="info-pill">
              <strong>Main Number:</strong> {contactInfo.phone}
            </div>
            <button
              className="home-contact-button"
              onClick={() => setActiveTab("Contact")}
            >
              Full Contact Info
            </button>
          </div>
        </div>
      )}

      {activeTab === "Map" && (
        <div>
          <h1>Interactive Campus Map</h1>
          <CampusMap />
        </div>
      )}

      {activeTab === "Resources" && (
        <div className="resources-page">
          {selectedBuilding === null && (
            <div>
              <h1>Campus Buildings</h1>

              <div className="resources-container">
                {buildings.map((b) => (
                  <div
                    key={b.id}
                    className="resource-card"
                    onClick={() => setSelectedBuilding(b)}
                  >
                    {getBuildingImage(b.name) && (
                      <img
                        src={getBuildingImage(b.name)}
                        alt={b.name}
                        className="resource-image"
                      />
                    )}
                    <h1>{b.name}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}

          
          {selectedBuilding !== null && (
            <div>
              <h1>{selectedBuilding.name}</h1>

              <div className="resources-container">
                {resources.filter(
                    (r) => r.building.trim() === selectedBuilding.name.trim(),
                  )
                  .map((r) => (
                    <div key={r.id} className="resource-card">
                      <img
                        src={r.image}
                        alt={r.name}
                        className="resource-image"
                      />
                      <h1>{r.name}</h1>

                      {r.description && <p>{r.description}</p>}
                      {r.hours && (
                        <p>
                          <strong>Hours:</strong> {r.hours}
                        </p>
                      )}
                      {r.location && (
                        <p>
                          <strong>Location:</strong> {r.location}
                        </p>
                      )}
                      {r.contactEmail && (
                        <p>
                          <strong>Email:</strong> {r.contactEmail}
                        </p>
                      )}
                      {r.contactNumber && (
                        <p>
                          <strong>Phone:</strong> {r.contactNumber}
                        </p>
                      )}
                    </div>
                  ))}
              </div>

              <button onClick={() => setSelectedBuilding(null)}>
                Back to Buildings
              </button>
            </div>
          )}
        </div>
      )}

      {/* assistant page */}
      {activeTab === "Assistant" && (
        <Assistant
          buildings={buildings}
          resources={resources}
          categories={categories}
          contactInfo={contactInfo}
          setActiveTab={setActiveTab}
          setSelectedBuilding={setSelectedBuilding}
        />
      )}

      {/* contact page */}
      {activeTab === "Contact" && (
        <div>
          <h2>Contact Us</h2>
          <p>
            <strong>Phone:</strong> {contactInfo.phone}
          </p>
          <p>
            <strong>Email:</strong> {contactInfo.email}
          </p>
          <p>
            <strong>Address:</strong> {contactInfo.address}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;