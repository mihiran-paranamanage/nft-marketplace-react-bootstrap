import React from 'react'
import {BrowserRouter} from 'react-router-dom'

import './App.scss';

import {AppRoutes} from './AppRoutes'
import {NavBar} from './components/shared/navbar/NavBar'
import {Layout} from './components/shared/Layout/Layout'
import {AppContextProvider} from './context/app-context';
import {Footer} from './components/shared/footer/Footer';

export const App: React.FC = () => {
  return (
      <BrowserRouter>
        <AppContextProvider>
          <NavBar/>
          <Layout>
            <AppRoutes/>
          </Layout>
          <Footer/>
        </AppContextProvider>
      </BrowserRouter>
  )
}
