import { SIGNUP_USER, LOGIN_USER, MODIFY_USER, FETCH_ACCOUNTS, WITHDRAW, CARDS, DATA } from "../action/userAppStorage";




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
    accounts: [],
    cards: [],
    paymentData: null,
    loans:[],
    histories:[]
}



export const userAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                userToken: action.payload.userToken,
                accounts: action.payload.accounts,
                cards:action.payload.cards,
                loans:action.payload.loans,
                histories:action.payload.histories
            }

        case DATA:
            return {
                ...state,
                paymentData:action.payload
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

        case CARDS:
            return {
                ...state,
                cards: action.payload,
            }


        default:
            return state
    }

}

