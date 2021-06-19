import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    users: [
        {
            id: 1,
            name: 'Manager',
            email: 'manager@gmail.com',
            password: '123456',
            admin: true,
        },
        {
            id: 2,
            name: 'Developer',
            email: 'developer@gmail.com',
            password: '123456',
            admin: false,
        },
    ],
    loginUser: -1,
    loading: false,
}

const userModelSlice = createSlice({
    name: 'userModelSlice',
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            if (action.payload) {
                const { id } = action.payload
                state.loginUser = id
            }
        },
        loginFailure: (state, action) => {
            state.loading = false
        },
        logoutStart: (state, action) => {
            state.loading = true
        },
        logoutSuccess: (state, action) => {
            state.loading = false
            state.loginUser = -1
        },
        logoutFailure: (state, action) => {
            state.loading = false
        },
    },
})

const login = (email, password, history, match) => {
    return async (dispatch, getState) => {
        dispatch(userModelSlice.actions.loginStart())
        const userModel = getState().users
        const isEmailExist = userModel.users.filter(user => user.email === email)
        if(isEmailExist.length > 0 && isEmailExist[0].password === password) {
            history.push(`${match.path}home`)
            dispatch(userModelSlice.actions.loginSuccess({id: isEmailExist[0].id}))
        }
        else {
            dispatch(userModelSlice.actions.loginFailure())
        }
    }
}

const logout = () => {
    return async (dispatch, getState) => {
        dispatch(userModelSlice.actions.logoutStart())
        dispatch(userModelSlice.actions.logoutSuccess())
    }
}

const userModelSelector = state => state.users

export {
    userModelSelector,
    login,
    logout,
}

export default userModelSlice.reducer
