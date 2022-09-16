import type { DetailedMove } from 'models/pokemon';
import { useMemo } from 'react';

import {
  Table,
  TableColumn,
  TableColumnHeader,
  TableRow,
  TableRowHeader,
} from './pokemon-moves.styles';

interface PokemonMoveProps {
  move: DetailedMove;
}

const PokemonMove = ({ move }: PokemonMoveProps) => {
  return (
    <TableRow>
      <TableColumn>{move.name}</TableColumn>
      <TableColumn>{move.power || '-'}</TableColumn>
      <TableColumn>{move.accuracy || '-'}</TableColumn>
      <TableColumn>{move.damage_class.name}</TableColumn>
      <TableColumn>{move.priority}</TableColumn>
    </TableRow>
  );
};

export const PokemonMoves = ({ moves }: { moves: DetailedMove[] }) => {
  const PokemonMoveList = useMemo(
    () => moves.map((move) => <PokemonMove move={move} key={move.name} />),
    [moves]
  );

  return (
    <Table>
      <thead>
        <TableRowHeader>
          <TableColumnHeader>Name</TableColumnHeader>
          <TableColumnHeader>Power</TableColumnHeader>
          <TableColumnHeader>Accuracy</TableColumnHeader>
          <TableColumnHeader>Damage Class</TableColumnHeader>
          <TableColumnHeader>Priority</TableColumnHeader>
        </TableRowHeader>
      </thead>
      <tbody>{PokemonMoveList}</tbody>
    </Table>
  );
};
