import LoadingIndicator from 'components/atoms/loading-state/loading-indicator.component';

import { Container } from './page-layout.styles';

export const PageLayout = ({ children }: any) => {
  return (
    <Container>
      <LoadingIndicator />
      {children}
    </Container>
  );
};
