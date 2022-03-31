import "./App.less";
import { Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Receipts, Homepage } from "./Components";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="app">
      <Navbar />
      <Layout>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/receipts">
            <Receipts />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
