import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';

function EditEntry(props) {
    
  

    //   useEffect(() => {
    //     if(!status.editEntriesSuccessTime){
    //         return;
    //     }else{
    //         setLoading(false);
    //         handleClose();
    //     }
    //     }, [status.editEntriesSuccessTime])


    //     useEffect(() => {
    //       if(status.editEntriesErrorTime){
    //         Alert.error("error editing post", 5000)
            
    //       }
    //     }, [status.editEntriesErrorTime])



    return (
        <div>
          <h3>Notify</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    //   status: state.entries,
  }
}

const mapDispatchToProps = (dispatch) => {
//   return {
//     editEntry: (entryId, entryData) => dispatch(editEntry(entryId, entryData)),
//     getEntries: () => dispatch(getEntries())
//   }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEntry);