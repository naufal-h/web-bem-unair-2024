import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import FirstSection from "@/Components/Section/About/FirstSection/FirstSection";
import FourthSection from "@/Components/Section/About/FourthSection/FourthSection";
import SecondSection from "@/Components/Section/About/SecondSection/SecondSection";

const About = () => {
    return (
        <>
            <ResponsiveAppBar />
            <FirstSection />
            <SecondSection />

            <FourthSection />
            <FooterSection />
        </>
    );
};

export default About;
