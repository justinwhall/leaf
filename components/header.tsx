import { NAV_ITEMS } from '@/constants';
import { Button, Grid, useTheme } from '@mui/material';
import Link from 'next/link';
import LocaleSelect from './locale-select';

export default function Header() {
  // const theme = useTheme();

  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      py={2}
    >
      {NAV_ITEMS.map((item) => (
        <Grid item key={item.title}>
          <Link href={item.href}>{item.title}</Link>
        </Grid>
      ))}
      <Grid item flexGrow={1} />
      <Grid item>
        <LocaleSelect />
      </Grid>
    </Grid>
  );
}
