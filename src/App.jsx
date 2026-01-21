import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Technology from './components/Technology';
import Specifications from './components/Specifications';
import BuyPage from './components/BuyPage';
import PreOrderPage from './components/PreOrderPage';

export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />

      <Route
        path="/technology"
        element={
          <Layout>
            <Technology />
          </Layout>
        }
      />

      <Route
        path="/specs"
        element={
          <Layout>
            <Specifications />
          </Layout>
        }
      />

      <Route
        path="/buy"
        element={
          <Layout>
            <BuyPage />
          </Layout>
        }
      />

      <Route
        path="/pre-order"
        element={
          <Layout>
            <PreOrderPage/>
          </Layout>
        }
      />
    </Routes>
    </>
  );
}
