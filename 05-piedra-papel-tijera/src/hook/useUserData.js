import { useState, useEffect } from 'react';

export function useUserData(userId) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const usersDataFromLocalStorage = JSON.parse(localStorage.getItem('usersData'));

    if (usersDataFromLocalStorage) {
      const userData = usersDataFromLocalStorage.find(user => user.Id === userId);
      setUserData(userData);
    }
  }, [userId]);

  const saveUserDataToLocalStorage = (data) => {
    const usersDataFromLocalStorage = JSON.parse(localStorage.getItem('usersData')) || [];
    const updatedUsersData = [...usersDataFromLocalStorage.filter(user => user.Id !== data.id), data];
    localStorage.setItem('usersData', JSON.stringify(updatedUsersData));
    setUserData(data);
  };

  return [userData, saveUserDataToLocalStorage];
}