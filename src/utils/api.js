const API_KEY = '23798924-17f42c690434b5dec74a9c318';
const API_URL = `https://pixabay.com/api/?key=${API_KEY}`;
export const getHits = async (query, per_page = 20, page = 1) => {
    const _query = `&q=${query}`;
    const _per_page = `&per_page=${per_page}`;
    const _page = `&page=${page}`;

    const response = await fetch(`${API_URL}${_query}${_per_page}${_page}`);
    const json = await response.json();
    return json.hits;
}

export const getImages = async (query, per_page = 20, page = 1) => {
    const hits = await getHits(query, per_page, page);
    const images = hits.map(hit => ({
        id: hit.id,
        largeImageURL: hit.largeImageURL,
        previewURL: hit.previewURL,
        webformatURL: hit.webformatURL
    }));
    return images;
}
