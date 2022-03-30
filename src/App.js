import "./App.css";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <h1>Fresh starter</h1>
      <Profile />
      <Login />
    </div>
  );
}

export default App;
