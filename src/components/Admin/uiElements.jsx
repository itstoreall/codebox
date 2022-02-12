import { Button, Input, CustomButton } from './uiElements.styles';
import refs from '../../styles/refs';

export const PrimaryInput = ({
  className = 'admin-primary-input',
  position,
  top = 0,
  right = 0,
  margin,
  padding = '9px 9px',
  width,
  textAlign,
  color = refs.primaryBlackColor75,
  type = 'text',
  placeholder,
  value,
  onChange,
  children,
}) => (
  <Input
    className={className}
    position={position}
    top={top}
    right={right}
    margin={margin}
    padding={padding}
    width={width}
    textAlign={textAlign}
    color={color}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {children}
  </Input>
);

export const PrimaryButton = ({
  className = 'admin-primary-btn',
  position,
  top = 0,
  right = 0,
  display,
  padding = '10px 20px',
  margin,
  width,
  color = 'white',
  whiteSpace = 'nowrap',
  type = 'button',
  onClick,
  children,
}) => (
  <Button
    className={className}
    position={position}
    top={top}
    right={right}
    display={display}
    padding={padding}
    margin={margin}
    width={width}
    color={color}
    whiteSpace={whiteSpace}
    type={type}
    onClick={onClick}
  >
    {children}
  </Button>
);

export const RoundButton = ({
  className = 'admin-round-btn',
  position,
  top = 0,
  right = 0,
  display = 'flex',
  flexDirection,
  justifyContent = 'center',
  alignItems = 'center',
  padding,
  width = '15px',
  height = '15px',
  color = 'white',
  whiteSpace = 'nowrap',
  borderRadius = '50%',
  type = 'button',
  onClick,
  children,
}) => (
  <CustomButton
    className={className}
    position={position}
    top={top}
    right={right}
    display={display}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
    padding={padding}
    width={width}
    height={height}
    color={color}
    whiteSpace={whiteSpace}
    borderRadius={borderRadius}
    type={type}
    onClick={onClick}
  >
    {children}
  </CustomButton>
);
