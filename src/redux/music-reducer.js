const PLAY_TRACK = 'PLAY_TRACK';
const STOP_TRACK = 'STOP_TRACK';
const SET_TRACKS = 'SET_TRACKS';

//Инициализируем стартовый state
let initialState = {
    tracks:[]
};

// Принимает часть state
const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY_TRACK:
           return { ...state,
                tracks: state.tracks.map(t => {
                 if(t.id === action.trackID) {
                     return {...t, played: true};
                 }
                  return t;
                })
            }
        case STOP_TRACK:
            return { ...state,
                tracks: state.tracks.map(t => {
                    if(t.id === action.trackID) {
                        return {...t, played: false};
                    }
                    return t;
                })
            }
        case SET_TRACKS:
            return { ...state, tracks: [ ...state.tracks, ...action.tracks] }
        default:
            return state;
    }
};
export const playTrackAC = (trackID) => ({ type: PLAY_TRACK, trackID });
export const stopTrackAC = (trackID) => ({ type: STOP_TRACK, trackID });
export const setTracksAC = (tracks) => ({type: SET_TRACKS, tracks})

export default musicReducer;