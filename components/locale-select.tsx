import { LOCALE_NAMES } from '@/constants';
import {
  FormControl, Grid, InputLabel, MenuItem, Select,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function LocaleSelect() {
  const router = useRouter();
  console.log('router →', router);

  const handleChange = ({ target }) => {
    router.push(router.pathname, router.pathname, { locale: target.value, shallow: true });
  };

  return (
    <FormControl fullWidth sx={{ minWidth: 120 }}>
      <InputLabel id="lang-select-label">News Category</InputLabel>
      <Select
        labelId="lang-select-label"
        id="lang-simple-select"
        value="en"
        label="News Category"
        onChange={handleChange}
      >
        {Object.entries(LOCALE_NAMES).map(([key, value]) => (
          <MenuItem value={key}>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
