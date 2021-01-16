export const GET_SEARCH_START = 'GET_SEARCH_START';
export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
export const GET_SEARCH_FAILURE = 'GET_SEARCH_FAILURE';

export interface IUrl {
  type: string;
  template: string;
}

interface IRequest {
  title: string;
  totalResults: string;
  searchTerms: string;
  count: number;
  startIndex: number;
  inputEncoding: string;
  outputEncoding: string;
  safe: string;
  cx: string;
}

export interface IQueries {
  request: IRequest[];
  nextPage: IRequest[];
}

export interface IContext {
  title: string;
}
export interface ISearchInformation {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
}

interface ICseThumbnail {
  src: string;
  width: string;
  height: string;
}

interface ICseImages {
  src: string;
}

export interface IItem {
  kind: string;
  title: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlTitle: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: ICseThumbnail[];
    metatags: any[];
    cse_image: ICseImages[];
  };
}

export interface ISearch {
  kind: string;
  url: IUrl;
  queries: IQueries;
  context: IContext;
  searchInformation: ISearchInformation;
  items: IItem[];
}

export interface SearchError {
  code: string;
  message: string;
}

export interface SearchState {
  data: ISearch | null;
  loading: boolean;
  search: string;
  error: string;
}

interface GetSearchStartAction {
  type: typeof GET_SEARCH_START;
  payload: string;
}
interface GetSearchAction {
  type: typeof GET_SEARCH_SUCCESS;
  payload: ISearch;
}

interface SetErrorAction {
  type: typeof GET_SEARCH_FAILURE;
  payload: string;
}

export type SearchAction =
  | GetSearchStartAction
  | GetSearchAction
  | SetErrorAction;
