export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "dd806c2b9af540908b93366a941f2c34"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromUrl = () => {
      return window.location.hash
      .substring(1)
      .split('&')
      .reduce((intial, item) =>{
          let parts = item.split('=');
          intial[parts[0]] = decodeURIComponent(parts[1]);

          return intial;
      }, {});
  }

  export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`