import { useUserData } from '../hook/useUserData';
import { useEffect } from 'react';

export function SaveDate({ userId }) {
  const [userData, saveUserDataToLocalStorage] = useUserData(userId);

  useEffect(() => {
    const data = { Id: userId, Nombre: userId, Partidas: 10, Ganadas: 4, Perdidas: 2, Empates: 4 };
    saveUserDataToLocalStorage(data);
  }, [userId]);

  if (!userData) {
    return <div>Cargando datos del usuario...</div>;
  }

  return (
    <div>
      <h1>{userData.Nombre}</h1>
      <p>Total de partidas: {userData.Partidas}</p>
      <p>Partidas ganadas: {userData.Ganadas}</p>
      <p>Partidas perdidas: {userData.Perdidas}</p>
      <p>Partidas empatadas: {userData.Empates}</p>
    </div>
  );
}