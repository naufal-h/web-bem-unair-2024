// Article.js
import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import MainSection from "@/Components/Section/SOP/MainSection/MainSection";

 

const Standar = () => {
    return (
        <>
            <ResponsiveAppBar />
        <MainSection/>
            <FooterSection />
        </>
    );
}

export default Standar;
