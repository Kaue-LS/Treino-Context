import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
function App() {
  const [movies,setMovies]=useState([
    {
        name:'Harry Potter',
        price:'R$ 10',
        id:23124
    },
    {
        name:'Game of Thrones',
        price:'R$ 10',
        id:2566124
    },
    {
        name:'Inception',
        price:'R$ 10',
        id:23524
    },
])
  return (
    <div className="App">
      <Nav></Nav>
      <MovieList></MovieList>
    </div>
  );
}

export default App;
