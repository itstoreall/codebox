import sprite from '../../../../../svg/sprite.svg';

const Circle = ({ strokeWidth }) => {
  return (
    <svg strokeWidth={strokeWidth}>
      <use href={sprite + '#icon-loader'}></use>
    </svg>
  );
};

export default Circle;

/*
<path
  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5"
  strokeWidth={strokeWidth}
  strokeLinecap="round"
  strokeLinejoin="round"
/>
*/
