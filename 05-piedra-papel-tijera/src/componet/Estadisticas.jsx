
export function Estadisticas({ user }) {

  return (
    <>
      <section className='estadisticas'>
        <table className='tabla-estadisticas'>
          <tr className='filas'>
            <td><strong>Nombre</strong></td>
            <td><strong>Partidas</strong></td>
            <td><strong>Ganadas</strong></td>
            <td><strong>Empates</strong></td>
            <td><strong>Perdidas</strong></td>
          </tr>
          <tr className='filas'>
            <td>{user}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </section >
    </>
  )
}