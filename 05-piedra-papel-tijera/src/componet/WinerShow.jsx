import { Display } from "./Display";


export function WinerShow({
  estadoModal,
  restGameAndSaveDate,
  winer,
  pantalla,
  pantallaBot,
  user }) {

  return (
    <>
      {estadoModal && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>{winer}</h2>
            <div>
              <Display className={user != null ? user : 'user'} estado={pantalla}>{pantalla}</Display>
              <Display className='bot' estado={pantallaBot}>{pantallaBot}</Display>
            </div>
            <div className='modal-buttons'>
              <button onClick={restGameAndSaveDate}>Reiniciar</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
