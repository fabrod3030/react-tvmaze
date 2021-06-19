import { Box } from '@material-ui/core'
import $ from 'jquery'
import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Item from '@/components/MovieItem'
import { movieList } from '@/features/slice/movieListModelSlice'

const List = () => {

  const dispatch = useDispatch()
  const movies = useSelector(state => state.movieList.movieList)
  const filteredMovies = useSelector(state => state.movieList.filteredList)
  const filterKey1 = useSelector(state => state.movieList.key1)
  const filterKey2 = useSelector(state => state.movieList.key2)

  const [showList, setShowList] = useState([])

  const centerToMovieList = _.debounce(() => {
    const bodyWidth = $('#root').eq(0).width()
    const count = Math.floor(bodyWidth / 220) 
    const padding = (bodyWidth - 220*count) / 2

    $('#movieList').css('padding', `0 ${padding}px`)
  }, 100)

  useEffect(() => {
    centerToMovieList()
    window.addEventListener('resize', centerToMovieList)

    return () => {
      window.removeEventListener('resize', centerToMovieList)
    }
  }, [centerToMovieList])

  useEffect(() => {
    dispatch(movieList())
  }, [dispatch])

  useEffect(() => {
    if((filterKey1.length !== 0 || filterKey2.length !== 0) && filteredMovies.length === 0){
      setShowList([])
    }
    else {
      if(filteredMovies.length > 0){
        setShowList(filteredMovies)
      }
      else{ 
        setShowList(movies)
      }
    }
  }, [filteredMovies, movies, dispatch, filterKey1, filterKey2])
 
  if(showList.length > 0) {
    return (
        <div>
          <Box id="movieList">
            {showList.map(item => {
              return (
                <Item key={item.show.id} item={item} />
              )
            })}
          </Box>
        </div>
    )
  }
  else {
    return (
      <p>No Items</p>
    )
  }
}

export default List
