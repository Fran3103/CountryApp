import { TextField } from "@mui/material";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div
      className="flex justify-between items-center p-4 py-6 md:p-8   dark:text-blue-white text-blue-default
     "
    >
      <TextField
        id="outlined-basic"
        label="Buscar"
        variant="outlined"
        onChange={handleChange}
        value={value}
        className="w-48 dark:text-blue-white  shadow-md  text-blue-white"
        slotProps={{
          input: { className: "text-blue-default dark:!text-blue-white" }, // texto del input
          inputLabel: { className: "text-blue-default dark:!text-blue-white" }, // label
        }}
      />
    </div>
  );
};

export default Search;
