import { Match } from '../../interfaces/RecordEntities';
import { ListItemProps } from '../../interfaces/PagesProps';

type IProps = ListItemProps<Match>;

export const MatchListItem: React.FC<IProps> = ({ record }) => {
  return (
    <div>
      Match {record.id} at {record.stadium || 'Unknown'}
    </div>
  );
};
