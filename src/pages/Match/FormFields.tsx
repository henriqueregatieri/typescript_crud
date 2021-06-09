import { useFetch } from '../../hooks/useFetch';
import { Match, Team } from '../../interfaces/RecordEntities';
import { FormFieldsProps } from '../../interfaces/PagesProps';

type IProps = FormFieldsProps<Match>;

export const MatchFormFields: React.FC<IProps> = ({
  formState,
  handleChange,
}) => {
  const teamsFetch = useFetch<Team>('teams');

  return (
    <div>
      <div>
        <label>Team 1</label>
        <select
          name="team1"
          value={formState.team1 || ''}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {teamsFetch.records.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Team 1 Score</label>
        <input
          type="number"
          name="team1score"
          min="0"
          value={formState.team1score}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Team 2</label>
        <select
          name="team2"
          value={formState.team2 || ''}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {teamsFetch.records.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Team 2 Score</label>
        <input
          type="number"
          min="0"
          name="team2score"
          value={formState.team2score}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Stadium</label>
        <input
          type="text"
          name="stadium"
          value={formState.stadium}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
