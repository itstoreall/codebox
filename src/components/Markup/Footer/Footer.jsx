import s from './Footer.module.scss';
import { FooterContainer } from '../Container/CustomContainers';

const Footer = () => {
  return (
    <div className={s.Footer}>
      <FooterContainer>
        <div className={s.Footer__cotyrightWrap}>
          <span className={s.Footer__cotyright}>
            codebox &copy;{' '}
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
