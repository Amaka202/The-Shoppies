import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import { addMovieToNomList} from '../store/actions/action'

function DisplayMovies({moviesData, addMovieToNomList}) {
    let nominationList = JSON.parse(localStorage.getItem('nominationList'))
    
    const checkIfNominated = (movieId) => {
      if(!nominationList) return;
      return nominationList.some(movie => movie.movieId === movieId)
    }

    // const handleNominate = (movieId, title, year) => {
    //   addMovieToNomList({movieId, title, year})
    // }

    return (
        <div>
          {
              moviesData && moviesData.map(val => {
                  return (
                      <div key={val.imdbID}>
                          <img src={val.Poster} alt="movie poster"/>
                          <a
                            className="nom-row__imdb-link"
                            href={`https://www.imdb.com/title/${val.imdbID.replace(/['"]+/g, '')}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                          <p>{val.Title}</p>
                        </a>
                          <p>{val.Year}</p>
                          <p onClick={() => addMovieToNomList({movieId: val.imdbID, title: val.Title, year: val.Year})}>Nominate</p>
                          {/* {
                            nominationList.some(movie => movie.movieId === val.imdbID)
                            ? <p>Nomitated please</p>
                            : <p onClick={() => handleNominate(val.imdbID, val.Title, val.Year)}>Nominate</p>
                          } */}
                      </div>
                  )
              })
          }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
  return {
      moviesData: state.moviesData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovieToNomList: (movieObj) => dispatch(addMovieToNomList(movieObj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMovies);