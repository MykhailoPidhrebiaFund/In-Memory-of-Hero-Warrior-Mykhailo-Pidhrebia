import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
