import './App.css';
import { Route } from 'wouter';
import Home from './components/Home';
import InfoArtist from './components/InfoArtist';

function App() {

  return (
    <div className="container-sm gradient min-h-screen">
      <Route path='/' component={Home} />
      <Route path="/artist/:id" component={InfoArtist} />
    </div>
  );
}

export default App;