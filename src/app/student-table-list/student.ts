export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Student {
    id?: number;
    name?: number;
    country?: Country;
    company?: string;
    date?: string;
    status?: string;
    representative?: Representative;
}