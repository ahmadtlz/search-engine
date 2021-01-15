import styled from 'styled-components';

const InputStyle = styled.input`
  font-size: 18px;
  width: 20em;
  background: #fff;
  color: #3b3b3b;
  box-shadow: 0 0.3em 0.75em 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 1em 0.75em;
`;
export interface TextInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}
const Input: React.FC<TextInputProps> = ({
  onChange,
  placeholder,
  value,
}: TextInputProps) => (
  <InputStyle
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    required
    autoComplete='off'
  />
);

export default Input;
