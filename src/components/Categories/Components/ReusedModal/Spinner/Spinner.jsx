import { SpinnerIcon } from './Spinner.styles';
import Circle from './Circle';

const Spinner = ({ size, stroke = 'white', strokeWidth = 1, ...rest }) => {
  return (
    <SpinnerIcon
      // xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      fill="none"
      size={size}
      stroke={stroke}
      {...rest}
    >
      <Circle stroke={stroke} strokeWidth={strokeWidth} />
    </SpinnerIcon>
  );
};

export default Spinner;
