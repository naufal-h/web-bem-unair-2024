import { Box, Typography } from "@mui/material"
import { CardSectionStyled } from "../../Landing/ThirdSection/ThirdSectionStyled"
import CardLogo from "@/Components/Card/CardLogo"

type LogoContentType = {
    image: string
    text: string
  }
  
  const LogoContent: LogoContentType[] = [
    {
      image: "/images/logo/Logo1.png",
      text: `“TREE FIRE ABOVES”`
    },
    {
      image: "/images/logo/Logo2.png",
      text: `“TREE WITH 15 LEAVES”`
    },
    {
      image: "/images/logo/Logo3.png",
      text: `“STRONG ROOTS RIPPING AND STURDY TRUNK AND SPREADING BRANCHES”`
    },
    {
      image: "/images/logo/Logo4.png",
      text: `"CIRCLE”`
    },
  ]
  



const SecondSection = () => {
    return (
        <Box sx={{ 
          backgroundColor: "#FFF9F9",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "4rem",
         }}>
          <Box
                    sx={{
                        width: "80%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Open Sans",
                            fontSize: "4rem",
                            fontWeight: "bold",
                            color: "#FFF9F9",
                            WebkitTextStrokeColor: "#850E09",
                            WebkitTextStrokeWidth: "1px", // Add this line
                        }}
                    >
                        FILOSOFI
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "Open Sans",
                            fontSize: "4rem",
                            fontWeight: "bold",
                            color: "#850E09",
                        }}
                    >
                        LOGO
                    </Typography>
                </Box>
          <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={4}>
            {LogoContent.map((logo, index) => (
                <CardLogo key={index} image={logo.image} text={logo.text} />
            ))}
          </Box>
    </Box>
      );
}

export default SecondSection