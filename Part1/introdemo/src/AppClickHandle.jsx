import { useState } from "react";
import './index.css'

const Display = (props) => {
  const { counter } = props;
  
  return (
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
            <Button onClick={props.onRightClick} text="minus" />
          </td>
        </tr>
      </tbody>
    </table>
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

  const handleLeftClick = () => {
    const newClicks = { 
      ...clicks, 
      left: clicks.left + 1 
    };
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = { 
      ...clicks, 
      right: clicks.right - 1 
    };
    setClicks(newClicks);
  };

  const handleZeroClick = () => {
    const newClicks = { 
      left: 0,
      right: 0,
    };
    setClicks(newClicks);
  };

  return (
    <div>
      <Display 
        counter={clicks} 
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
        onZeroClick={handleZeroClick}
      />
    </div>
  );
};

export default AppCounter;