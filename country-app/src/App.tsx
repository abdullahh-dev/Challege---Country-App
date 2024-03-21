import './App.css';
import Background from './components/Background';
import Card from './components/Card';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Background />
        <Card />
      </QueryClientProvider>
    </>
  );
}

export default App;
