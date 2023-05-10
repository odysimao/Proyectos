import { useState } from "react";
import { SAVEDATE } from "../logit/const";

export function LoginModal({ handelUserName, modalOn, cerrarModal, addUser }) {
  // pedir el nombre de usario 
  const [nameUser, setNameUser] = useState(null);
  //recojer los datos introducidos
  function handelOnChange(e) {
    setNameUser(e.target.value);
  }
  //validar el campo del input
  const validity = () => {
    if (nameUser != null) {
      return nameUser.length > 4 ? false : true;
    }
  }
  //madar el nombrea al componente padre y cerrar la modal
  const handelClick = () => {
    const userNew = new SAVEDATE(nameUser)
    addUser(userNew)
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
