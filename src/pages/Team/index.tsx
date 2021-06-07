import { Team } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { TeamListItem } from './ListItem';

export const TeamIndex: React.FC = () => {
  const apiOptions = { relations: [] };

  return (
    <RecordIndex<Team>
      ListItem={TeamListItem}
      apiPath="Teams"
      apiOptions={apiOptions}
    />
  );
};
