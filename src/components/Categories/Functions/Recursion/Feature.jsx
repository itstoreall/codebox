import { useState, useContext } from 'react';
import Context from '../../../../Context';
import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import Recursion from './Recursion';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `See in the console how recursion works`;
  const [tree, setTree] = useState([]);
  const { views } = useContext(Context);

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <Recursion views={views} tree={tree} setTree={setTree} />
      </div>
    </App>
  );
};

export default withRouter(Feature);
