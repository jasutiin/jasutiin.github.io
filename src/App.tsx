import MainLayout from './components/MainLayout/MainLayout';
import MenuBar from './components/MenuBar/MenuBar';

function App() {
  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <MenuBar />
      <MainLayout />
    </div>
  );
}

export default App;
