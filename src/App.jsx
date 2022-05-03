import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CharacterDetail from './views/CharacterDetail';
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <CharacterList />
        </Route>
        <Route path="/character/:id">
          <CharacterDetail />
        </Route>
      </Switch>
    </>
  );
}
