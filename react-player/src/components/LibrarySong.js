import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({ song, setCurrentSong, songs, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === song.id);
        setCurrentSong(selectedSong[0]);
        const newSongs = songs.map((s) => {
            if (s.id === song.id) {
                return {
                    ...s,
                    active: true
                };
            }
            else {
                return {
                    ...s,
                    active: false
                }
            }
        })

        setSongs(newSongs);

        playAudio(isPlaying, audioRef);
    }
    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;