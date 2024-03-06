export interface Recomendation {
    id?: string;
    name: string;
    background_image?: string;
    description?: string;
    identify_lang_recommended_id?: string;
    lang?: string;
    impact?: {
        value: number;
        type: string;
    }
    typeImage?: string;
}