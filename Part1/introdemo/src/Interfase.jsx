import React from "react";
import "./index.css";
import AppCar from "./AppCar";
import AppCounter from "./AppClickHandle";
import ErrorBoundary from "./MyErrorBoundary";
import BuggyComponent from "./BuggyComponent";
import LogRocket from "logrocket";

const loginUser = (user) => {
  LogRocket.identify(user.id, {
    name: user.name,
    email: user.email,
    subscription: "premium",
  });
};

const examplesMap = {
  Example1: AppCar,
  Example2: AppCounter,
  Example3: BuggyComponent,
};

const Interfase = () => {
  const [activeExample, setActiveExample] = React.useState("Example3");
  const ActiveComponent = examplesMap[activeExample];

  React.useEffect(() => {
    const mockUser = {
      id: "user-123",
      name: "Тестовый Пользователь",
      email: "test@example.com",
    };
    loginUser(mockUser);
  }, []);

  return (
    <div>
      {/* Кнопки ВНЕ Error Boundary - всегда работают */}
      <nav>
        {Object.keys(examplesMap).map((name) => (
          <button key={name} onClick={() => setActiveExample(name)}>
            {name}
          </button>
        ))}
      </nav>

      {/* Только контент внутри Error Boundary */}
      <ErrorBoundary key={activeExample}>
        {" "}
        {/* key помогает сбросить состояние при смене примера */}
        <div className="example-container">
          <ActiveComponent />
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default Interfase;
