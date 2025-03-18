import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import ThingPage from './pages/ThingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<ThingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
