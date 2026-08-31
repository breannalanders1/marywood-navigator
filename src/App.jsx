import { resources } from "./data/resources";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Marywood Campus Navigator</h2>

      {resources.map(r => (
        <div key={r.id}>
          <strong>{r.name}</strong>: {r.description}
        </div>
      ))}
    </div>
  );
}

export default App;
