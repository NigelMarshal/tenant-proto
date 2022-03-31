import "./App.less";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Receipts, Homepage, AtpHeader } from "./Components";
import MaintenanceRequest from "./Components/Forms/MaintenanceRequest";
import MovingOutRequest from "./Components/Forms/MovingOutRequest";
import Documents from "./Components/Documents";

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
            <Route exact path="/moving-out-request">
              <Layout>
                <MovingOutRequest />
              </Layout>
            </Route>
            <Route exact path="/documents">
              <Layout>
                <Documents />
              </Layout>
            </Route>
          </Switch>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
