export interface Review {
    id: number;
    name: string;
    rating: number;
    comment: string;
    date: string;
}

export interface Service {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
}