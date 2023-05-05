import React, { useEffect, useState } from "react";
import "./EmailList.css";
import {
  ArrowDownward,
  ArrowDropDown,
  Check,
  CheckBox,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  RedoOutlined,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    db.collection("emails")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  // console.log(emails.data);
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="email__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            // time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        {/* <EmailRow
          titel="twitch"
          subject="hey fellow streamer"
          description="this is a test"
          time="10pm"
        />
        <EmailRow
          titel="twitch"
          subject="hey fellow streamer"
          description="this is a test"
          time="10pm"
        /> */}
      </div>
    </div>
  );
};

export default EmailList;
