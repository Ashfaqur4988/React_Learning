import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import Cats from "./components/Cats";

//create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <h1>React Query</h1>
      {/* provide the client to your app */}
      <QueryClientProvider client={queryClient}>
        <Cats />
      </QueryClientProvider>
    </>
  );
}

export default App;
