import { imgSrc } from '../logit/const.js'

export function ButtonUser({ id, img_name, updateDisplay, handleDate }) {
  const hadleClick = () => {
    updateDisplay(id);
    handleDate()
  }

  return (
    <>
      <div onClick={hadleClick} className='boton-escojer'>
        <img
          className='imagen-opciones'
          src={imgSrc[img_name]}
        />
      </div>
    </>
  )
}