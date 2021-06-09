import { Match } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { MatchListItem } from './ListItem';
import { MatchFormFields } from './FormFields';

export const MatchIndex: React.FC = () => {
  const apiOptions = {}; //{ relations: ['team'] }; // doesn't work on json-server

  const emptyRecord = {
    team1score: 0,
    team2score: 0,
    stadium: '',
  };

  return (
    <RecordIndex<Match>
      ListItem={MatchListItem}
      apiPath="matches"
      apiOptions={apiOptions}
      emptyRecord={emptyRecord}
      FormFields={MatchFormFields}
    />
  );
};
