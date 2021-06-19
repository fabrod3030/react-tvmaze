import { combineReducers } from 'redux'

import movieListModelSlice from './movieListModelSlice'
import userModelSlice from './userModelSlice'

const rootReducer = combineReducers({
    movieList: movieListModelSlice,
    users: userModelSlice,
})

export default rootReducer
