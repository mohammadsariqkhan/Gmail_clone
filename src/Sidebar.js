import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
const Sidebar = () => {
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" startIcon={<Add fontSize="large"/>} onClick={() => dispatch(openSendMessage())}>
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number="54" selected={true} />
      <SidebarOption Icon={Star} title="Starred" number="54" />
      <SidebarOption Icon={AccessTime} title="Snoozed" number="54" />
      <SidebarOption Icon={LabelImportant} title="Important" number="54" />
      <SidebarOption Icon={NearMe} title="Sent" number="54" />
      <SidebarOption Icon={Note} title="Drafts" number="54" />
      <SidebarOption Icon={ExpandMore} title="More" number="54" />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>  
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
