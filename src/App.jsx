import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CharacterDetail from './views/CharacterDetail';
import CharacterList from './views/CharacterList';
import './App.css';

export default function App() {
  return (
    <>
      <div className="background">
        <Switch>
          <Route path="/character/:id">
            <CharacterDetail />
          </Route>
          <Route path="/">
            <CharacterList />
          </Route>
        </Switch>
      </div>
    </>
  );
}
