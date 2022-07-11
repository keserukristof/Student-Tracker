import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home';
import StudentManager from './pages/StudentManager'
import ClassManager from './pages/ClassManager'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="student-manager" element={<StudentManager />} />
        <Route path="class-manager" element={<ClassManager />} />
      </Routes>
    </Router>
  );
}

export default App;
