import './App.css'
import respuestasAPI from '../public/respuestaAPI.json'
import noRespustasAPI from '../public/no-respuestaAPI.json'

const API = `http://www.omdbapi.com/?i=tt3896198&apikey=d58e6812&=${''}`

function App() {
  const movies = respuestasAPI.Search;
  const hasMovis = movies?.length > 0

  return (
    <div className='page'>
      <header>
        <h3>Buscador de Peliculas</h3>
        <form className='form'>
          <input name='input-for-shearh' placeholder='Avatar, Matrix, Super M..' />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovis
            ? (
              <ul>
                {
                  movies.map(movie => (
                    <li key={movie.imdbID}>
                      <h3>{movie.Title}</h3>
                      <a>{movie.Year}</a>
                      <img src={movie.Poster} alt={movie.Type} />
                    </li>
                  ))
                }
              </ul>
            )
            : (<p>no se encontraron filmes</p>)
        }
      </main>
    </div>
  )
}

export default App
