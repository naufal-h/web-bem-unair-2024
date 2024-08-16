// Article.js
import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import MainSection from "@/Components/Section/Article/MainSection/MainSection";

// Teks contoh yang berisi paragraf
const paragraph = `This is the first paragraph lorem ipsum dolor sit amet Ullamco exercitation duis adipisicing veniam anim duis id amet quis laboris enim incididunt ex eiusmod. Cillum Lorem magna adipisicing amet consequat ex proident officia anim dolor ipsum. Lorem elit eiusmod duis nostrud proident eiusmod. Occaecat amet incididunt dolor pariatur. Consequat cupidatat consequat qui amet aliqua ipsum sit sint non adipisicing reprehenderit. Labore ut nulla qui sit aute commodo eiusmod ipsum in. Ad ad occaecat id consectetur aute qui ea.\n\nThis is the second paragraph. Anim cupidatat fugiat dolor dolor veniam cillum. Tempor eiusmod ullamco qui eiusmod aute dolore in quis nostrud et dolor deserunt. Minim deserunt id adipisicing amet enim exercitation deserunt adipisicing do. Ex aliquip incididunt Lorem Lorem pariatur amet est ex. Et exercitation laborum do sunt consequat cillum cupidatat aute culpa sit ex nulla. Commodo mollit magna aliquip qui non quis exercitation voluptate aliquip reprehenderit cillum. Ad ad dolor Lorem eu deserunt adipisicing officia tempor anim consequat adipisicing.\n\nThis is the third paragraph. Consectetur qui quis qui fugiat. Ad id Lorem est nostrud exercitation excepteur Lorem. Est laborum id anim magna nulla fugiat quis amet aliqua eu ullamco anim veniam elit. Est occaecat dolor ut sint adipisicing. Elit non eu Lorem voluptate ea ad.`

const Article = () => {
    return (
        <>
            <ResponsiveAppBar />
            <MainSection content={paragraph} />
            <FooterSection />
        </>
    );
}

export default Article;
