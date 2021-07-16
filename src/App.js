import './App.css';
import Topbar from "./components/topbar/Topbar";
import SidebarMenu from "./components/sidebar/SidebarMenu";
import Home from "./components/pages/home/Home";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import StudentRoom from "./components/pages/camin/StudentRoom";
import NewUser from "./components/pages/newUser/NewUser";
import ListOfPayment from "./components/pages/payment/ListOfPayment";

function App() {
  return (
    <Router>
      <Topbar />
        <div className={"container"}>
            <SidebarMenu />
            <Switch>
                <Route exact path={"/"}>
                    <Home />
                </Route>
                <Route path={"/users"}>
                    <UserList />
                </Route>
                <Route path={"/user/:userId"}>
                    <User />
                </Route>
                <Route path={"/studentRoom"}>
                    <StudentRoom />
                </Route>
                <Route path={"/newUser"}>
                    <NewUser />
                </Route>
                <Route path={"/payment"}>
                    <ListOfPayment />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
