import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import FirstSection from "@/Components/Section/About/FirstSection/FirstSection";
import SecondSection from "@/Components/Section/About/SecondSection/SecondSection";
import ThirdSection from "@/Components/Section/About/ThirdSection/ThirdSection";
import MainSection from "@/Components/Section/Struktur/MainSection";

const Struktur = () => {
    return (
        <>
        <ResponsiveAppBar />
        <MainSection/>
        <FooterSection/>
       </>
    );
}

export default Struktur;