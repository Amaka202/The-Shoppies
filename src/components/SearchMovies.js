import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {getMovies} from '../store/actions/action'

function SearchMovies({getMovies}) {
    
  const [searchWord, setSearchWord] = useState('')

      useEffect(() => {
          if(searchWord === '') return;
            const delayDebounceFn = setTimeout(() => {
            console.log(searchWord)
            getMovies(searchWord)
          }, 3000)
          return () => clearTimeout(delayDebounceFn)

        }, [searchWord])


        // useEffect(() => {
        //   if(status.editEntriesErrorTime){
        //     Alert.error("error editing post", 5000)
            
        //   }
        // }, [status.editEntriesErrorTime]) 



    return (
        <div>
          <input type="search" onChange={(e) => setSearchWord(e.target.value)} value={searchWord}/>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
      status: state.entries,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovies: (searchWord) => dispatch(getMovies(searchWord))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
