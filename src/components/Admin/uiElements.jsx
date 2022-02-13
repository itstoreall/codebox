import { Button, Input, CustomInput, CustomButton } from './uiElements.styles';
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

export const ModalInput = ({
  className = 'admin-modal-input',
  position,
  top = 0,
  right = 0,
  margin,
  padding,
  width,
  height,
  textAlign,
  color,
  whiteSpace,
  overflow,
  textOverflow,
  backgroundColor,
  border,
  outline,
  type = 'text',
  placeholder,
  value,
  onChange,
  children,
}) => (
  <CustomInput
    className={className}
    position={position}
    top={top}
    right={right}
    margin={margin}
    padding={padding}
    width={width}
    height={height}
    textAlign={textAlign}
    color={color}
    whiteSpace={whiteSpace}
    overflow={overflow}
    textOverflow={textOverflow}
    backgroundColor={backgroundColor}
    border={border}
    outline={outline}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {children}
  </CustomInput>
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

export const CardButton = ({
  className = 'admin-round-btn',
  position,
  top = 0,
  right = 0,
  display = 'flex',
  flexDirection,
  justifyContent = 'center',
  alignItems = 'center',
  padding,
  margin,
  width = '20px',
  height = '20px',
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
    margin={margin}
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

export const ModalButton = ({
  className = 'admin-round-btn',
  position,
  top = 0,
  right = 0,
  display,
  flexDirection,
  justifyContent = 'center',
  alignItems = 'center',
  padding = 0,
  margin,
  width,
  height,
  fontSize,
  color = 'white',
  whiteSpace = 'nowrap',
  borderRadius,
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
    margin={margin}
    width={width}
    height={height}
    fontSize={fontSize}
    color={color}
    whiteSpace={whiteSpace}
    borderRadius={borderRadius}
    type={type}
    onClick={onClick}
  >
    {children}
  </CustomButton>
);
