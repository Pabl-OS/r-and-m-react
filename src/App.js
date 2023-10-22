
import './App.css';
import { Header } from './components/Header';
import { AppRouter } from './router/AppRouter';

function App() {
  return (
    <>
      <Header />
      
      <div className='container mx-auto p-5'>
          <AppRouter />
      </div>
    </>
  );
}

export default App;
