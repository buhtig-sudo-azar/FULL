// BuggyComponent.jsx
import React from 'react';

const BuggyComponent = () => {
  // Имитируем ошибку при рендере
  throw new Error('Это тестовая ошибка для LogRocket!');
  
  return <div>Этот компонент сломан</div>;
};

export default BuggyComponent;