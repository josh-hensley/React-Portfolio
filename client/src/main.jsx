import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.js';

import App from './App.jsx'
import AboutMe from './components/Content/AboutMe.jsx';
import Portfolio from './components/Content/Portfolio.jsx';
import Resume from './components/Content/Resume.jsx';
import Contact from './components/Content/Contact.jsx';

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                index: true,
                element: <AboutMe />
            },
            {
                path: "/resume",
                element: <Resume />
            },
            {
                path: "/portfolio",
                element: <Portfolio />
            },
            {
                path:"/contact",
                element: <Contact />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
