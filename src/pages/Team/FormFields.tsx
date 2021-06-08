import { FormFieldsProps } from '../../interfaces/PagesProps';
import { Team } from '../../interfaces/RecordEntities';

type IProps = FormFieldsProps<Team>;

export const TeamFormFields: React.FC<IProps> = ({
  formState,
  handleChange,
}) => {
  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formState.city || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formState.description || ''}
          onChange={handleChange}
          rows={5}
        />
      </div>
    </div>
  );
};
