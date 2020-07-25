import React from 'react';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

interface NewCardProps {
  handleClose(state: boolean): void;
}

const NewCard: React.FC<NewCardProps> = ({ handleClose }) => {
  return (
    <Container>
      <form>
        <span>
          <h3>Adicionar nova tarefa</h3>
          <MdClose size={18} onClick={() => handleClose(false)} />
        </span>
        <input type="text" placeholder="Tarefa" />
        <button type="button">Adicionar</button>
      </form>
    </Container>
  );
};

export default NewCard;
