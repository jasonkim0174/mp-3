import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Project from './pages/Projects';
import References from './pages/References';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Header />
      <div className="layout-container">
        <Navigation />
        <div className="content-container">
          <RouterProvider router={router} />
        </div>
      </div>
      <Footer />
    </>
  );
}



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/education',
    element: <Education />,
  },
  {
    path: '/experiences',
    element: <Experiences />,
  },
  {
    path: '/project',
    element: <Project />,
  },
  {
    path: '/references',
    element: <References />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
]);


export default App;
