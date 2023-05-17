import { useEffect, useState } from "react";
import { USUARIO } from "../logit/const";

export function InputDateModal({ handelUserName, modalOn, cerrarModal, addUser }) {
  const [dateSaved, setDateSaved] = useState(() => {
    const dateUsers = localStorage.getItem('usuarios');
    return dateUsers ? JSON.parse(dateUsers) : null;
  })
  const nombresUsuariosGuardados = dateSaved.map(e => e.Nombre)

  useEffect(() => {
    console.log("🚀 ~ file: InputDateModal.jsx:9 ~ const[dateSaved,setDateSaved]=useState ~ dateSaved:", dateSaved
    )
  }, [dateSaved])
  // pedir el nombre de usario 
  const [nameUser, setNameUser] = useState('');

  //recojer los datos introducidos
  function handelOnChange(e) {
    setNameUser(e.target.value);

  }

  //validar el campo del input
  const validity = () => {
    if (nameUser != '') {
      return nameUser.length >= 3 ? false : true;
    }

  }
  //madar el nombrea al componente padre y cerrar la modal
  const handelClick = () => {
    if (nombresUsuariosGuardados.includes(nameUser)) {

      console.log('ese usuario ya esta guardado')
    } else {
      const userNew = new USUARIO(nameUser);
      addUser(userNew)
    }



    handelUserName(nameUser);
    cerrarModal();

  }


  return (
    <>
      {modalOn && (
        <div className='modal'>
          <form className='form-modal' onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              minLength='3'
              placeholder='Nombre'
              name='nombreUsuario'
              required=' '
              autoComplete='off'
              onChange={handelOnChange}
              className={validity ? 'input-text' : 'input-text-error'}
            />
            <input
              type='submit'
              value='OK'
              onClick={handelClick}
              disabled={validity()}
              className='input-submit' />
          </form >
        </div >
      )
      }
    </>
  )
}
