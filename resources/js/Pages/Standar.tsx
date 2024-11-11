// Article.js
import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import MainSection from "@/Components/Section/SOP/MainSection/MainSection";

export type pdfUrlType = {
    pdfUrl: {
        pdfUrl: string;
    };
    pdfUrl2: {
        pdfUrl2: string;
    };
};

const Standar = (pdfUrl: pdfUrlType) => {
    return (
        <>
            <ResponsiveAppBar />
            <MainSection pdfUrl={pdfUrl.pdfUrl} pdfUrl2={pdfUrl.pdfUrl2} />
            <FooterSection />
        </>
    );
};

export default Standar;
