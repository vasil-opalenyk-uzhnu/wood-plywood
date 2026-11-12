import { useInitializeApp } from './init/useInitializeApp.js';
import { AppRouter } from './providers/router/AppRouter';

function App() {
  useInitializeApp();

  return <AppRouter />;
}

export default App;
