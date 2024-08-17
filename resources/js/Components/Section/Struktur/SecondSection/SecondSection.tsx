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
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#850E09",
         }}>
            <Box sx={{ 
                width: "100%",
                padding: "2rem",
             }}>
   <Box display="flex" justifyContent="space-around" flexWrap="wrap" gap={4}>
            {AnggotaContent.map((anggota, index) => (
                <CardAnggota key={index} image={anggota.image} title={anggota.title} text={anggota.text} />
            ))}
          </Box>
            </Box>
        </Box>
    )
}
export default SecondSection