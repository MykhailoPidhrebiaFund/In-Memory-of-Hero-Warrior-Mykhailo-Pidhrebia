import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <p>Navbar</p>

      <main>
        <p>Content</p>


        
        <Outlet />
      </main>

      <p>Footer</p>
    </>
  );
}

export default App
