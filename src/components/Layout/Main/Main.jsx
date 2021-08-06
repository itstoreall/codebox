import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '../../Container';
import HomeView from '../../../views/HomeView';
import LayoutView from '../../../views/LayoutView';
import FunctionView from '../../../views/FunctionView';
import HookView from '../../../views/HookView';

const Main = () => {
  return (
    <main className="main">
      <Container>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/markup" component={LayoutView} />
          <Route path="/functions" component={FunctionView} />
          <Route path="/hooks" component={HookView} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </main>
  );
};

export default Main;
