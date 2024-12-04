import { pdfUrlType } from "@/Pages/Standar";
import { Box, Card, Typography } from "@mui/material";

const Standar = (pdfUrl: pdfUrlType) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                paddingX: "5rem",
                paddingY: "3rem",
                flexDirection: "column",
            }}
        >
            {/* Section for Text */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%",
                    // marginY: "4rem",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{ fontWeight: "500", fontSize: "2.5rem" }}
                >
                    Partneship Eksternal UNAIR
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "500", fontSize: "1rem" }}
                >
                    BEM Universitas Airlangga menjalin hubungan strategis dengan berbagai pihak eksternal untuk memperkuat program kerja dan memberikan manfaat nyata bagi mahasiswa. Melalui kolaborasi ini, BEM UNAIR berupaya menghadirkan dukungan, peluang pengembangan diri, dan solusi kreatif untuk menjawab tantangan di dunia mahasiswa dan masyarakat.
                </Typography>
            </Box>

            {/* Section for PDF Viewer */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginY: "2rem",
                    flexDirection: "column",
                }}
            >
                <Card
                    sx={{
                        minHeight: "65vh",
                        width: { xs: "90vw", md: "80vw", lg: "60vw" }, // Responsif width
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <iframe
                        src={pdfUrl.pdfUrl as unknown as string}
                        style={{
                            height: "65vh",
                            width: "100%", // Mengatur lebar iframe agar mengikuti lebar Card
                            border: "none", // Menghilangkan border default
                        }}
                    />
                </Card>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    width: "100%",
                    marginTop: "4rem",
                    flexDirection: "column",
                    gap: "1rem",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{ fontWeight: "500", fontSize: "2.5rem" }}
                >
                    Partnership Internal UNAIR
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "500", fontSize: "1rem" }}
                >
                    BEM Universitas Airlangga membangun sinergi dengan organisasi mahasiswa, fakultas, dan unit kegiatan di lingkungan UNAIR untuk menciptakan kolaborasi yang berdampak positif. Melalui kerja sama ini, BEM UNAIR mendukung pengembangan program kerja, pertukaran ide, serta inovasi demi kemajuan mahasiswa UNAIR secara holistik.
                </Typography>
            </Box>

            {/* Section for PDF Viewer */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginY: "2rem",
                    flexDirection: "column",
                }}
            >
                <Card
                    sx={{
                        minHeight: "65vh",
                        width: { xs: "90vw", md: "80vw", lg: "60vw" }, // Responsif width
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <iframe
                        src={pdfUrl.pdfUrl2 as unknown as string}
                        style={{
                            height: "65vh",
                            width: "100%", // Mengatur lebar iframe agar mengikuti lebar Card
                            border: "none", // Menghilangkan border default
                        }}
                    />
                </Card>
            </Box>
        </Box>
    );
};

export default Standar;
