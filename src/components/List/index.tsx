import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Data as DataTypes } from '../../services/api';

import Card from '../Card';

import { Container } from './styles';

interface ListProps {
  data: DataTypes;
  index: number;
}

const List: React.FC<ListProps> = ({ data, index: listIndex }) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>

        {data.creatable && (
          <button type="button">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
};

export default List;
