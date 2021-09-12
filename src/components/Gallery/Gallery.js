import React from "react";
import { useState } from "react";
import "./Gallery.css";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import Logoutpopup from "../LogoutProfile/Logoutpopup";
import LogoutProfile from "../LogoutProfile/LogoutProfile";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    right: theme.spacing(2),
  },
}));

function Gallery({ userdata, item }) {
  const [openPopup, setOpenPopup] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <div className="Rightside">
        <div className="headerprofile">
          <div className="profilename">
            {" "}
            <p>Gallery</p>
          </div>
          <div className="username">
            {userdata.map((e) => (
              <>
                <Avatar
                  
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className={classes.large}
                />
                <p> {e.name}</p>
              </>
            ))}
          </div>
        </div>
        <hr />
      </div>
      <div className="coming_soon">
        <h1>Comming Soon</h1>
      </div>
      <Logoutpopup openPopup={openPopup} setOpenPopup={setOpenPopup}>
        <LogoutProfile userdata={userdata} item={item} />
      </Logoutpopup>
    </div>
  );
}

export default Gallery;
