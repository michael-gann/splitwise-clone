import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignUpFormPage";
import Navigation from "./components/Navigation/index";
import DashboardPage from "./components/DashboardPage";
import RecentActivityPage from "./components/RecentActivityPage";
import AllExpenses from "./components/AllExpenses";
import Footer from "./components/Footer/index";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Splash from "./components/Splash";
// import Welcome from "./components/Welcome";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/">
            <Splash />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage></DashboardPage>
          </Route>
          <Route path="/activity">
            <RecentActivityPage></RecentActivityPage>
          </Route>
          <Route path="/all">
            <AllExpenses></AllExpenses>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      )}
      <Footer></Footer>
    </>
  );
}

export default App;
