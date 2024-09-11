import { useState } from "react";
import "./EmailBody.css";

function EmailBody(props) {
  const handleClose = () => {
    props.onClose();
  };

  return (
    <div className="email-body">
      <h1 className="eb-title">{props.title}</h1>
      <h2 className="eb-heading">{props.heading}</h2>
      <p className="eb-content">{props.content}</p>
      <h3 className="eb-date">{props.date}</h3>

      <button className="eb-button" onClick={handleClose}>
        Close Email
      </button>
    </div>
  );
}

export default EmailBody;
