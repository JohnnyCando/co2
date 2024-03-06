export interface Project {
    id?: string;
    title?: string;
    identify_lang_project_id?: string;
    lang?: string;
    description_project?: string;
    slogan?: string;
    location?: number[];
    fields_dynamics?: {
        name: string;
        value: string;
    }[]
    email?: string;
    category?: string;
    is_active?: boolean;
    type_image?: string;
    image_background?: string;
}