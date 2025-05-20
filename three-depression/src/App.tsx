import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './login';
import { RegisterPage } from './register';
import { HomePage } from './home';
import { ResultPage } from './empathy_test/result';
import { AdminPage } from './admin';
import { EditPage } from './scenarios/edit';
import { TestPage } from './empathy_test/test';
import { HistoryPage } from './histories';
import { ComunicationPage } from './communication';
import { DetailPage } from './scenarios/detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/test' element={<TestPage />} />
      <Route path='/result' element={<ResultPage />} />
      <Route path='/history' element={<HistoryPage />} />
      <Route path='/communication' element={<ComunicationPage />} />
      <Route path='/scenarios/edit' element={<EditPage />} />
      <Route path='/scenarios/detail' element={<DetailPage />} />
    </Routes>
  );
}

export default App;
