import { SpinnerIcon } from './Spinner.styles';
import Circle from './Circle';

const Spinner = ({ size, stroke = '#fff', strokeWidth = 1, ...rest }) => {
  return (
    <SpinnerIcon
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
      size={size}
      stroke={stroke}
      {...rest}
    >
      <Circle strokeWidth={strokeWidth} />
    </SpinnerIcon>
  );
};

export default Spinner;
