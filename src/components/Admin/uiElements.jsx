import { PrimaryInput, SecondaryInput, CustomBtn } from './uiElements.styles';
// import refs from '../../styles/refs';

export const CustomInput = ({
  className = 'admin-custom-modal-input',
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
  borderRadius,
  outline,
  type = 'text',
  placeholder,
  value,
  onChange,
  children,
}) => (
  <PrimaryInput
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
    borderRadius={borderRadius}
    outline={outline}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {children}
  </PrimaryInput>
);

export const CardModalInput = ({
  className = 'admin-card-modal-input',
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
  borderRadius,
  outline,
  type = 'text',
  placeholder,
  value,
  onChange,
  children,
}) => (
  <SecondaryInput
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
    borderRadius={borderRadius}
    outline={outline}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {children}
  </SecondaryInput>
);

export const CustomButton = ({
  className = 'admin-custom-btn',
  position,
  top = 0,
  right = 0,
  display = 'flex',
  flexDirection,
  justifyContent = 'center',
  alignItems = 'center',
  padding,
  margin,
  width,
  height,
  fontSize,
  color = 'white',
  whiteSpace = 'nowrap',
  borderRadius,
  transform,
  type = 'button',
  onClick,
  children,
}) => (
  <CustomBtn
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
    fontSize={fontSize}
    whiteSpace={whiteSpace}
    borderRadius={borderRadius}
    transform={transform}
    type={type}
    onClick={onClick}
  >
    {children}
  </CustomBtn>
);
