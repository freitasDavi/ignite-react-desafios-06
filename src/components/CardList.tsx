import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();
  // TODO SELECTED IMAGE URL STATE
  const [urlImg, setUrlImg] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string): void {
    setUrlImg(url);
    onOpen();
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing={10}>
        {cards.map(data => (
          <Card
            key={data.id}
            viewImage={() => handleViewImage(data.url)}
            data={data}
          />
        ))}
      </SimpleGrid>
      {/* TODO MODALVIEWIMAGE */}
      {urlImg && (
        <ModalViewImage isOpen={isOpen} imgUrl={urlImg} onClose={onClose} />
      )}
    </>
  );
}
