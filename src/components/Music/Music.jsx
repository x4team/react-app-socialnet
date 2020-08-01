import React from 'react';
import styles from './Music.module.css';

let Music = (props) => {
    if (props.tracks.length === 0) {
        props.setTracks([
                {
                    id: 1,
                    photoURL: 'https://24smi.org/public/media/235x307/celebrity/2017/02/16/5QBRax8G5tZY_dmitrii-medvedev.jpg',
                    played: false,
                    trackName: 'Hello World!',
                    author: 'Dmitry Ivanov',
                    albumName: 'My album 1'
                },
                {
                    id: 2,
                    photoURL: 'https://24smi.org/public/media/235x307/celebrity/2017/02/16/5QBRax8G5tZY_dmitrii-medvedev.jpg',
                    played: true,
                    trackName: 'World is SIMPLE!',
                    author: 'Dmitry Ivanov',
                    albumName: 'My album 2'
                },
                {
                    id: 3,
                    photoURL: 'https://24smi.org/public/media/235x307/celebrity/2017/02/16/5QBRax8G5tZY_dmitrii-medvedev.jpg',
                    played: true,
                    trackName: 'Dmitry Ivanov',
                    author: 'I am a boss',
                    albumName: 'My album 3'
                },
                {
                    id: 4,
                    photoURL: 'https://24smi.org/public/media/235x307/celebrity/2017/02/16/5QBRax8G5tZY_dmitrii-medvedev.jpg',
                    played: false,
                    trackName: 'Dmitry Ivanov',
                    author: 'I am a boss',
                    albumName: 'My album 4'
                }

            ]
        )
    }

    return <div>
        <div className={styles.wrapper}>
            <div className={styles.tracks}>
                {
                    props.tracks.map(t => <div key={t.trackId}>
        <span>
            <div>
                <img src={t.photoURL} className={styles.trackPhoto}/>
            </div>
            <div>
                {t.played
                    ? <button onClick={() => {
                        props.stopTrack(t.id)
                    }}>Stop Track</button>
                    : <button onClick={() => {
                        props.playTrack(t.id)
                    }}>Play Track</button>
                }
            </div>
        </span>
                        <span>
            <span>
                <div>{t.trackName}</div>
                <div>{t.author}</div></span>
            <span>
                <div>{t.albumName}</div>
            </span>
        </span>
                    </div>)
                }
            </div>
        </div>
    </div>
}

export default Music;