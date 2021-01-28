//initialState
const initialState = {
    //더미데이터, 데이터 양식
    User : [
        {
            id: 1,
            MyList: [],
            SearchList: [],
            nickname: "",
        }
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
        UPDATE_STATE: "@@USER/UPDATE_STATE"
    },
    Creators: {
        updateState: (props) => ({
            type: Action.Types.UPDATE_STATE,
            payload: props
        })
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
    }
}
    

export {reducer, Action}