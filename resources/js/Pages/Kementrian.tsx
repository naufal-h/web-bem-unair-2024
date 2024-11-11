import FooterSection from "@/Components/Footer";
import ResponsiveAppBar from "@/Components/NavBar";
import { KemenkoanList } from "@/Components/Section/Kementrian/data";

import FirstSection from "@/Components/Section/Kementrian/FirstSection/FirstSection";
import SecondSection from "@/Components/Section/Kementrian/SecondSection/SecondSection";
import ThirdSection from "@/Components/Section/Kementrian/ThirdSection/ThirdSection";
import { usePage } from "@inertiajs/react";

type KementrianPageType = {
    id: string;
}


const KementrianPage = () => {
    const { id }: KementrianPageType = usePage().props as any;
    const dataKemenkoan = KemenkoanList.find((item) => item.id === id);
    console.log('dataKemenkoan', dataKemenkoan);
    return (
        <>
            <ResponsiveAppBar />
            <FirstSection id={dataKemenkoan!.id} nama_kementrian={dataKemenkoan!.nama_kementrian} text_kementrian={dataKemenkoan!.text_kementrian} image={dataKemenkoan!.image} nama={dataKemenkoan!.nama} kemenkoan={dataKemenkoan!.kemenkoan} jabatan={dataKemenkoan!.jabatan} />
            
            {dataKemenkoan!.kemenkoan.map((item, index) => (
                <>
                <SecondSection 
                    key={index}
                    nama={item.nama}
                    text_kementrian={item.text_kementrian}
                    anggota={item.anggota}
                    proker={item.proker}
                />
                <ThirdSection/>
                </>
                
            )
        )
        }
        <FooterSection/>
        </>
    )
}

export default KementrianPage;
