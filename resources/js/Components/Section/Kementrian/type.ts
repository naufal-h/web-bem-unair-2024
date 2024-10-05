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
    text: string
}


export type AnggotaType = {
    image: string
    name: string
    department: string
    faculty: string
}