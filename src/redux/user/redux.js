import produce from "immer";

//initialState
const initialState = {
    //더미데이터, 데이터 양식
    Users : [
        {
            id:"7c1a38ba-2ebe-4600-a546-9f7482766aee",
            userId:"admin",
            userPassword:"1234",
            nickname:"ye-r1",
            myList: [26231, 26229, 26199, 26216, 26182, 26206],
            SearchList: [],
        },
    ],
    LoginData: {},
    isLoggedIn: false,
}

//action
const Action = {
    Types: {
        UPDATE_STATE: "@@USER/UPDATE_STATE",
        ADDED_USER: "@@USER/ADDED_USER",
        ADD_MYLIST: "@@USER/ADD_MYLIST",
        REMOVE_MYLIST: "@@USER/REMOVE_MYLIST",
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            payload: props
        }),
        addedUser: (props) => ({
            type: Action.Types.ADDED_USER,
            payload:props
        }),
        addMyList: (props) => ({
            type: Action.Types.ADD_MYLIST,
            payload:props
        }),
        removeMyList: (props) => ({
            type: Action.Types.REMOVE_MYLIST,
            payload:props
        }),
    }

}

//reducer
const reducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch(action.type){
            default: return draft;
            case Action.Types.UPDATE_STATE: {
                return {
                    ...state,
                    ...action.payload
                }
            }
            case Action.Types.ADDED_USER: {
                draft.Users.push(action.payload);
                break;
            }
            case Action.Types.ADD_MYLIST: {
                draft.LoginData.myList.unshift(action.payload);
                break;
            }
            case Action.Types.REMOVE_MYLIST: {
                draft.LoginData.myList.splice(draft.LoginData.myList.indexOf(action.payload),1);
                break;
            }
        }
    });
}
    

export {reducer, Action}