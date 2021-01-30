//initialState
const initialState = {
    //더미데이터, 데이터 양식
    Users : [
        {
            id:"7c1a38ba-2ebe-4600-a546-9f7482766aee",
            userId:"admin",
            userPassword:"1234",
            nickname:"ye-r1",
            MyList: [],
            SearchList: [],
        },
    ],
    LoginData: {
        id: "",
        password: "",
        nickname: "",
    },
    signUpData: {
        id: "",
        password: "",
        nickname: "",
        email: "",
    },
    isLoggedIn: false,
}

//action
const Action = {
    Types: {
        UPDATE_STATE: "@@USER/UPDATE_STATE",
        ADDED_USER: "@@USER/ADDED_USER"
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
                Users : [
                    state.Users.concat(action.payload)
                ]
            }
        }
    }
}
    

export {reducer, Action}