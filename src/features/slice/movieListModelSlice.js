import { createSlice } from '@reduxjs/toolkit'

import {
    getMovieList,
} from '@/api'

export const initialState = {
    movieList: [],
    filteredList: [],
    key1: '',
    key2: '',
    loading: false,
}

const movieListModelSlice = createSlice({
    name: 'movieListModelSlice',
    initialState,
    reducers: {
        getMovieListStart: (state, action) => {
            state.loading = true
        },
        getMovieListSuccess: (state, action) => {
            state.loading = false
            if (action.payload.data) {
                state.movieList = action.payload.data
            }
        },
        getMovieListFailure: (state, action) => {
            state.loading = false
        },
        setFilterListStart: (state, action) => {
            state.loading = true
        },
        setFilterListSuccess: (state, action) => {
            state.loading = false
            if (action.payload.data) {
                state.filteredList = action.payload.data
                state.key1 = action.payload.key1
                state.key2 = action.payload.key2
            }
        },
        setFilterListFailure: (state, action) => {
            state.loading = false
        },
    },
})

const movieList = (key) => {
    return async dispatch => {
        dispatch(movieListModelSlice.actions.getMovieListStart())
        const result = await getMovieList(key)
        if(result.status === 200) {
            dispatch(movieListModelSlice.actions.getMovieListSuccess({data: result.data}))
        }
        else{
            dispatch(movieListModelSlice.actions.getMovieListFailure())
        }
    }
}

const filterList = (filter,  key1, key2) => {
    return async dispatch => {
        dispatch(movieListModelSlice.actions.setFilterListStart())
        dispatch(movieListModelSlice.actions.setFilterListSuccess({data: filter, key1, key2}))
    }
}

const movieListModelSelector = state => state.movieList

export {
    movieListModelSelector,
    movieList,
    filterList,
}

export default movieListModelSlice.reducer
