export const SIGNUP_USER = "SIGNUP_USER";
export const LOGIN_USER = "LOGIN_USER";
export const MODIFY_USER = "MODIFY_USER";
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS'
export const WITHDRAW = 'WITHDRAW'
export const CARDS = 'CARDS'
export const DATA = 'DATA'


//pure functions to calculate the time remaining

let calculateRemainingTime = (expiryDate) => {
  //getting current time in milliseconds
  const currentTime = new Date().getMilliseconds()
  //getting expiration time in milliseconds
  const adjustExpirationTime = (expiryDate * 60 * 60 * 1000)
  const timeLeft = adjustExpirationTime - currentTime
  return timeLeft
}


let retrievedAdminStoredToken = () => {
  let tokenFromStorage = localStorage.getItem('admin_token')
  let expiryDate = localStorage.getItem('admin_expiry')
  const timeLeft = calculateRemainingTime(expiryDate)

  if (timeLeft <= 3600) {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_expiry')
    localStorage.removeItem('admin')

    return {
      adminToken: "",
      adminExpiresIn: ""
    }
  }

  return {
    adminToken: tokenFromStorage,
    adminExpiresIn: timeLeft
  }
}

//https://back-end-kiaq.onrender.com



/*   user sections */
export const signup = (data) => {
  let objData = data
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`https://back-end-kiaq.onrender.com/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/signup'
        }
      }
      if (response.status === 300) {
        let data = await response.json()

        return {
          bool: false,
          message: data.response,
          url: '/signup'
        }
      }
      if (response.status === 301) {
        let data = await response.json()

        return {
          bool: false,
          message: data.response,
          url: '/login'
        }
      }

      if (response.status === 200) {
        let data = await response.json()



        localStorage.setItem("user", JSON.stringify(data.user))

        localStorage.setItem("user_token", JSON.stringify(data.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.userExpiresIn))

        let payloadData = {
          user: data.user,
          userToken: data.userToken,
          userExpiresIn: data.userExpiresIn

        }
        dispatch({ type: LOGIN_USER, payload: payloadData })



        return {
          bool: true,
          message: data.response,
          url: `/verify/${data.user.email}`
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error",
        url: '/signup'
      }

    }

  }

}

export const login = (data) => {
  return async (dispatch, getState) => {
    let userData = data
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch('https://back-end-kiaq.onrender.com/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: "/login"
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: "/login"
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        localStorage.setItem("user", JSON.stringify(data.response.user))

        localStorage.setItem("user_token", JSON.stringify(data.response.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.response.userExpiresIn))

        dispatch({ type: LOGIN_USER, payload: data.response })
        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response.message,
          url: `/verify/${userData.email}`
        }
      }
      if (response.status === 201) {
        let data = await response.json()

        localStorage.setItem("user", JSON.stringify(data.response.user))

        localStorage.setItem("user_token", JSON.stringify(data.response.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.response.userExpiresIn))


        dispatch({ type: LOGIN_USER, payload: data.response })
        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response.message,
          url: "/phonesignup"
        }
      }

      if (response.status === 202) {
        let data = await response.json()
        //saving data to local storage
        localStorage.setItem("user", JSON.stringify(data.response.user))

        localStorage.setItem("user_token", JSON.stringify(data.response.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.response.userExpiresIn))


        dispatch({ type: LOGIN_USER, payload: data.response })

        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response.message,
          url: "/registeration"
        }
      }
      if (response.status === 203) {
        let data = await response.json()
        //saving data to local storage
        localStorage.setItem("user", JSON.stringify(data.response.user))

        localStorage.setItem("user_token", JSON.stringify(data.response.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.response.userExpiresIn))


        dispatch({ type: LOGIN_USER, payload: data.response })

        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response.message,
          url: "/profilephoto"
        }
      }
      if (response.status === 206) {

        let data = await response.json()
        //saving data to local storage
        localStorage.setItem("user", JSON.stringify(data.response.user))

        localStorage.setItem("user_token", JSON.stringify(data.response.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.response.userExpiresIn))
        dispatch({ type: LOGIN_USER, payload: data.response })

        return {
          bool: true,
          //data here refers to user and dispatch
          message: data.response.message,
          url: "/dashboard"
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

/*
export const verifiedEmail = (data) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`https://back-end-kiaq.onrender.com/emailverify`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        
        let data = await response.json()
        //save to async storage and reducer store

        localStorage.setItem("user", JSON.stringify(data.user))

        localStorage.setItem("user_token", JSON.stringify(data.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.userExpiresIn))

        let payloadData = {
          user:data.user,
          userToken:data.userToken,
          userExpiresIn:data.userExpiresIn

        }


        dispatch({ type: LOGIN_USER, payload: payloadData })

        return {
          bool: true,
          message: data.response
        }
      }
    } catch (err) {

      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
*/

//https://back-end-kiaq.onrender.com.com

//this one is the email verification page after signin up
export const checkverification = (email) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`https://back-end-kiaq.onrender.com/checkverification/${email}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 301) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //save to async storage and reducer store

        localStorage.setItem("user", JSON.stringify(data.user))

        localStorage.setItem("user_token", JSON.stringify(data.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.userExpiresIn))

        let payloadData = {
          user: data.user,
          userToken: data.userToken,
          userExpiresIn: data.userExpiresIn

        }
        dispatch({ type: LOGIN_USER, payload: payloadData })


        return {
          bool: true,
          message: data.response,
          url: 'phonesignup'
        }
      }
    } catch (err) {

      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//this function is the verification client continually undergo from email
export const verifying = (token) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`https://back-end-kiaq.onrender.com/verifying/${token}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        //save to async storage and reducer store

        localStorage.setItem("user", JSON.stringify(data.user))

        localStorage.setItem("user_token", JSON.stringify(data.userToken))

        localStorage.setItem("user_expiry", JSON.stringify(data.userExpiresIn))

        let payloadData = {
          user: data.user,
          userToken: data.userToken,
          userExpiresIn: data.userExpiresIn

        }


        dispatch({ type: LOGIN_USER, payload: payloadData })

        return {
          bool: true,
          message: data.response,
          url: 'phonesignup'
        }
      }
    } catch (err) {

      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const sendRecoverEmail = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`https://back-end-kiaq.onrender.com/recoverpassword`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,

        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,

        }
      }
      if (response.status === 301) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,

        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response,

        }
      }
    } catch (err) {

      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const checkRecoverTokenValidity = (token) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`https://back-end-kiaq.onrender.com/checkrecovertokenvalidity/${token}`, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {

      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const changePassword = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      const response = await fetch(`https://back-end-kiaq.onrender.com/changepassword/${data.token}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(data)
      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {

      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const phoneSignup = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth


      const response = await fetch(`https://back-end-kiaq.onrender.com/phonesignup/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(data)
      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/phonesignup'
        }
      }


      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/phonesignup'
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        return {
          bool: true,
          message: data.response,
          url: '/registeration'
        }
      }
    } catch (err) {

      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const verifyPhone = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      console.log(userToken)

      const response = await fetch(`https://back-end-kiaq.onrender.com/verifyphone/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(data)
      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: 'phoneverification'
        }
      }


      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: 'phoneverification'
        }
      }


      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response,
          url: 'registeration'
        }
      }

    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const registeration = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/registeration/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(data),

      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/registeration'
        }
      }


      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/registeration'
        }
      }


      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response,
          url: '/profilephoto'
        }
      }

    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const profilePhoto = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/pofilephoto/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(data),

      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/profilephoto'
        }
      }


      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url: '/profilephoto'
        }
      }

      if (response.status === 200) {
        let data = await response.json()
        return {
          bool: true,
          message: data.response,
          url: '/success'
        }
      }

    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
/*  Dashboard Routes  */

//get user



export const hasCardFun = () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/hascard/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,

        }
      }


      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }


      if (response.status === 200) {
        let data = await response.json()
        //fetch cards to store
        dispatch({type:CARDS,payload:data.response})

        return {
          bool: true,
          message: data.response,
        }
      }

    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const createCard = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/createcard/${userToken}`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body: JSON.stringify(data),
      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,

        }
      }


      if (response.status === 200) {
        let data = await response.json()

        //dispatch a new user
        dispatch({ type: MODIFY_USER, payload: data.response })

        return {
          bool: true,
          message: data.response.cards,
        }
      }

    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const deleteCard = (id) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/deletecard/${userToken}/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })

      if (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user

        dispatch({ type: MODIFY_USER, payload: data.response })


        return {
          bool: true,
          message: data.response.user,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const fetchDeposits = () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/withdraws/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })

      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const createDeposits = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/deposits/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })

      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}


export const withdraws = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/withdraw/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })

      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:"withdraw"
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:"withdraw"
        }
      }
      if (response.status === 301) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:"tax"
        }
      }
      if (response.status === 302) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:"bsa"
        }
      }

      if (response.status === 200) {
        let data = await response.json()
        //dispatch new history and account
        dispatch({type:WITHDRAW,payload:data.response.allAccount})

        return {
          bool: true,
          message: data.response.savedHistory,
          url:'withdraw'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const fetchWithdraw = () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/withdraws/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })

      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}


export const fetchAccounts = () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth
      const response = await fetch(`https://back-end-kiaq.onrender.com/accounts/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })

      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()

        //dispatch a new user
        //FETCH_ACCOUNTS
        dispatch({type:FETCH_ACCOUNTS,payload:data.response})

        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}


export const submitTaxCode = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/tax/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'tax'
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'tax'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        dispatch({ type: MODIFY_USER, payload: data.response })
        return {
          bool: true,
          message: data.response,
          url:'bsa'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const submitBsaCode = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/bsa/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'bsa'
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'bsa'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: MODIFY_USER, payload: data.response })
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
          url:'tac'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const submitTacCode = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/tac/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'tac'
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'tac'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: MODIFY_USER, payload: data.response })
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
          url:'nrc'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const submitNrcCode = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/nrc/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'nrc'
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'nrc'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: MODIFY_USER, payload: data.response })
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
          url:'imf'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}


export const submitImfCode = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/imf/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'imf'
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'imf'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: MODIFY_USER, payload: data.response })
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
          url:'cot'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
//https://back-end-n.onrenderll.com

export const submitCotCode = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken,
        paymentData
      } = getState().userAuth

      //fetch payment data from store

      data.payment = paymentData
      

      const response = await fetch(`https://back-end-kiaq.onrender.com/cot/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'cot'
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'cot'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({ type: MODIFY_USER, payload: data.response })
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
          url:'dashboard'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}









export const sendAccount = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      dispatch({type:DATA,payload:{...data,url:'sendAccount'}})

      const response = await fetch(`https://back-end-kiaq.onrender.com/sendAccount/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:''
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:''
        }
      }
      if (response.status === 301) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'tax'
        }
      }
      if (response.status === 302) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'bsa'
        }
      }

      if (response.status === 303) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'tac'
        }
      }

      if (response.status === 305) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'nrc'
        }
      }
      if (response.status === 306) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'imf'
        }
      }
      if (response.status === 307) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'cot'
        }
      }



      if (response.status === 200) {
        let data = await response.json()
        dispatch({type:WITHDRAW,payload:data.response.allAccount})
        //dispatch a new user
        return {
          bool: true,
          message: data.response.transfer,
          url:''
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const sendAccountWithinBank = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      dispatch({type:DATA,payload:{...data,url:'sendAccountWithinBank'}})


      const response = await fetch(`https://back-end-kiaq.onrender.com/sendAccountWithinBank/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })




      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:''
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:''
        }
      }
      if (response.status === 301) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'tax'
        }
      }

      if (response.status === 302) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'bsa'
        }
      }
      if (response.status === 303) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'tac'
        }
      }

      if (response.status === 305) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'nrc'
        }
      }
      if (response.status === 306) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'imf'
        }
      }
      if (response.status === 307) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'cot'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        dispatch({type:WITHDRAW,payload:data.response.allAccount})
        //dispatch a new user
        return {
          bool: true,
          message: data.response.transfer,
          url:''
        }
      }
    } catch (err) {
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const fetchTransfersAccount = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/transferstoaccount/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}


export const fetchAllAccount = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/allaccounts/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//send otp code to the user
export const sendOtpCode= () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/otpcode/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//submit otp code to server
export const submitOtpCode= (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/otpcode/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        dispatch({ type: MODIFY_USER, payload: data.response })
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

//fetchin all beneficiaries 
export const fetchAllBenefeciaries = () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/beneficiaries/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const addBeneficiaries = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/beneficiaries/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'add-beneficiaries'
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
          url:'add-beneficiaries'
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
          url:'beneficiaries'
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}

export const deleteBeneficiaries = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/beneficiaries/${userToken}`, {
        method:'DELETE',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify({id:data})
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
// fetch notifications
export const fetchAllNotifications = () => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/notifications/${userToken}`, {
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}
//delete notifications
export const deleteNotification = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/notifications/${userToken}/${data._id}`, {
        method:'DELETE',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        }
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      alert('was called')
      console.log(err)
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}


export const applyLoan = (data) => {
  return async (dispatch, getState) => {
    //do some check on the server if its actually login before proceding to dispatch
    try {
      let {
        userToken
      } = getState().userAuth

      const response = await fetch(`https://back-end-kiaq.onrender.com/loan/${userToken}`, {
        method:'POST',
        headers: {
          "Content-Type": "application/json",
          "header": `${userToken}`
        },
        body:JSON.stringify(data)
      })
      if  (response.status === 404) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }

      if (response.status === 300) {
        let data = await response.json()
        return {
          bool: false,
          message: data.response,
        }
      }
      if (response.status === 200) {
        let data = await response.json()
        //dispatch a new user
        return {
          bool: true,
          message: data.response,
        }
      }
    } catch (err) {
      return {
        bool: false,
        message: "network error"
      }
    }
  }
}



