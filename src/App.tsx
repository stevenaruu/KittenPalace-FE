import { Switch, Route } from "react-router-dom";
import HomePage from "./views/home_page/HomePage";
import LoginPage from "./views/login_page/LoginPage";
import RegisterPage from "./views/register_page/RegisterPage";
import _404Page from "./views/404_page/404Page";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/register' component={RegisterPage} />
      <Route path='*' component={_404Page} />
    </Switch>
  );
}

export default App;
