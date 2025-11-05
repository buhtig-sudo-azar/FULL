import { useState } from "react";
import './index.css'

const Display = (props) => {
  const { counter, clicks } = props;

  return (
    <>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <tbody>
          {/* Первая строка - счетчики */}
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>
              Left: {counter.left}
            </td>
            <td style={{ border: '1px solid black', padding: '10px' }}>
              {/* Пустая ячейка */}
            </td>
            <td style={{ border: '1px solid black', padding: '10px' }}>
              Right: {counter.right}
            </td>

          </tr>

          {/* Вторая строка - кнопки */}
          <tr>
            <td style={{ border: '1px solid black', padding: '10px' }}>
              <Button onClick={props.onLeftClick} text="plus" />
            </td>
            <td style={{ border: '1px solid black', padding: '10px' }}>
              <Button onClick={props.onZeroClick} text="zero" />
            </td>
            <td style={{ border: '1px solid black', padding: '10px' }}>
              <Button onClick={props.onRightClick} text="plus" />
            </td>
          </tr>
        </tbody>
      </table>
      AllClicks: {clicks.join(' ')}
    </>
  );
};

const Button = (props) => {
  const { text, onClick } = props;
  return (
    <button onClick={onClick}>{text}</button>
  );
};

const AppCounter = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([])
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setAll(allClicks.concat('L'))
  };

  const handleRightClick = () => {

    setClicks({ ...clicks, right: clicks.right + 1 });
    setAll(allClicks.concat('R'))
  };

  const handleZeroClick = () => {

    setClicks({ left: 0, right: 0 });
    setAll([])
  };

  return (
    <div>
      <Display
        counter={clicks}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
        onZeroClick={handleZeroClick}
        clicks={allClicks}
      />
    </div>
  );
};

export default AppCounter;