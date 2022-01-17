import { useState } from 'react';
import CategorySection from '../../../Markup/Sections/CategorySection';
import {
  Wrapper,
  BlockBasic,
  BlockReferal,
  BlockVip,
  Btn,
} from './StyledComponents.styles';

// const { log } = console;

const StyledComponents = () => {
  const [account, setAccount] = useState(0);
  const [vip, setVip] = useState(0);

  const toggle = (acc, vip) => {
    setAccount(acc);
    setVip(vip);
  };

  return (
    <CategorySection>
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
    </CategorySection>
  );
};

export default StyledComponents;
