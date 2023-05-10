import { imgSrc } from "../logit/const.js"

export function Display({ estado, className }) {
  return (
    <section className='contenedor'>
      <h3>{className}</h3>
      <div className='display-contenedor'>
        {<img src={imgSrc[estado]} className='imagen-opciones' />}
      </div>
    </section>
  )
}