import "./assets/css/App.less";
import { Switch, Route } from "react-router-dom";
import { Layout, Spin } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Receipts, Homepage, AtpHeader } from "./Components";
import { MaintenanceRequest, MovingOutRequest } from "./Components/Forms";
import Documents from "./Components/Documents";
import SplashPage from "./Components/SplashPage";

function App() {
  const { isLoading } = useAuth0();
  const { isAuthenticated } = useAuth0();

  if (isLoading)
    return (
      <Layout className="dashboard-loader">
        <Spin size="large" tip="Loading your dashboard..."></Spin>,
      </Layout>
    );
  return (
    <div className="app">
      {isAuthenticated && (
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
            <Layout.Footer style={{ textAlign: "center" }}>
              [A]TP ©2022 Created by Nigel Marshal
            </Layout.Footer>
          </Layout>
        </Layout>
      )}
      {!isAuthenticated && <SplashPage />}
    </div>
  );
}

export default App;
