import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/Components/NavBar';
import FirstSection from '@/Components/Section/Landing/FirstSection/FirstSection';

const Welcome = () => {
    return (
      <>
       <ResponsiveAppBar />
       <FirstSection/>
      </>
    );
}

export default Welcome
