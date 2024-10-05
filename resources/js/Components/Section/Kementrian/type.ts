export interface MainKemenkoanInterface {
    image: string
    nama: string
    kemenkoan: KementrianType[]
    jabatan: string
}

export interface KementrianType  {
    detail: DetailKementrianType[]
}

export interface DetailKementrianType {
    nama: string
    text_kementrian: string
    proker: ProkerType[]
}


export type AnggotaType = {
    image: string
    name: string
    jabatan: string
}

export type ProkerType = {
    judul: string
    deskripsi_proker: string
}