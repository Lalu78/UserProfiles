import React, { useState } from "react";
import "./Profile.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  link: {
    textDecoration: "none",
  },
}));

export default  function LogoutProfile({ userdata, item }) {
  const [userdata1, setUserdata1] = useState([]);
  const classes = useStyles();

  const onHandleClick = (ind) => {
    const ide = item.filter((e) => {
      return ind === e.id;
    });
    console.log("log", ide);
    setUserdata1(ide);
  };

  return (
    <div className="profile_container">
      {userdata.map((e) => (
        <div className="profile_item">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.large}
          />
          <h2>{e.name}</h2>
          <h4>{e.email}</h4>
          <div className="logoutHr"></div>
          <div>
            <div className="profilelist1">
              <Link to="/profile">
                <div
                  onClick={() => onHandleClick(e.id)}
                  className="profilelist2"
                >
                  <Avatar
                    className={classes.link}
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                  />
                  <p style={{ marginLeft: "10px" }}> {item[2].name}</p>
                </div>
              </Link>
              <div className="logoutHr"></div>
              <div className="profilelist2">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <p style={{ marginLeft: "10px" }}>{item[4].name}</p>
              </div>
            </div>
          </div>

          <Link to="/">
            <button>Sign Out</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

//export default LogoutProfile;
