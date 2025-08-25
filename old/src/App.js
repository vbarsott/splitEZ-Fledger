import './styles/css/styles.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GroupsContextProvider from './contexts/GroupsContext';

import Expenses from './components/Expenses';
import Header from './components/Header';
import Home from './components/Home';
import Groups from './components/Groups';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Result from './components/Result';

function App() {
  return (
    <>
      <div className='appWrapper'>
        <div className='container my-3'>
          <div className='border border-primary rounded-3'>
            <header>
              <Header />
            </header>

            <nav>
              <MainNav />
            </nav>

            <main>
              <GroupsContextProvider>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/groups' element={<Groups />} />
                  <Route path='/expenses' element={<Expenses />} />
                  <Route path='/result' element={<Result />} />
                </Routes>
              </GroupsContextProvider>
            </main>

            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
