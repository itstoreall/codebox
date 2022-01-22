import { Routes } from '../../../Routes/Routes';
import { withRouter } from 'react-router-dom';
import Container from '../../Container';

const Main = () => {
  return (
    <main className="main">
      <Container>
        {/* <button tyoe="button" onClick={() => props.history.push('/')}>
          Go back
        </button> */}
        {Routes()}
      </Container>
    </main>
  );
};

export default withRouter(Main);
