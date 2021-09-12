import React from "react";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Avatar from "@material-ui/core/Avatar";
import "./Chat.css";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function Chat({ item }) {
  
  const classes = useStyles();
  const [keyup, setKeyup] = useState(true);

  const onhandelup = () => {
    setKeyup(false);
  };
  const onhandeldown = () => {
    setKeyup(true);
  };
  const chatbox = keyup ? "chat1" : "chat2";
  return (
    <div className={chatbox}>
      <div className="Header">
        <div className="left">
          <ChatBubbleOutlineIcon />
          <p> Chats</p>
        </div>
        <div className="right">
          {keyup ? (
            <KeyboardArrowUpIcon onClick={onhandelup} />
          ) : (
            <KeyboardArrowDownIcon onClick={onhandeldown} />
          )}
        </div>
      </div>
      <div className="containant">
        {item.map((ele) => (
          <div className="profilelist">
            <div className="profilewraper">
              <Avatar
                className={classes.large}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <p> {ele.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
