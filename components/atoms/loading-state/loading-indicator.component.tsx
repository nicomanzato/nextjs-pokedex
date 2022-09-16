import { useLoading } from 'hooks/useLoading';
import Image from 'next/image';

import { Container } from './loading-indicator-component';

export default function LoadingIndicator() {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && (
        <Container>
          <Image src={'/PokeBall.svg'} width="100" height="100" />
        </Container>
      )}
    </>
  );
}
