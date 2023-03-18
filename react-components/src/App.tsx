import './App.css';
import { Component } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main';
import AboutPage from './pages/about-us';
import NotFoundPage from './pages/404';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
