import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Typography } from '@mui/material';
import ResponsiveAppBar from '@/Components/NavBar';
import FirstSection from '@/Components/Section/Landing/FirstSection/FirstSection';
import ThirdSection from '@/Components/Section/Landing/ThirdSection/ThirdSection';
import FooterSection from '@/Components/Footer';

const Welcome = () => {
    return (
      <>
       <ResponsiveAppBar />
       <FirstSection/>
       <ThirdSection/>
       <FooterSection/>
      </>
    );
}

export default Welcome
