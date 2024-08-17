import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import FirstSection from "@/Components/Section/Struktur/FirstSection/FirstSection";
import SecondSection from "@/Components/Section/Struktur/SecondSection/SecondSection";
import ThirdSection from "@/Components/Section/Struktur/ThirdSection/ThirdSection";

const Struktur = () => {
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

export default Struktur;