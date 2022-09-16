import { ButtonComponent, Container } from './button.styles';

export const Button = ({ ...props }) => {
  return (
    <Container>
      <ButtonComponent {...props}></ButtonComponent>
    </Container>
  );
};
