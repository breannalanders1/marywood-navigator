import { useState } from "react";
import "../styles/assistant.css";

export default function Assistant({
  buildings,
  resources,
  categories,
  contactInfo,
  setActiveTab,
  setSelectedBuilding,
}) {
  
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am your MU Campus Assistant. How may I help you today?",
      options: categories,
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  
  const handleUserMessage = (text) => {
    if (!text || !text.trim()) return;

    const userMsg = { sender: "user", text };
    let botResponse = {
      sender: "bot",
      text: "I'm not sure about that. Try asking about a building, category or contact info.",
    };

    const query = text.toLowerCase().trim();

    if (
      query.includes("category") ||
      query.includes("categories") ||
      query.includes("menu")
    ) {
      botResponse = {
        sender: "bot",
        text: "Select a category you'd like to explore:",
        options: categories,
      };
    } else if (
      query.includes("contact") ||
      query.includes("phone") ||
      query.includes("email")
    ) {
      botResponse = {
        sender: "bot",
        text: `You can reach Marywood University at ${contactInfo.phone} or email ${contactInfo.email}.`,
      };
    } else {
      const matchedCategory = categories.find(
        (category) => category.toLowerCase().trim() == query,
      );

      if (matchedCategory) {
        const matchingBuildings = buildings.filter((building) =>
          resources.some(
            (resource) =>
              resource.building.trim() == building.name.trim() &&
              resource.category.toLowerCase().trim() == matchedCategory.toLowerCase().trim(),
          ),
        );
        let responseText = `I couldn't find locations under ${matchedCategory}.`;

        if (matchingBuildings.length > 0) {
          responseText = `Here are places under ${matchedCategory}:`;
        }
        botResponse = {
          sender: "bot",
          text: responseText,
          options: matchingBuildings.map((building) => building.name),
        };
      } else {
        const exactSynonymMatch = buildings.find((building) =>
          building.synonyms.some(
            (synonym) => synonym.toLowerCase() == query,
          ),
        );

        const matchedBuilding =
          exactSynonymMatch ||
          buildings.find((building) => {
            const matchesName = building.name.toLowerCase().includes(query);
            const matchesSynonym =
              building.synonyms &&
              building.synonyms.some((synonym) =>
                query.includes(synonym.toLowerCase()),
              );
            return matchesName || matchesSynonym;
          });

        if (matchedBuilding) {
          const buildingResources = resources.filter(
            (resource) =>
              resource.building.trim() == matchedBuilding.name.trim(),
          );
          const resourceNames = buildingResources
            .map((resource) => resource.name)
            .join(", ");

          botResponse = {
            sender: "bot",
            text: `${matchedBuilding.name}\n\nFeatures: ${resourceNames || matchedBuilding.category}\n\nWould you like to view it more in the Resources tab?`,
            action: () => {
              setSelectedBuilding(matchedBuilding);
              setActiveTab("Resources");
            },
          };
        } else {
          const matchedResource = resources.find((resource) => {
            const matchesName = resource.name.toLowerCase().includes(query);
            const matchesKeyword =
              resource.keywords &&
              resource.keywords.some((keyword) =>
                query.includes(keyword.toLowerCase()),
              );
            return matchesName || matchesKeyword;
          });

          if (matchedResource) {
            botResponse = {
              sender: "bot",
              text: `${matchedResource.name}\n${matchedResource.description || ""}\n${matchedResource.hours ? `Hours: ${matchedResource.hours}` : ""}`,
              action: () => {
                const parentBuilding = buildings.find(
                  (building) =>
                    building.name.trim() == matchedResource.building.trim(),
                );
                if (parentBuilding) setSelectedBuilding(parentBuilding);
                setActiveTab("Resources");
              },
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
      <h2>Pacers Assistant</h2>

      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`chat-row ${message.sender}`}>
            <div className={`chat-bubble ${message.sender}`}>{message.text}</div>

            {message.options && (
              <div className="chat-options">
                {message.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleUserMessage(option)}
                    className="chat-option-button"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {message.action && (
              <div>
                <button onClick={message.action} className="chat-action-button">
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
          onKeyDown={(e) => e.key == "Enter" && handleUserMessage(inputQuery)}
          className="chat-input"
        />
        <button
          onClick={() => handleUserMessage(inputQuery)}
          className="chat-send-button"
        >
          Send
        </button>
      </div>
    </div>
  );
}
