import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Products from './components/Products';
import Login from './components/Login';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/Contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/About',
        exact: false,
        main: () => <About />
    },
    {
        path: '/Products',
        exact: false,
        main: ({ match, location }) => <Products match={match} location={location} />
    },
    {
        path: '/Login',
        exact: false,
        main: ({ location }) => <Login location={location} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;