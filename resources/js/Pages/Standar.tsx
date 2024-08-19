// Article.js
import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import MainSection from "@/Components/Section/SOP/MainSection/MainSection";

export type pdfUrlType = {
    pdfUrl: {
        pdfUrl: string;
    };
};

const Standar = (pdfUrl: pdfUrlType) => {
    return (
        <>
            {console.log(pdfUrl.pdfUrl)}
            <ResponsiveAppBar />
            <MainSection pdfUrl={pdfUrl.pdfUrl} />
            <FooterSection />
        </>
    );
};

export default Standar;
