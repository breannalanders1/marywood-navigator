import { useState } from "react";
import "../styles/assistant.css";

export default function Assistant({ buildings, resources, categories, contactInfo, setActiveTab, setSelectedBuilding }) {
    // State to manage chat messages and user input
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your MU Campus Assistant. How may I help you today?",
      options: categories
    }
  ]);
  const [inputQuery, setInputQuery] = useState("");

  // Function to handle user input and generate bot responses
  const handleUserMessage = (text) => {
    if (!text || !text.trim()) return;
    const userMsg = { sender: "user", text };
    let botResponse = { 
      sender: "bot", 
      text: "I'm not sure about that. Try asking about a building (like 'LAC' or 'Naz'), a category like 'Academics', or contact info." 
    };
    
    const query = text.toLowerCase().trim();

    // 1.Menu
    if (query.includes("category") || query.includes("categories") || query.includes("menu")) {
      botResponse = {
        sender: "bot",
        text: "Select a category you'd like to explore:",
        options: categories
      };
    } 
    // 2. Contact Info
    else if (query.includes("contact") || query.includes("phone") || query.includes("email")) {
      botResponse = {
        sender: "bot",
        text: `You can reach Marywood University at ${contactInfo.phone} or email ${contactInfo.email}.`
      };
    } 
    else {
      // 3. Official Category Match
      const matchedCategory = categories.find(cat => cat.toLowerCase() === query);
    
      if (matchedCategory) {
        const matchingBuildings = buildings.filter(b => {
          const bRes = resources.filter(r => r.building.trim() === b.name.trim());
          return bRes.some(r => r.category.toLowerCase().trim() === matchedCategory.toLowerCase());
        });

        botResponse = {
          sender: "bot",
          text: matchingBuildings.length > 0
            ? `Here are locations under ${matchedCategory}:`
            : `I couldn't find locations under ${matchedCategory}.`,
          options: matchingBuildings.map(b => b.name)
        };
      } else {
        // 2. Building Match
        const matchedBuilding = buildings.find(b => {
          const matchesName = b.name.toLowerCase().includes(query);
          const matchesSynonym = b.synonyms && b.synonyms.some(syn => query.includes(syn));
          return matchesName || matchesSynonym;
        });
        
        if (matchedBuilding) {
          const buildingResources = resources.filter(r => r.building.trim() === matchedBuilding.name.trim());
          const resourceNames = buildingResources.map(r => r.name).join(", ");

          botResponse = {
            sender: "bot",
            text: `${matchedBuilding.name}\n\nFeatures: ${resourceNames || matchedBuilding.category}\n\nWould you like to view it more in the Resources tab?`,
            action: () => {
              setSelectedBuilding(matchedBuilding);
              setActiveTab("Resources");
            }
          };
        } else {
            // 4. Resource Match
          const matchedResource = resources.find(r => {
            const matchesName = r.name.toLowerCase().includes(query);
            const matchesKeyword = r.keywords && r.keywords.some(k => query.includes(k));
            return matchesName || matchesKeyword;
          });

          if (matchedResource) {
            botResponse = {
              sender: "bot",
              text: `${matchedResource.name}\n${matchedResource.description || ""}\n${matchedResource.hours ? `Hours: ${matchedResource.hours}` : ""}`,
              action: () => {
                const parentBuilding = buildings.find(b => b.name.trim() === matchedResource.building.trim());
                if (parentBuilding) setSelectedBuilding(parentBuilding);
                setActiveTab("Resources");
              }
            };
          }
        }
      }
    }

    setMessages((prev) => [...prev, userMsg, botResponse]);
    setInputQuery("");
  };

  return (
    <div className="assistant-container">
      <h2>Pacers Assistance</h2>
      
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message-row ${msg.sender}`}>
            <div className={`chat-bubble ${msg.sender}`}>
              {msg.text}
            </div>
            
            {msg.options && (
              <div className="chat-options">
                {msg.options.map((opt, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleUserMessage(opt)}
                    className="chat-option-btn"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {msg.action && (
              <div>
                <button onClick={msg.action} className="chat-action-btn">
                  Show me more!
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="chat-input-container">
        <input
          type="text"
          value={inputQuery}
          placeholder="Ask me about a building, category, or contact info..."
          onChange={(e) => setInputQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUserMessage(inputQuery)}
          className="chat-input"
        />
        <button onClick={() => handleUserMessage(inputQuery)} className="chat-send-btn">
          Send
        </button>
      </div>
    </div>
  );
}