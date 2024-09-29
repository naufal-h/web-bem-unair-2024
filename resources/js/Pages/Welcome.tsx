import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import FifthSection from "@/Components/Section/Landing/FifthSection/FifthSection";
import FirstSection from "@/Components/Section/Landing/FirstSection/FirstSection";
import FourthSection from "@/Components/Section/Landing/FourthSection/FourthSection";
import SecondSection from "@/Components/Section/Landing/SecondSection/SecondSection";
import ThirdSection from "@/Components/Section/Landing/ThirdSection/ThirdSection";
export type articleType = {
    title: string;
    published_at: string;
    image1: string;
    content: string;
    slug: string;
};
interface ArticleProps {
    articles: articleType[];
}
const Welcome: React.FC<ArticleProps> = ({ articles }) => {
    return (
        <>
            <ResponsiveAppBar />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection articles={articles} />
            <FooterSection />
        </>
    );
};

export default Welcome;
