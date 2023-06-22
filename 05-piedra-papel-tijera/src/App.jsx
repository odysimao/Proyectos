import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { ButtonUser } from './componet/ButtonUser'
import { WinerShow } from './componet/WinerShow'
import { WINER, opciones, min, max, USUARIO } from './logit/const.js'
import './App.css'
import { InputDateModal } from './componet/InputDateModal'
import { Estadisticas } from './componet/Estadisticas'
import { SaveDate } from './componet/SaveDate.jsx'


function App() {
  //estados
  const [pantalla, setPantalla] = useState(null);
  const [pantallaBot, setPantallaBot] = useState(null);
  const [winer, setWiner] = useState(WINER.null)
  const [modalWiner, setModalWiner] = useState(false);
  const [user, setUser] = useState('')
  const [modalOn, setModalOn] = useState(true);

  // //Guadar las estadisticas del juego
  // const [dateSaved, setDateSaved] = useState(() => {
  //   const dateUsers = localStorage.getItem('usuarios');
  //   return dateUsers ? JSON.parse(dateUsers) : null;
  // })
  // console.log("🚀 ~ file: App.jsx:53 ~ const[dateSaved,setDateSaved]=useState ~ dateSaved:", dateSaved)


  const addUser = (nuevoValor) => {
    nuevoValor;
  }

  //guardar las estadisticas de los usuarios
  const handleDate = () => {


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

      setWiner(WINER.Victoria)
      confetti()
    } else if (pantalla == pantallaBot) {
      setWiner(WINER.Empate)
    } else {
      setWiner(WINER.Perdiste)
    }
  }, [pantalla, pantallaBot, winer])


  return (
    <main className='app'>
      <InputDateModal
        handelUserName={handelUserName}
        modalOn={modalOn}
        cerrarModal={cerrarModal}
        addUser={addUser} />
      <h1 className='tituloApp'>Piedra - Papel - Tijera</h1>

      <div className='baner-botones'>
        <ButtonUser id='piedra' updateDisplay={updateDisplay} img_name='piedra' handleDate={handleDate} />
        <ButtonUser id='papel' updateDisplay={updateDisplay} img_name='papel' handleDate={handleDate} />
        <ButtonUser id='tijera' updateDisplay={updateDisplay} img_name='tijera' handleDate={handleDate} />
      </div>
      <h2>{user}</h2>
      <button onClick={() => {
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
      <SaveDate userId={user} />
    </main>
  )
}

export default App

