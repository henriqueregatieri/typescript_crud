import { Team } from '../../interfaces/RecordEntities';
import { ListItemProps } from '../../interfaces/PagesProps';

type IProps = ListItemProps<Team>;

export const TeamListItem: React.FC<IProps> = ({ record }) => {
  return (
    <div>
      <div className="name">{record.name}</div>
      <div className="city">From: {record.city || 'Unknown City'}</div>
    </div>
  );
};
