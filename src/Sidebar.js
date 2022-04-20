import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=63dd5f402645ef52fb7dfb592aec765a" alt="" />
            <Avatar className="sidebar__avatar" />
            <h2>Abhishek Prusty</h2>
            <h4>prusty.abhishek7@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2543</p>
        </div>
            <div className="sidebar__stat">
            <p>Views on post</p>
                <p className="sidebar__statNumber">2448</p>
        </div>
        </div>   
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  );
}

export default Sidebar;