import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";

import FirstSection from "@/Components/Section/Kementrian/FirstSection/FirstSection";
import SecondSection from "@/Components/Section/Kementrian/SecondSection/SecondSection";
import ThirdSection from "@/Components/Section/Kementrian/ThirdSection/ThirdSection";
import { Box } from "@mui/material";

const KementrianPage = () => {
    return (
        <>
            <ResponsiveAppBar />
            <FirstSection/>
            {/* <SecondSection/> */}
            {/* <ThirdSection/> */}
            <FooterSection/>
        </>
    );
};

export default KementrianPage;
