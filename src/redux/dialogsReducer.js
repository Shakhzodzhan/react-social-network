import {act} from "react-dom/test-utils";

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Jack'},
        {id: 2, name: 'Marie'},
        {id: 3, name: 'Lucie'},
        {id: 4, name: 'Martin'},
        {id: 5, name: 'Tereza'}
    ],
    messages: [
        {id: 1, message: 'Hello, are you coming?'},
        {id: 2, message: 'I\'m busy now.'},
        {id: 3, message: 'Hello, ok see you.'},
        {id: 4, message: 'Call you back ))'},
        {id: 5, message: 'Let me know.'}
    ],
    newMessageBody: ''
};

export function dialogsReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;