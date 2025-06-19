export interface Technology {
    name: string;
    icon: string;
}

export interface TestimonialData {
    name: string;
    role: string;
    company: string;
    message: string;
    rating: number;
}

export interface ServiceData {
    title: string;
    description: string;
    icon: string;
}

export interface ProjectData {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    playStoreUrl?: string;
    appStoreUrl?: string;
}