import './App.css';
import { MainLayout } from '../shared/MainLayout.tsx';
import { PostList } from '../widgets';

function App() {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
}

export default App;
