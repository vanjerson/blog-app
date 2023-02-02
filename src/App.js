import {Routes, Route, Link} from 'react-router-dom'
import Main from './Components/Pages/Main';
import About from './Components/Pages/About'
import NotFound from './Components/Pages/NotFound'
import './Components/Css/landing.css'
import Projects from './Components/Pages/Projects';
import ViewProject from './Components/Pages/Project';
import MainLayout from './Components/Pages/MainLayout';
import StoryLayout from './Components/Pages/Layout/StoryLayout';
import StoryMain from './Components/Pages/story/StoryMain';

function App() {
  return (
    <>

    
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project/:id' element={<ViewProject/>}/>
        </Route>
        <Route element={<StoryLayout/>}>
        <Route path='/story' element={<StoryMain/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      

    </>
  );
}

export default App;
