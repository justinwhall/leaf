import Header from '@/components/header';
import { Box, Container } from '@mui/material';

export default function Layout(
  { children, loading }: { children: React.ReactNode, loading?: boolean },
) {
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
          loading
          {/* <Loading /> */}
        </Box>
      ) : children}
    </Container>
  );
}

Layout.defaultProps = {
  loading: false,
};
