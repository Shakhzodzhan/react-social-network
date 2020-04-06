import React from "react";
import module from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let newMessageBody = state.newMessageBody;
    let dialogsElement = state.dialogs.map(function (item) {
        return <DialogItem name={item.name} id={item.id}/>
    });
    let messagesElement = state.messages.map(function (item) {
        return <Message message={item.message}/>
    });


    let sendMessageOnClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={module.dialogs}>
            <div className={module.dialogsItems}>
                {dialogsElement}
                {/*<Dialog id='1' name='Jack'/>*/}
                {/*<Dialog id='2' name='Marie'/>*/}
                {/*<Dialog id='3' name='Lucie'/>*/}
                {/*<Dialog id='4' name='Martin'/>*/}
                {/*<Dialog id='5' name='Tereza'/>*/}
            </div>
            <div className={module.messages}>
                {messagesElement}
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder="Enter your message"></textarea></div>
                <div>
                    <button onClick={sendMessageOnClick}>Send Message</button>
                </div>
                {/*<div className={module.message}>*/}
                {/*    Hello, are you coming?*/}
                {/*</div>*/}
                {/*<div className={module.message}>*/}
                {/*    I'm busy now.*/}
                {/*</div>*/}
                {/*<div className={module.message}>*/}
                {/*    Hello, ok see you.*/}
                {/*</div>*/}
                {/*<div className={module.message}>*/}
                {/*    Call you back ))*/}
                {/*</div>*/}
                {/*<div className={module.message}>*/}
                {/*    Let me know.*/}
                {/*</div>*/}
            </div>
        </div>
    )
};
export default Dialogs;