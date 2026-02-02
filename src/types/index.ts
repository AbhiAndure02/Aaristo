export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
    color: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
}

export interface Workshop {
    id: number;
    title: string;
    date: string;
    duration: string;
    description: string;
    price: string;
}