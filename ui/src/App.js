import AppLayout from "./containers/Layout/Layout";
import AuthContextContainer from "./context/authContext";
import ErrorBoundary from "./error-boundaries/ErrorBoundary";

import "./App.css";

const App = () => {
  return (
    <AuthContextContainer>
      <ErrorBoundary>
        <AppLayout />
      </ErrorBoundary>
    </AuthContextContainer>
  );
};

export default App;
