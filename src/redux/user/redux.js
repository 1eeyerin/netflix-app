//initialState
const initialState = {
    //더미데이터, 데이터 양식
    Users : [
        {
            id:"7c1a38ba-2ebe-4600-a546-9f7482766aee",
            userId:"admin",
            userPassword:"1234",
            nickname:"ye-r1",
            myList: [26199, 26182, 26223, 26231, 26216, 26229],
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
    switch(action.type){
        default: return state;
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        case Action.Types.ADDED_USER: {
            return {
                ...state,
                Users : state.Users.concat(action.payload)
            }
        }
        case Action.Types.ADD_MYLIST: {
            return {
                ...state,
                LoginData : {
                    ...state.LoginData,
                    myList : (() => {
                        const addMyListArr = [...state.LoginData.myList];
                        addMyListArr.unshift(action.payload);
                        return addMyListArr;
                    })()
                }
            }
        }
        case Action.Types.REMOVE_MYLIST: {
            return {
                ...state,
                LoginData : {
                    ...state.LoginData,
                    myList : (() => {
                        const removeMyListArr = [...state.LoginData.myList];
                        removeMyListArr.splice(removeMyListArr.indexOf(action.payload),1);
                        return removeMyListArr;
                    })()
                }
            }
        }
    }
}
    

export {reducer, Action}