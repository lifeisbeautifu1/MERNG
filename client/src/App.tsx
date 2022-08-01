import { Routes, Route } from 'react-router-dom';
import { Home, NotFound, Project } from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SharedLayout } from './components';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ApolloProvider>
  );
}

export default App;
