import { Team } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { TeamListItem } from './ListItem';
import { TeamFormFields } from './FormFields';

export const TeamIndex: React.FC = () => {
  const apiOptions = { relations: [] };

  const emptyRecord = {
    name: '',
    city: '',
    description: '',
  };

  return (
    <RecordIndex<Team>
      ListItem={TeamListItem}
      apiPath="teams"
      apiOptions={apiOptions}
      FormFields={TeamFormFields}
      emptyRecord={emptyRecord}
    />
  );
};
