import './App.css';
import { ErrorBoundary } from '../features/error-boundary/ErrorBoundary.tsx';
import { MainLayout } from '../shared/MainLayout.tsx';
import { PostList } from '../widgets';
import { defaultPostsData } from '../widgets/PostList/constants.ts';

function App() {
  return (
    <ErrorBoundary>
      <MainLayout>
        <PostList posts={defaultPostsData} />
      </MainLayout>
    </ErrorBoundary>
  );
}

export default App;
