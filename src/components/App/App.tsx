import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
