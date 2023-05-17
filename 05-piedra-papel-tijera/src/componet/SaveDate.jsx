import { useUserData } from '../hook/useUserData';

function SaveDate({ userId }) {
  const [userData, saveUserDataToLocalStorage] = useUserData(userId);

  useEffect(() => {
    const data = { Id: userId, Nombre: 'Juan', Partidas: 10, Ganadas: 4, Perdidas: 2, Empates: 4 };
    saveUserDataToLocalStorage(data);
  }, [saveUserDataToLocalStorage, userId]);

  if (!userData) {
    return <div>Cargando datos del usuario...</div>;
  }

  return (
    <div>
      <h1>{userData.nombre}</h1>
      <p>Total de partidas: {userData.totalPartidas}</p>
      <p>Partidas ganadas: {userData.ganadas}</p>
      <p>Partidas perdidas: {userData.perdidas}</p>
      <p>Partidas empatadas: {userData.empates}</p>
    </div>
  );
}