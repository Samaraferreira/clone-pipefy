import React, { useRef, useContext } from 'react';
import { useDrag, useDrop, DragObjectWithType } from 'react-dnd';

import { Card as CardTypes } from '../../services/api';
import { BoardContext } from '../Board/context';

import { Container, Label } from './styles';

interface CardProps {
  data: CardTypes;
  index: number;
  listIndex: number;
}

interface ItemProps extends DragObjectWithType {
  index: number;
  listIndex: number;
}

const Card: React.FC<CardProps> = ({ listIndex, index, data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: 'CARD',
      index,
      listIndex,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: ItemProps, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      const targetSize = ref.current?.getBoundingClientRect();
      const targetCenter = (targetSize!.bottom - targetSize!.top) / 2 || 1;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset!.y - targetSize!.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map((label: string) => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
    </Container>
  );
};

export default Card;
