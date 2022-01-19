import NavPanelLinks from './NavPanelLinks';
import { Switch, Route } from 'react-router-dom';
import StyledComponents from '../../components/Categories/Layout/StyledComponents';
import DnD from '../../components/Categories/Components/DnD';
import Free from '../../components/Categories/Components/Free';
import Closures from '../../components/Categories/Functions/Closures';
import UseState from '../../components/Categories/Hooks/UseState';

const NavPanelRoutes = ({ viewTitle }) => {
  return (
    <>
      <Switch>
        <Route path="/layout/styled-components" component={StyledComponents} />
        <Route path="/components/dnd" component={DnD} />
        <Route path="/components/free" component={Free} />
        <Route path="/functions/closures" component={Closures} />
        <Route path="/hooks/usestate" component={UseState} />
      </Switch>
    </>
  );
};

export default NavPanelRoutes;
