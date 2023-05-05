import React from "react";
import "./EmailRow.css";
import {
  Check,
  CheckBox,
  CheckBoxOutlineBlank,
  CheckBoxOutlineBlankOutlined,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import {
  unstable_HistoryRouter,
  useHistory,
  useNavigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ title, subject, description, time, id }) =>{
 const history = useNavigate();
const dispatch = useDispatch();

const openMail = () => {
  dispatch(selectMail({
    id,
    title,
    subject,
    description,
    time,
  }))
  history("/mail")
}
  
  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">--{description}</span>
        </h4>{" "}
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
};

export default EmailRow;
