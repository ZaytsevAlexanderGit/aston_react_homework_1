import './App.css';
import { ErrorBoundary } from '../features/error-boundary/ErrorBoundary.tsx';
import { MainLayout } from '../shared/MainLayout.tsx';
import { PostList } from '../widgets';

function App() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <PostList />
      </MainLayout>
    </ErrorBoundary>
  );
}

export default App;
