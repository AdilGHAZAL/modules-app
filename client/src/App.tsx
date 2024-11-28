
import { Routes, Route } from 'react-router-dom';
import ModulesPage from './components/Pages/ModulesPage';
import RootLayout from './components/templates/RootLayout';
import LoginPage from './components/Pages/LoginPage';
import ModuleDetailsPage from './components/Pages/ModulesDetailsPage';
import NotFound from './components/Pages/NotFound';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="modules" element={<ModulesPage />} />
        <Route path="modules/:id" element={<ModuleDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
