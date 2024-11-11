import { Box, Card, Typography } from "@mui/material";
import Misi from "./components/Misi";

const FourthSection = () => {
    return (
        <Box
            marginBottom={10}
            sx={{ marginX: { xs: 2, md: 10 } }}
            marginTop={10}
        >
            {/* Visi Section */}
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{ flexDirection: { xs: "column", md: "row" } }} // Responsif: kolom di mobile, baris di desktop
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={{ xs: "center", md: "flex-start" }}
                    sx={{ width: { xs: "100%", md: "50%" } }}
                >
                    {/* Box for "Visi" Title */}
                    <Box
                        sx={{
                            paddingX: { xs: "1.5rem", md: "2rem" },
                            paddingY: { xs: "0.8rem", md: "1rem" },
                            backgroundColor: "#850E09",
                            width: "fit-content",
                            borderRadius: "10px",
                            mb: { xs: 2, md: 0 }, // margin bottom di mobile
                        }}
                    >
                        <Typography
                            variant={"h4"}
                            color={"#FFF9F9"}
                            fontFamily={"Open Sans"}
                            fontWeight={"bold"}
                            textAlign="center"
                            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                        >
                            Visi
                        </Typography>
                    </Box>
                    {/* Visi Card */}
                    <Card
                        sx={{
                            marginTop: { xs: "1.5rem", md: "2rem" },
                            paddingX: { xs: "1.5rem", md: "2rem" },
                            paddingY: { xs: "2rem", md: "4rem" },
                            backgroundColor: "#FFF9F9",
                            width: "100%",
                            borderRadius: "10px",
                            boxShadow: "0px 10px 20px 0px rgba(154,57,53,0.3)",
                        }}
                    >
                        <Typography
                            variant={"h6"}
                            color={"#251A1A"}
                            fontFamily={"Open Sans"}
                            textAlign={"center"}
                            fontWeight={"bold"}
                            sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
                        >
                            BEM UNAIR Sebagai organisasi dengan spirit Asa
                            Progresif untuk mewujudkan kebermanfaatan nyata bagi
                            Universitas Airlangga dan Indonesia.
                        </Typography>
                    </Card>
                </Box>

                {/* Image for Visi Section */}
                <Box
                    component="img"
                    src="/images/logo/back-drop.png"
                    sx={{
                        width: { xs: "80%", md: "37%" }, // Lebih kecil di mobile
                        mt: { xs: 2, md: 0 }, // Margin top di mobile
                    }}
                />
            </Box>

            {/* Misi Section */}
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                sx={{
                    flexDirection: { xs: "column-reverse", md: "row" },
                    mt: 4,
                }}
            >
                {/* Image for Misi Section */}
                <Box
                    component="img"
                    src="/images/logo/back-drop.png"
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        mt: { xs: 2, md: 0 }, // Margin top di mobile
                    }}
                />

                {/* Misi List */}
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={{ xs: "center", md: "flex-end" }}
                    sx={{ width: { xs: "100%", md: "50%" } }}
                >
                    {/* Box for "Misi" Title */}
                    <Box
                        sx={{
                            paddingX: { xs: "1.5rem", md: "2rem" },
                            paddingY: { xs: "0.8rem", md: "1rem" },
                            backgroundColor: "#850E09",
                            width: "fit-content",
                            borderRadius: "10px",
                            mb: { xs: 2, md: 0 }, // margin bottom di mobile
                        }}
                    >
                        <Typography
                            variant={"h4"}
                            color={"#FFF9F9"}
                            fontFamily={"Open Sans"}
                            fontWeight={"bold"}
                            textAlign="center"
                            sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                        >
                            Misi
                        </Typography>
                    </Box>

                    {/* Misi Items */}
                    <Misi index={1}>
                        Mewujudkan BEM Unair sebagai transenden representasi
                        mahasiswa dalam pengadvokasian kesejahteraan mahasiswa.
                    </Misi>
                    <Misi index={2}>
                        Memperbanyak ruang pengabdian yang inklusif dengan
                        berfokus pada keselamatan lingkungan dan pengurangan
                        kesenjangan.
                    </Misi>
                    <Misi index={3}>
                        Menyediakan ruang-ruang partisipatif dan relevan guna
                        mendorong potensi sumber daya mahasiswa maupun
                        universitas.
                    </Misi>
                    <Misi index={4}>
                        Menyediakan ruang-ruang partisipatif dan relevan guna
                        mendorong potensi sumber daya mahasiswa maupun
                        universitas.
                    </Misi>
                    <Misi index={5}>
                        Memperluas jejaring sebagai langkah adaptif dalam
                        meningkatkan peluang kolaborasi yang berdampak nyata
                        bagi seluruh civitas akademika.
                    </Misi>
                </Box>
            </Box>
        </Box>
    );
};

export default FourthSection;
