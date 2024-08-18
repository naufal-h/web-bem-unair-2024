import CardAnggota from "@/Components/Card/CardAnggota"
import { Box } from "@mui/material"

type AnggotaContentType = {
    image: string
    title: string
    text: string
}

const AnggotaContent: AnggotaContentType[] = [
    {
        image: "/images/cards/real-pip.png",
        title:"Lorem Ipsum",
        text: `Sekretaris Kabinet.`
    },
    {
        image: "/images/cards/real-pip.png",
        title:"Lorem Ipsum",
        text: `Menteri Keuangan.`
    },
    {
        image: "/images/cards/real-pip.png",
        title:"Lorem Ipsum",
        text: `Pemberdayaan Aparatur Kabinet.`
    },
]

const SecondSection = () => {

    return(
        <Box sx={{ 
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#850E09",
            position: "relative",  // Set parent as relative for absolute positioning
         }}>
          <Box
           component="img"
           src="/images/logo/mark_3.svg"
           alt="Logo"
           sx={{
              position: "absolute",  // Absolute positioning for the logo
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",  // Center the logo
              zIndex: 1,  // Lower z-index to be behind other elements
              opacity: 0.2,  // Adjust opacity for background effect
              maxWidth: "600px",  // Adjust size as needed
            
           }}
        />
        <Box sx={{ 
            width: "100%",
            padding: "2rem",
            zIndex: 2,  // Ensure cards are above the logo
            display: "flex", justifyContent: "center",
         }}>
            <Box sx={{width: "70%"}} display="flex" justifyContent="space-around" flexWrap="wrap" gap={1}>
                {AnggotaContent.map((anggota, index) => (
                    <CardAnggota key={index} image={anggota.image} title={anggota.title} text={anggota.text} />
                ))}
            </Box>
        </Box>
    </Box>
    )
}
export default SecondSection
