import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Landing from './pages/Landing';
import Men from './pages/Men';
import Women from './pages/Women';
import Settings from './pages/Settings';
import Routes from './components/Routes'


function App() {
  return (
      <div style={styles.container}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Landing />} />  
          <Route path='/Men' element={<Men />} />
          <Route path='/Women' element={<Women />} />
          <Route path='/' element={<Settings />} /> 
        </Routes>
      </div>
    );
  }
export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    border: '1px solid red'
  }
}
