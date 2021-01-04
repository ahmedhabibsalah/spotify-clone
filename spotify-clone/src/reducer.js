export const intialState = {
    user: null,
    playlists:[],
    plating: false,
    item:null,
    // token:'BQDNip7Ot79B_-ZfmsY9lhTbcMLU-aPi_XSjkD30pK5Jt2cQ7vx65iQQ8OAW-xj-E78kQLAmUgXjiguK_q0raxiunulLIcWlv1SF9NsSmQGRDz0-Yr3x7LmuiwnlQCDvjAR5obGcs99Sv2r0WSoA5KhYxqASLWlAI-_qILqge8QgUluB'
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            };
            case "SET_TOKEN":
                return{
                    ...state,
                    token: action.token,
                };
            case "SET_PLAYLISTS":
                return{
                    ...state,
                    playlists: action.playlists,
                };
            case 'SET_DISCOVER_WEEKLY':
                return{
                    ...state,
                    discover_weekly: action.discover_weekly, 
                } 
            case "SET_PLAYING":
                    return {
                      ...state,
                      playing: action.playing,
                    }; 
                    case "SET_TOP_ARTISTS":
                        return {
                          ...state,
                          top_artists: action.top_artists,
                        };  
                        case "SET_SPOTIFY":
                            return {
                              ...state,
                              spotify: action.spotify,
                            };
                            case "SET_ITEM":
                                return {
                                  ...state,
                                  item: action.item,
                                };
        default:
            return state;
    }
}

export default reducer;