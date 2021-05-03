import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';

import SearchMovies from './components/SearchMovies'
import DisplayMovies from './components/DisplayMovies'
import NominationList from './components/NominationList'

function App() {
  return (
    <>
      <div>
        <SearchMovies />
        <DisplayMovies />
      </div>
      <div>
        <NominationList />
      </div>
    </>
  );
}

export default App;
