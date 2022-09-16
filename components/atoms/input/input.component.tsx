import { Container, ErrorMessage, InputComponent } from './input.styles';

interface InputProps {
  errors: any;
  name: string;
  register: any;
  disabled?: boolean;
  placeholder?: string;
  type: 'number' | 'text' | 'password';
}

export const Input = ({
  errors,
  name,
  register,
  type = 'text',
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <Container>
      <InputComponent
        type={type}
        disasbled={disabled}
        {...register(name)}
        {...props}
      />
      {errors[name] && errors[name].message && (
        <ErrorMessage>{String(errors[name].message)}</ErrorMessage>
      )}
    </Container>
  );
};
