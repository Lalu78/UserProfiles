import React, { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function SideBar() {
  const [tprofile, setTprofile] = useState(true)
  const [tpost, setTpost] = useState()
  const [tgallery, setGallery] = useState()
  const [ttodo, setTtodo] = useState()
  
  const prof = tprofile ? "pro1" : "pro2";
  const post = tpost ? "post1" : "post2";
  const gally = tgallery ? "gally1" : "gally2";
  const todo = ttodo ? "todo1" : "todo2";

  const onhandleprofie = () => {
    setTprofile(true)
    setTpost(false)
    setGallery(false)
    setTtodo(false)
  }
  const onhandlepost = () => {
    setTprofile(false)
    setGallery(false)
    setTtodo(false)
    setTpost(true)
  }
  const onhandlegallery = () => {
    setTpost(false)
    setTprofile(false)
    setTtodo(false)
    setGallery(true)
  }
  const onhandltodo = () => {
    setTpost(false)
    setGallery(false)
    setTprofile(false)
    setTtodo(true)
  }
  return (
    <div className="SideBar">
      <div className="sidebar">
        
          <div className="arroybutton">
          <Link to="/profile"> <p onClick={() => onhandleprofie()}>Profile</p></Link>
             <div className={prof}> <ArrowForwardIosIcon  style={{ fontSize: 12 }} /></div>
          </div>
        
        <hr />
        
          <div className="arroybutton">
          <Link to="/post"> <p onClick={() =>onhandlepost()}>Posts</p></Link>
             <div  className={post}> <ArrowForwardIosIcon  style={{ fontSize: 12 }} /></div>
          </div>
        
        <hr />
        
          <div className="arroybutton">
          <Link to="/gallery"> <p onClick={()=>onhandlegallery()}>Gallery</p> </Link>
            <div  className={gally}> <ArrowForwardIosIcon style={{ fontSize: 12 }}/></div>
          </div>
       
        <hr />
         
        <div className="arroybutton"  onClick={() => onhandltodo()}>
        <Link to="/todo" >
          <p >Todo</p>  </Link>
            <div  className={todo}> <ArrowForwardIosIcon style={{ fontSize: 12 }}/></div>
          </div>
         
      </div>
    </div>
  );
}

export default SideBar;
