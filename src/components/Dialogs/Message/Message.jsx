import React from "react";
import module from './../Dialogs.module.css';


const Message = (props) => {
    return <div className={module.message}>{props.message}</div>
};

export default Message;