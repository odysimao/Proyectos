import './App.css'

const API = `http://www.omdbapi.com/?i=tt3896198&apikey=d58e6812&=${''}`

function App() {

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
        Aki van las peliculas
      </main>
    </div>
  )
}

export default App
