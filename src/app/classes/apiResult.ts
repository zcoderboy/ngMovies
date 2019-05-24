export interface popularResult{
    page: number;
    results: [] ;
}

export interface favoriteResult{
    original_title : string;
    original_language : string;
    popularity : string;
    poster_path : string;
    genres : [];
    overview : string;
    id: number;
    release_date : string;
}

export function buildUrl(favorite?){
    if(favorite){
        return `https://api.themoviedb.org/3/movie/${favorite}?api_key=c0fe280f740fba250e714fb7aa412a89&language=fr&region=fr`;
    }else{
        return 'https://api.themoviedb.org/3/trending/movie/day?api_key=c0fe280f740fba250e714fb7aa412a89&language=fr&region=fr';
    }
}