import { useState } from "react";
import "./index.css";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <>the app is used by pressing the buttons</>;
  }
  return <>button press history: {props.allClicks.join(" ")}</>;
};

const Display = (props) => {
  const { counter, clicks, total } = props;

  return (
    <>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <tbody>
          {/* Первая строка - счетчики */}
          <tr>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              Left: {counter.left}
            </td>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              {/* Пустая ячейка */}
            </td>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              Right: {counter.right}
            </td>
          </tr>

          {/* Вторая строка - кнопки */}
          <tr>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              <Button onClick={props.onLeftClick} text="plus" />
            </td>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              <Button onClick={props.onZeroClick} text="zero" />
            </td>
            <td style={{ border: "1px solid black", padding: "10px" }}>
              <Button onClick={props.onRightClick} text="plus" />
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        AllClicks: <History allClicks={clicks} />
      </p>
      <p>Total clicks: {clicks.length}</p>
      <p>Last action: {clicks.length > 0 ? clicks[clicks.length - 1] : 0}</p>
    </>
  );
};

const Button = (props) => {
  const { text, onClick } = props;
  return <button onClick={onClick}>{text}</button>;
};

const AppCounter = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([]);

  // Фабрика обработчиков
  const createSideClickHandler = (side) => () => {
    setClicks((prev) => ({
      ...prev,
      [side]: prev[side] + 1,
    }));
    setAll((prev) => [...prev, side === "left" ? "L" : "R"]);
  };

  const handleZeroClick = () => {
    setClicks({ left: 0, right: 0 });
    setAll([]);
  };

  return (
    <div>
      <Display
        counter={clicks}
        onLeftClick={createSideClickHandler("left")}
        onRightClick={createSideClickHandler("right")}
        onZeroClick={handleZeroClick}
        clicks={allClicks}
      />
    </div>
  );
};

export default AppCounter;
