import s from './Footer.module.scss';
import { FooterContainer } from '../Container/CustomContainers';
import sprite from '../../../svg/sprite.svg';

const Footer = () => {
  return (
    <div className={s.Footer}>
      <FooterContainer>
        <div className={s.Footer__cotyrightWrap}>
          <svg className={s.Footer__logoImg} width="22" height="22">
            <use href={sprite + '#icon-react-logo'}></use>
          </svg>

          <span className={s.Footer__cotyright}>
            <a href="/">codebox</a> &copy;{' '}
            <time className={s.Footer__cotyrightYear}>
              {new Date().getFullYear()}
            </time>
          </span>
        </div>
      </FooterContainer>
    </div>
  );
};

export default Footer;
