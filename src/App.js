import "./App.less";
import { Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Receipts, Homepage, AtpHeader } from "./Components";
import MaintenanceRequest from "./Components/Forms/MaintenanceRequest";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="app">
      <Layout>
        <Navbar />
        <Layout>
          <AtpHeader />
          <Switch>
            <Route exact path="/">
              <Layout>
                <Homepage />
              </Layout>
            </Route>
            <Route exact path="/receipts">
              <Layout>
                <Receipts />
              </Layout>
            </Route>
            <Route exact path="/maintenance-request">
              <Layout>
                <MaintenanceRequest />
              </Layout>
            </Route>
          </Switch>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
