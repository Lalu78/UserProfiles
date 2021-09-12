import React from "react";
import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import "./Profile.css";
import Logoutpopup from "../LogoutProfile/Logoutpopup";
import LogoutProfile from "../LogoutProfile/LogoutProfile";
import map from "../HomeProfile/map.png";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    right: theme.spacing(2),
  },
  large1: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

function Profile({ userdata, item }) {
  const classes = useStyles();

  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="main">
      {userdata.map((e) => (
        <>
          <div className="Rightside">
            <div className="headerprofile">
              <div className="profilename">
                <p>Profile</p>
              </div>

              <div className="username">
                <Avatar
                  onClick={() => setOpenPopup(true)}
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className={classes.large}
                />

                <p>{e.name} </p>
              </div>
            </div>
            <hr />
            <div className="right_left">
              <div className="subleft1">
                <div className="subleft">
                  <div className="subleftuserprofile">
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      className={classes.large1}
                    />

                    <p style={{ marginTop: "5px" }}> {e.name}</p>
                  </div>
                  <h3>
                    Username:<strong>{e.username}</strong>
                  </h3>
                  <h3>
                    Phone:<strong>{e.phone}</strong>
                  </h3>
                  <h3>
                    {" "}
                    Website: <strong> {e.website}</strong>
                  </h3>
                  <h3>
                    {" "}
                    Email: <strong>{e.email}</strong>
                  </h3>
                  <hr />

                  <h2>Companay:</h2>
                  <h3>
                    Name: <strong>{e.company.name}</strong>
                  </h3>
                  <h3>
                    CatchPhase: <strong> {e.company.catchPhrase}</strong>
                  </h3>
                  <h3>
                    bus: <strong> {e.company.bs}</strong>
                  </h3>
                </div>

                <hr className="vertical_line" />
              </div>
              <div className="subright">
                <div className="sub_right_address">
                  <h3>Address:</h3>
                  <h4>
                    Street:<strong>{e.address.street}</strong>
                  </h4>
                  <h4>
                    Suite: <strong>{e.address.suite}</strong>
                  </h4>
                  <h4>
                    City:<strong>{e.address.city}</strong>
                  </h4>
                  <h4>
                    ZipCode: <strong>{e.address.zipcode} </strong>
                  </h4>
                </div>
                <div className="mapimage">
                  <img src={map} alt="mapimage" />
                </div>
                <div className="latlong">
                  <p>Lat:{e.address.geo.lat}</p>
                  <p>Long:{e.address.geo.lng}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      <Logoutpopup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <LogoutProfile userdata={userdata} item={item} />
      </Logoutpopup>
    </div>
  );
}

export default Profile;
