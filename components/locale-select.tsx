import { LOCALE_NAMES } from '@/constants';
import {
  FormControl, InputLabel, MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function LocaleSelect() {
  const { locale, push, pathname } = useRouter();

  const handleChange = (evt: SelectChangeEvent<string>) => {
    push(pathname, pathname, { locale: evt.target.value, shallow: true });
  };

  return (
    <FormControl fullWidth sx={{ minWidth: 120 }}>
      <InputLabel id="lang-select-label">News Language</InputLabel>
      <Select
        labelId="lang-select-label"
        id="lang-simple-select"
        value={locale}
        label="News Category"
        onChange={handleChange}
      >
        {Object.entries(LOCALE_NAMES).map(([key, value]) => (
          <MenuItem key={key} value={key}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
