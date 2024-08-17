import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import FirstSection from "@/Components/Section/Struktur/FirstSection/FirstSection";
import SecondSection from "@/Components/Section/Struktur/SecondSection/SecondSection";

const Struktur = () => {
    return (
        <>
        <ResponsiveAppBar />
        <FirstSection/>
        <SecondSection/>
        <FooterSection/>
       </>
    );
}

export default Struktur;