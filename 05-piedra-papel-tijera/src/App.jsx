import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { ButtonUser } from './componet/ButtonUser'
import { WinerShow } from './componet/WinerShow'
import { WINER, opciones, min, max } from './logit/const.js'
import './App.css'
import { LoginModal } from './componet/LoginModal'
import { Estadisticas } from './componet/Estadisticas'

var usuarios = [];

function App() {
  //estados
  const [pantalla, setPantalla] = useState(null);
  const [pantallaBot, setPantallaBot] = useState(null);
  const [winer, setWiner] = useState(WINER.null)
  const [modalWiner, setModalWiner] = useState(false);
  const [user, setUser] = useState('')
  const [modalOn, setModalOn] = useState(true);


  const addUser = (nuevoValor) => {
    usuarios.push(nuevoValor)
  }

  //cerrar la modal del input
  const cerrarModal = () => setModalOn(!modalOn);
  //recojer el nombre
  const handelUserName = (newUserName) => {
    setUser(newUserName);
  }
  //abrir la modal y mostrar los resultados
  useEffect(() => {
    if (pantalla !== null) {
      setModalWiner(true);
    }
  }, [pantalla]);

  //reiniciar la aplicacion
  function handleRestartAndSaveData() {
    // localStorage.setItem('usuarios', JSON.stringify(usuarios));

    setPantalla(null);
    setPantallaBot(null);
    setWiner(WINER.null);
    setModalWiner(false);

  }

  //actulaizar los estados de las pantallas
  const updateDisplay = (id) => {
    //para sacar un numero random
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setPantallaBot(opciones[random]);
    setPantalla(id);
  }
  //comoprobar si hay ganador o empate! y mostrarlo
  useEffect(() => {
    if (
      (pantalla == 'papel' && pantallaBot == 'piedra') ||
      (pantalla == 'piedra' && pantallaBot == 'tijera') ||
      (pantalla == 'tijera' && pantallaBot == 'papel')) {
      console.log(winer)
      setWiner(WINER.Victoria)
      confetti()
    } else if (pantalla == pantallaBot) {
      console.log(winer)
      setWiner(WINER.Empate)
    } else {
      setWiner(WINER.Perdiste)
      console.log(winer)
    }
  }, [pantalla, pantallaBot, winer])

  //Guadar las estadisticas del juego
  // const [dateSaved, setDateSaved] = useState(() => {
  //   const dateUsers = localStorage.getItem('usuarios');
  //   return dateSaved ? JSON.parse(dateUsers) : null;
  // })





  return (
    <main className='app'>
      <LoginModal
        handelUserName={handelUserName}
        modalOn={modalOn}
        cerrarModal={cerrarModal}
        addUser={addUser} />
      <h1 className='tituloApp'>Piedra - Papel - Tijera</h1>

      <div className='baner-botones'>
        <ButtonUser id='piedra' updateDisplay={updateDisplay} img_name='piedra' />
        <ButtonUser id='papel' updateDisplay={updateDisplay} img_name='papel' />
        <ButtonUser id='tijera' updateDisplay={updateDisplay} img_name='tijera' />
      </div>
      <h2>{user}</h2>
      <button onClick={() => {
        console.log(usuarios)
        setModalOn(true);
      }}>cambiar jugador</button>
      <Estadisticas
        user={user}
      />
      <WinerShow
        estadoModal={modalWiner}
        restGameAndSaveDate={handleRestartAndSaveData}
        winer={winer}
        pantalla={pantalla}
        pantallaBot={pantallaBot}
        user={user}
      />
    </main>
  )
}

export default App

