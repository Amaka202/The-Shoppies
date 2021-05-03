import './App.css';
import SearchMovies from './components/SearchMovies'
import DisplayMovies from './components/DisplayMovies'
import Notification from './components/Notification'

function App() {
  return (
    <>
      <div>
        <SearchMovies />
        <DisplayMovies />
      </div>
      <div>
        <Notification />
      </div>
    </>
  );
}

export default App;
