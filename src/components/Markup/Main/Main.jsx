import { Switch, Route, Redirect } from 'react-router-dom';
import Container from '../../Container';
import HomeView from '../../../views/HomeView';
import LayoutView from '../../../views/LayoutView';
import FunctionView from '../../../views/FunctionView';

const Main = () => {
  return (
    <main className="main">
      <Container>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/layout" component={LayoutView} />
          <Route path="/functions" component={FunctionView} />
          <Route path="/functions2" component={FunctionView} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </main>
  );
};

export default Main;
