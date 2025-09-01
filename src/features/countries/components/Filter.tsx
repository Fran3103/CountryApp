import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";


type FilterProps = {
  value: string;
  onChange: (value: string) => void;
  reset: () => void;
};

const REGION_OPTIONS = [
  { label: "África",   api: "africa" },
  { label: "Américas", api: "americas" },
  { label: "Asia",     api: "asia" },
  { label: "Europa",   api: "europe" },
  { label: "Oceanía",  api: "oceania" },
  { label: "Antártida",api: "antarctic" },
];

const Filter: React.FC<FilterProps> = ({ value, onChange, reset}) => {

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
    reset()
    
  };
  return (
    <div>
      <FormControl className="w-32 dark:text-blue-white text-blue-default">
        <InputLabel id="region" className="w-20 dark:text-blue-white text-blue-default">
            Region
        </InputLabel>
        <Select
          labelId="region-label"
          id="region"
          value={value}
          label="Region"
          onChange={handleChange}
            className="w-32 dark:bg-DarkBlue bg-white dark:text-blue-white text-blue-default"
      
        >
            <MenuItem value="">
                <em>Todas</em>
            </MenuItem>
          {REGION_OPTIONS.map((i) => (
            <MenuItem key={i.api} value={i.api}>
              {i.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
