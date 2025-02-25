import { Route,  createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'
import Error404 from './pages/Error404'
import Github, { githubInfoLoader } from './components/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/:userId" element={<User />} />
    <Route path="github" element={<Github />} loader={githubInfoLoader} />
    <Route path="*" element={<Error404 />}  />
  </Route>
));

export default router;
