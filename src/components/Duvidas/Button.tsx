import { memo, PropsWithChildren } from 'react';
import { VscTriangleRight } from 'react-icons/vsc';

import { useCard } from '@/hooks';

import { duvidas } from '../../data/duvidasModels';

import { Button as StyledButton } from './styles';

type Props = {
  index: number;
};

const Button = memo(({ index, children }: PropsWithChildren<Props>) => {
  const { setCard, card } = useCard();

  const showCard = duvidas[index];
  const isOpacity = card === showCard;

  return (
    <StyledButton opacity={isOpacity} onClick={() => setCard(showCard)}>
      <VscTriangleRight size={14} /> {children}
    </StyledButton>
  );
});

export { Button };
export type { Props as ButtonProps };
