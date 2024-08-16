import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import FirstSection from "@/Components/Section/About/FirstSection/FirstSection";
import SecondSection from "@/Components/Section/About/SecondSection/SecondSection";
import ThirdSection from "@/Components/Section/About/ThirdSection/ThirdSection";

const About = () => {
    return (
        <>
        <ResponsiveAppBar />
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FooterSection/>
       </>
    );
}

export default About;