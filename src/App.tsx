// App.tsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { useMeasureTransition } from './hooks/useMeasureTransition';
import { PerformanceGraph } from './components/PerformanceGraph';

// Lazy loaded pages
const HomeScreen = lazy(() => import('./page/Home/Home'));
const ProductScreen = lazy(() => import('./page/Product'));
const CheckoutScreen = lazy(() => import('./page/CheckOut'));

const Loader = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
);

const AppRoutes = () => {
  useMeasureTransition();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/checkout/:id" element={<CheckoutScreen />} />
      </Routes>
    </Suspense>
  );
};

function App() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <Router>
          <AppRoutes />
          <PerformanceGraph />
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  );
}

export default App;
