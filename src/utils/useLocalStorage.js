import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) { // функция для получения значения из localstorage
// при запуске принимать ключ, по которому берем значение из localstorage, дефолтное значение на случай если не будет в storage значения
	const saved = localStorage.getItem(key); // получаем значение по ключу
	const initial = JSON.parse(saved); // переводим полученное значение в JSON формат
	return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => { // сработает при старте компонента и при изменении значений
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
