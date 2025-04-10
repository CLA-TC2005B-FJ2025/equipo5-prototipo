import { useState } from 'react';
import SignIn from './Paginas/SignIn';
import BuscaDepartamento from './Paginas/BuscaDepartamento';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      {isLoggedIn
        ? <BuscaDepartamento />
        : <SignIn onLogin={() => setIsLoggedIn(true)} />}
    </main>
  );
}
