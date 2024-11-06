import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="mx-3 bg-gradient body-bg">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App;
