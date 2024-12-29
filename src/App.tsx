import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom';

import MenuBar from './components/MenuBar/MenuBar';
import ActivityBar from './components/ActivityBar/ActivityBar';
import Explorer from './components/Explorer/Explorer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';

import styles from './styles/main.module.scss';
import EditorTabs from './components/EditorTabs/EditorTabs';

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '*', element: <Home /> },
    ],
  },
]);

function Layout() {
  return (
    <div>
      <MenuBar />
      <div className={styles.mainLayout}>
        <ActivityBar />
        <Explorer />
        <div className={styles.editorContainer}>
          <EditorTabs />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
