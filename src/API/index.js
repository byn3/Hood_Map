/* helper functions. returns the right info */
const Helper = {
  baseURL: () => {
    return "https://api.foursquare.com/v2";
  },
  /* Authenticator */
  auth: () => {
    const keys = {
      client_id: "D11D2WSPNJGWC4TSH014ICIPRKJYXLBIBVLGOMAULAEFK3TD",
      client_secret: "JHGHSRQJNT2E1QSYTOTO4VTLDBSMV1LEURJI2UEEMM3D40BH",
      v: "20180323"
    };
    return Object.keys(keys).map(key =>
      `${key}=${keys[key]}`).join('&');
  },
  /* URL builder */
  urlBuilder: (urlArguments) => {
    if(!urlArguments){
      return "";
    }
    return Object.keys(urlArguments).map(key =>
      `${key}=${urlArguments[key]}`).join('&');
  },
  /* headers */
  headers: () => {
    return {
      Accept: "application/json"
    };
  },

  /* Fetches the endPoint with the D. heheh. data */
  simpleFetch: (endPoint, method, urlArguments) => {
    let requestTheD = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlArguments)}`,
      requestTheD
    ).then(res => res.json())
      .catch(e => alert.e('THIS DUN MESSED UP:', e));
      }
};

/* uses the Square API to get venue details*/
const SquareAPI = {
  search: urlArguments => {
  return Helper.simpleFetch("/venues/search", "GET", urlArguments);
},
  getVenueDetails: VENUE_ID => {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
  },
};

export default SquareAPI;
