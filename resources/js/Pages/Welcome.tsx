import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Typography } from "@mui/material";
import ResponsiveAppBar from "@/Components/NavBar";
import FirstSection from "@/Components/Section/Landing/FirstSection/FirstSection";
import ThirdSection from "@/Components/Section/Landing/ThirdSection/ThirdSection";
import FooterSection from "@/Components/Footer";

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
            <ThirdSection
                articles={articles}
            />
            <FooterSection />
        </>
    );
};

export default Welcome;
