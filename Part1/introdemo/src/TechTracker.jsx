import React from "react";
const TechTracker = () => {
  const [technologies, setTechnologies] = React.useState([
    { id: 1, name: "React", progress: 65, status: "learning" },
    { id: 2, name: "Node.js", progress: 0, status: "planned" },
    { id: 3, name: "TypeScript", progress: 30, status: "learning" },
  ]);

  const [newTechName, setNewTechName] = React.useState("");

  // ✅ Добавление технологии без мутации
  const addTechnology = () => {
    if (newTechName.trim()) {
      const newTech = {
        id: Date.now(),
        name: newTechName,
        progress: 0,
        status: "planned",
      };
      setTechnologies((prev) => [...prev, newTech]);
      setNewTechName("");
    }
  };

  // ✅ Удаление технологии без мутации
  const deleteTechnology = (id) => {
    setTechnologies((prev) => prev.filter((tech) => tech.id !== id));
  };

  return (
    <div className="tech-tracker">
      <h3>📚 Трекер изучаемых технологий</h3>

      {/* Форма добавления */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={newTechName}
          onChange={(e) => setNewTechName(e.target.value)}
          placeholder="Введите название технологии"
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={addTechnology}>Добавить</button>
      </div>

      {/* Список технологий */}
      <div>
        {technologies.map((tech) => (
          <div
            key={tech.id}
            style={{
              padding: "8px",
              margin: "5px 0",
              border: "1px solid #ddd",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>{tech.name}</strong>
              <span style={{ marginLeft: "10px", color: "#666" }}>
                ({tech.progress}% - {tech.status})
              </span>
            </div>
            <button
              onClick={() => deleteTechnology(tech.id)}
              style={{
                background: "#ff4444",
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTracker;
