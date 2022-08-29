import './App.css';
import Characters from './components/Characters';
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
