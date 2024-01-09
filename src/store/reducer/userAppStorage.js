import { SIGNUP_USER, LOGIN_USER, MODIFY_USER,FETCH_ACCOUNTS,WITHDRAW } from "../action/userAppStorage";




const initialState = {
    adminToken: "",
    //expiresIn: "",
    admin: null,
    //user session credentials
    userToken: '',
    user: null,
    notifications: [],
    color: {
        background: '',
        importantText: '',
        normalText: '',
        fadeColor: '',
        blue: '',
        fadeButtonColor: '',

    },
    accounts:[]
}



export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                userToken: action.payload.userToken,
                accounts:action.payload.accounts
            }

        case MODIFY_USER:
            return {
                ...state,
                user: action.payload.user,
            }


        case FETCH_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload,
            }


        case WITHDRAW:
            return {
                ...state,
                accounts: action.payload,
            }



        default:
            return state
    }

}

