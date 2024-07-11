import Box from "@mui/material/Box";
import * as S from "./FooterSection.Styled";

const FooterSection = () => {
    return (
        <S.StyledFooterSection>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                }}
            >
                <Box sx={{ position: "relative" }}>
                    <img
                        src="/images/logo/primary_logo_white1.png"
                        alt="Logo"
                    />
                </Box>
                {/* <img
                    src="/images/footer/Vector.png"
                    alt=""
                    style={{ position: "absolute", bottom: 0, marginTop: 100 }}
                /> */}
            </Box>

            {/* <Box>
            </Box> */}
        </S.StyledFooterSection>
    );
};

export default FooterSection;
