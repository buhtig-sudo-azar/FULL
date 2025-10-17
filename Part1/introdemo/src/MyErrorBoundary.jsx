import React from "react";
import LogRocket from "logrocket";

LogRocket.init("2jqouw/errorboundaries");
class MyErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Обновляем состояние, чтобы показать запасной UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);

    // Расширенная отправка в LogRocket
    LogRocket.captureException(error, {
      extra: errorInfo,
      tags: {
        component: this.props.componentName || "Unknown",
        environment: process.env.NODE_ENV,
      },
    });
  }

  render() {
    if (this.state.hasError) {
      // Запасной UI, когда ошибка произошла
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}

export default MyErrorBoundary;
