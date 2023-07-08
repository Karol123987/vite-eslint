import './App.css';
import { ReactTypes } from './ReactTypes';

function App() {
  //GENERICS:
  //https://www.typescriptlang.org/docs/handbook/2/generics.html

  //bez generyków:
  // function printData(data: number | string | boolean) {
  //   console.log(data, 'data');
  // }

  function printData<T>(data: T) {
    console.log(data, 'data');
  }

  printData(2);

  printData('hello');

  printData(true);

  function makePair<T>(first: T, second: T): [T, T] {
    return [first, second];
  }

  const numberPair = makePair<number>(1, 2);
  console.log(numberPair);

  const stringPair = makePair<string>('hello', 'world');
  console.log(stringPair, 'stringPair');

  //----------------------------------------------------------------------------------------------------------

  // UTILITY TYPES:
  //https://www.typescriptlang.org/docs/handbook/utility-types.html

  //Partial
  //Partial<Type> - tworzy nowy typ który zawiera wszystkie właściwości orginalnego type, ale oznacza je jako opcjonalne (null lub undifined są dozwolone)

  interface Person {
    name: string;
    age: number;
  }
  type PartialPerson = Partial<Person>;

  const partialPerson: PartialPerson = {};
  partialPerson.name = 'John';
  partialPerson.age = 18;
  //----------------------------------------------------------------------------------------------------------
  //Readonly
  //Readonly<Type> - tworzy typ, który zawiera te same właściwości co orginalny typ, ale oznacza je jako tylko do odczytu, nie można ich zmieniać

  interface Config {
    apiKey: string;
    andpoint: string;
  }

  type ReadonlyConfig = Readonly<Config>;

  const config: ReadonlyConfig = {
    apiKey: '1234abc',
    andpoint: 'https://example.com/',
  };

  console.log(config);
  // config.apiKey = 'asasdasd';  //nie można zmieniać

  //----------------------------------------------------------------------------------------------------------

  //Pick
  //Readonly<Type> - tworzy nowy typ, który zawiera tylko wybrane właściwości orginalnego typu

  interface PersonWithAddress {
    name: string;
    age: number;
    address: string;
  }

  type PersonWithoutAddress = Pick<PersonWithAddress, 'name' | 'age'>;

  const person: PersonWithoutAddress = {
    name: 'John',
    age: 26,
  };

  person.name = 'John';
  // person.address = 12 Abc, LU; //błąd - adres nie istnieje

  //----------------------------------------------------------------------------------------------------------

  //Omit
  //Omit<Type> - tworzy nowy type, który zawiera wszystkie właściwości orginalnego typu, z wyjątkiem wybranych właściwości

  type PersonWithoutAddress_v2 = Omit<PersonWithAddress, 'address'>;

  const person_v2: PersonWithoutAddress_v2 = {
    name: 'John',
    age: 26,
  };

  console.log(person_v2);

  //----------------------------------------------------------------------------------------------------------

  // any vs unknown
  // any: https://dmitripavlutin.com/typescript-unknown-vs-any/

  // any:
  //- najbardziej elastycxzny typ w TS, oznacza, że zmienna może mieć dowolny typ i można na niej wykonać dowolne operacje bez żadnych ostrzeżeń
  // - pomija statyczną kontrolę typów TS, nie sotaniemy infomracji o typach i nie ma sprawdzenia poprawności typów
  // - jest przydatne, gdy pracujemy z kodem, który nie ma jednoznaznie określonych typów lub kiedy chcemy zignorować ostrzeżenia

  // unknown:
  // - bezpieczniejszy niż typ 'any' -  oznacza, że zmienna może mieć wartość dowolnego typu, ale nie możemy na niej wykonać dowolnych operacji, dopóki nie sprawdzimy i zweryfikujemy
  // - wymusza statyczną kontrolę typów - musimy przeprowadzić sprawdzenie typu lub rzutowanie
  // - przydatne gdy otrzymujemy wartość o niezmiennym typie i chcemy ją bezpiecznie manipulować zachowując kontrolę typów

  // dlaczego unknown jest lepsze?
  // - wymusza statyczną kontrolę typów
  // - zmusza programistów do bardziej świadomego i bezpiecznego manipulowania wartościami o nieznanym typie
  // - pozwala na zachowanie kontroli typów, co prowadzi do bardziej niezawodnego kodu

  // dlaczego any lepsze?
  // - nie wymaga sprawdzenia typów ani rzutowania ale może prowadzić do trudno wykrywalnych błędów

  // let valueAny: any;
  // valueAny = 123;
  // valueAny = 'hello';
  // valueAny.someFunction(); //dozwolone dla any

  let valueUnknown: unknown;
  valueUnknown = 123;
  valueUnknown = 'hello';
  // valueUnknown.someFunction(); //niedozwolone przy unknown

  // console.log(valueAny);
  console.log(valueUnknown);

  //----------------------------------------------------------------------------------------------------------

  // Promise
  // type Promise - reprezentuje wartość, która może być dostępna w przyszłości

  // then/Promise

  function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = 'Przykładowe dane z zadania';
        resolve(data);
        reject(console.log('BŁĄD'));
      }, 2000);
    });
  }

  fetchData().then((data) => console.log('otrzymane data', data));

  // async/await

  interface User {
    id: string;
    name: string;
    email: string;
  }

  async function fetchUser(): Promise<User> {
    const response = await fetch('https://api.example.con/user');
    const data = await response.json();

    return data as User; //rzutowanie type na interface User
  }

  fetchUser().then((user) => console.log('Otrzymany user', user));

  //----------------------------------------------------------------------------------------------------------

  return (
    <>
      <div>
        <ReactTypes />
      </div>
    </>
  );
}

export default App;
