// ====== interfaces

// Login & SignUp
export interface UserState {
    email: string,
    password: string,
    role: string,
    errorText: string,
    token: string,
    register: boolean,
    err: string,
}

export interface ReviewsState {

}

export interface FavoritesState {
    
}

// ======= types
export type Token = string