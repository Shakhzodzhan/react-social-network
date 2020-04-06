import accountReducer from "./accountReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        accountPage: {
            posts: [
                {id: 1, text: 'How are you?'},
                {id: 2, text: 'Good, and you?'},
                {id: 3, text: 'WTF???'},
                {id: 4, text: 'Going dawn...'}
            ],
            newPostText: 'OOPS-IT'
        },

        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log("State DOM");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // type = 'ADD-POST'
        this._state.accountPage = accountReducer(this._state.accountPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    }
};


export default store;
window.store = store;