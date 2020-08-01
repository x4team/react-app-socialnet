import React from 'react';
import Music from "./Music";
import {playTrackAC, setTracksAC, stopTrackAC} from "../../redux/music-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        tracks: state.musicPage.tracks
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        playTrack: (trackId) => {
            dispatch(playTrackAC(trackId));
        },
        stopTrack: (trackId) => {
            dispatch(stopTrackAC(trackId));
        },
        setTracks: (tracks) => {
            dispatch(setTracksAC(tracks));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Music);