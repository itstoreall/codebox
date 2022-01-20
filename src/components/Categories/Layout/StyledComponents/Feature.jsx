import { useState } from 'react';
import CategorySection from '../../../Markup/Sections/CategorySection';
import Content from './Content';
import SourcePanel from '../../../Markup/SourcePanel';
import s from './Feature.module.scss';
import {
  Wrapper,
  BlockBasic,
  BlockReferal,
  BlockVip,
  Btn,
} from './StyledComponents.styles';

const Feature = ({ viewTitle, featureTitle }) => {
  const [account, setAccount] = useState(0);
  const [vip, setVip] = useState(0);

  const toggle = (acc, vip) => {
    setAccount(acc);
    setVip(vip);
  };

  return (
    <CategorySection>
      <Content featureTitle={featureTitle}>
        <Wrapper>
          <BlockBasic>Basic</BlockBasic>
          {!account ? null : account && vip ? (
            <BlockVip>Vip</BlockVip>
          ) : (
            <BlockReferal>Referal</BlockReferal>
          )}
        </Wrapper>
        <Btn onClick={() => toggle(1, 0)}>Referal</Btn>
        <Btn onClick={() => toggle(1, 1)}>Vip</Btn>
      </Content>

      <SourcePanel viewTitle={viewTitle} featureTitle={featureTitle} />
    </CategorySection>
  );
};

export default Feature;
