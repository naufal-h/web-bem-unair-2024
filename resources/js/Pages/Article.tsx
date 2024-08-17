// Article.js
import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import MainSection from "@/Components/Section/Article/MainSection/MainSection";
export type articleType = {
    title: string;
    published_at: string;
    image1: string;
    content: string;
    slug: string;
};
interface ArticleProps {
    article: articleType;
    articles: articleType[];
}

// Teks contoh yang berisi paragraf

const Article: React.FC<ArticleProps> = ({ article, articles }) => {
    const paragraph = article.content;
    return (
        <>
            <ResponsiveAppBar />
            <MainSection
                title={article.title}
                published_at={article.published_at}
                image1={article.image1}
                content={paragraph}
                articles = {articles}
            />
            <FooterSection />
        </>
    );
};

export default Article;
