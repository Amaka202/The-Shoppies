import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import { removeMovieFromNomList} from '../store/actions/action'

function EditEntry({removeMovieFromNomList}) {
  let nominationList = JSON.parse(localStorage.getItem('nominationList'))
  console.log(nominationList);
    const tableHeader = () => {
      let header = Object.keys(nominationList[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
    }

    const tableBody = () => {
      return nominationList.map(movie => {
        return (
          <tr key={movie.movieId}>
            <td>{movie.movieId}</td>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td onClick={() => removeMovieFromNomList(movie.movieId)}>X</td>
          </tr>
        )
      })
    }




    return (
      <div>
        {
          nominationList && nominationList.length > 0
          ?
          <table style={{"width": "100%"}}>
            <tbody>
              <tr>{tableHeader()}</tr>
              {tableBody()}
            </tbody>
          </table>
          :
          <p>hey</p>
          
        }
    </div>
    )
}

const mapStateToProps = (state) => {
  return {
    //   status: state.entries,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeMovieFromNomList: (movieId) => dispatch(removeMovieFromNomList(movieId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);