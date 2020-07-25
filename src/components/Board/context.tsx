import React, { createContext, useState } from 'react';
import produce from 'immer';

import { loadLists, Data as DataTypes } from '../../services/api';

interface BoardContextProps {
  lists: DataTypes[];
  move(fromList: number, toList: number, from: number, to: number): void;
}

export const BoardContext = createContext<BoardContextProps>(
  {} as BoardContextProps,
);

// export const BoardProvider: React.FC = ({ children }) => {
//   const data = loadLists();

//   const [lists, setLists] = useState(data);

//   function move(fromList: number, from: number, to: number) {
//     setLists(
//       produce(lists, (draft) => {
//         const dragged = draft[fromList].cards[from];

//         draft[fromList].cards.splice(from, 1);
//         draft[fromList].cards.splice(to, 0, dragged);
//       }),
//     );
//   }

//   return (
//     <BoardContext.Provider value={{ lists, move }}>
//       {children}
//     </BoardContext.Provider>
//   );
// };
