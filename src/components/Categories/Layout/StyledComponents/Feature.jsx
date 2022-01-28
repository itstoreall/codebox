import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import s from './Feature.module.scss';
import App from '../../../Markup/FeatureTemplate';
import {
  Wrapper,
  BlockBasic,
  BlockMiddle,
  BlockVip,
  Btn,
} from './StyledComponents.styles';

const Feature = ({ viewTitle, featureTitle, location }) => {
  const description = `Here is an example of using the Styled Components library.`;
  const [user, setUser] = useState(0);
  const [vip, setVip] = useState(0);

  // console.log('StyledComponents location --->', location);

  const toggle = (acc, vip) => {
    setUser(acc);
    setVip(vip);
  };

  return (
    <App
      viewTitle={viewTitle}
      featureTitle={featureTitle}
      description={description}
    >
      <div className={s.Feature}>
        <Wrapper>
          <BlockBasic>Basic</BlockBasic>
          {!user ? null : user && vip ? (
            <BlockVip>Vip</BlockVip>
          ) : (
            <BlockMiddle>Middle</BlockMiddle>
          )}
        </Wrapper>
        <Btn onClick={() => toggle(1, 0)}>Middle</Btn>
        <Btn onClick={() => toggle(1, 1)}>Vip</Btn>
      </div>
    </App>
  );
};

export default withRouter(Feature);
