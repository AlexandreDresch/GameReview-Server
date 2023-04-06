export interface ApplicationError extends Error {
    name: string;
    message: string;
}

export interface GameProps {
    name: string;
    description: string;
    publisher: string;
    rating: number;
}
