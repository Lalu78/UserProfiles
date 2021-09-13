import "./App.css";
import { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
//Components

import Profile from "./components/HomeProfile/Profile";
import SideBar from "./components/SideBar/SideBar";
import Gallery from "./components/Gallery/Gallery";
import Posts from "./components/Posts/Posts";
import Todo from "./components/ToDo/Todo";

import Chat from "./components/Chats/Chat";
function App() {
  const [item, setItem] = useState([]);
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const alldata = await fetch("https://panorbit.in/api/users.json");
        const data = await alldata.json();
        console.log("data", data.users);
        setItem(data.users);
      } catch (error) {
        console.log("error", error.message);
      }
    };
    getData();
  }, []);

  const onHandleClick = (ind) => {
    const ide = item.filter((e) => {
      return ind === e.id;
    });
    console.log("match id", ide);
    setUserdata(ide);
  };

  return (
    <Router>
     
      <div className="container">
        <Switch>
          <Route exact path="/">
            <div className="account">
              <div className="selectacount">
                <h2> Select an account </h2>
              </div>

              <div className="profile">
                {item.map((ele) => (
                  <div
                    className="profilelist"
                    onClick={() => onHandleClick(ele.id)}
                  >
                    <Link to="/profile">
                     
                      <div className="profilewraper">
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                        <p> {ele.name}</p>
                      
                      </div>
                    </Link>
                    <div className="hr"></div>
                  </div>
                ))}
              </div>
            </div>
          </Route>
        </Switch>
        
       
        <Switch>
          <Route exact path="/profile">
            <SideBar />
            <Profile userdata={userdata} item={item} />
            <Chat item={item}/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/gallery">
            <SideBar />
            <Gallery userdata={userdata} item={item} />
            <Chat item={item}/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/post">
            <SideBar />
            <Posts userdata={userdata} item={item} />
            <Chat item={item}/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/todo">
            <SideBar />
            <Todo userdata={userdata} item={item} />
            <Chat item={item}/>
          </Route>
        </Switch>
        </div>
      
    </Router>
  );
}

export default App;
