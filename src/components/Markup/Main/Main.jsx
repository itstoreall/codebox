import ViewsRoutes from '../../../Routes/ViewsRoutes';
import { withRouter } from 'react-router-dom';
import Container from '../../Container';

const Main = () => {
  return (
    <main className="main">
      <Container>{ViewsRoutes()}</Container>
    </main>
  );
};

export default withRouter(Main);
