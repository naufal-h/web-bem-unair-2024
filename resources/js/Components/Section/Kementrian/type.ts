export interface MainKemenkoanInterface {
    id: string
    nama_kementrian: string
    text_kementrian: string
    image: string
    nama: string
    kemenkoan: DetailKementrianType[]
    jabatan: string
}



export interface DetailKementrianType {
    nama: string
    text_kementrian: string
    anggota: AnggotaType[]
    proker: ProkerType[]
}


export type AnggotaType = {
    image: string
    nama: string
    jabatan: string
}

export type ProkerType = {
    judul: string
    deskripsi_proker: string
}