import { ProkerType } from "@/Components/Section/Kementrian/type";
import { createContext, useContext } from "react";


export interface Content {
    content: ProkerType[];
}

export const ProkerContext = createContext<Content | undefined>(undefined);


export function useProkerContext() {
    const content = useContext(ProkerContext);

    if (content === undefined) {
        throw new Error(
            'ProkerContext must be used within a ProkerProvider',
        );
    }
    return content;
}