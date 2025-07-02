import './App.css';
import { MainLayout } from '../shared/MainLayout.tsx';
import { PostList } from '../widgets';
import { defaultPostsData } from '../widgets/PostList/constants.ts';
import { useTheme } from '../shared/lib/theme/useTheme.ts';
import { useEffect } from 'react';

function App() {
  const { theme } = useTheme();

  const currentTheme = theme === 'dark' ? 'darkTheme' : 'lightTheme';

  useEffect(() => {
    document.body.className = currentTheme;
  }, [currentTheme]);

  return (
    <MainLayout>
      <PostList posts={defaultPostsData} />
    </MainLayout>
  );
}

export default App;
