import apiRequest from "./apiInstance";

const ComicApi = {
  freeComics: (api: string) => apiRequest.get(`/comic${api}`),
};

export default ComicApi;
