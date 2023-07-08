// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [newText, setNewText] = useState<string>('');

  // FUNKCJA 1 - liczącą ilość znaków w stringu
  function countCharacters(someName: string): number {
    return someName.length;
  }

  console.log('Ilość znaków:', countCharacters(newText));

  //FUNKCJA 2 - czy liczba jest parzysta czy nie

  function isEven(someNumber: number): boolean {
    return someNumber % 2 === 0;
  }

  const numberOne = countCharacters(newText);
  console.log('Czy liczba jest parzysta', isEven(numberOne));

  //FUNKCJA 3 - boolean zwraca komunikat ta liczba jest parzysta/ta liczba nie jest parzysta

  function getParityMessage(isEven: boolean): string {
    return isEven ? 'Ta liczba jest parzysta' : 'Ta liczba nie jest parzysta';
  }

  const isNumberEven = isEven(numberOne);
  const message = getParityMessage(isNumberEven);
  console.log(message);

  //FUNKCJA 4 - na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje

  function processString(str?: string) {
    if (!str) {
      return 'Nie podano słowa';
    }
    const length = countCharacters(newText);
    const even = isEven(length);
    const message = getParityMessage(even);
    return `${str}-Liczba znaków: ${length}.${message}`;
  }

  const outputString = processString(newText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Wpisz nazwę"
          onChange={handleChange}
          value={newText}
        />
        <p>{outputString}</p>
      </div>
    </>
  );
}

export default App;
