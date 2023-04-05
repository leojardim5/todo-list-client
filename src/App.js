import Header from './components/Header';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Todolist from './pages/PageTodo/TodoList';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NotFound from './pages/NotFound';
import PageTodo from './pages/PageTodo/PageTodo';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
          <Main>
            <Routes>    
                <Route path='/' element={<PageTodo/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/about' element={<About />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
          </Main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
