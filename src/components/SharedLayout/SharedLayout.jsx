import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Container from '@mui/material/Container';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="x1" align="center" sx={{ pt: 8 }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
