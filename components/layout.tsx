import Header from '@/components/header';
import {
  Box, CircularProgress, Container, Typography,
} from '@mui/material';

export default function Layout({
  children,
  loading,
  error,
}: {
  children: React.ReactNode,
  loading?: boolean,
  error?: boolean
}): JSX.Element {
  if (error) {
    return (
      <Container maxWidth="lg">
        <Header />
        <Typography variant="h2" component="h1" gutterBottom>
          Oops, something went wrong.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Header />
      {loading ? (
        <Box
          sx={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <CircularProgress />
        </Box>
      ) : children}
    </Container>
  );
}

Layout.defaultProps = {
  error: false,
  loading: false,
};
