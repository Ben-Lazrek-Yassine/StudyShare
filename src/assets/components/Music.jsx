import React from 'react';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const Music = () => {
    const options = {
        audioLists: [
            {
                name: 'Despacito',
                singer: 'Luis Fonsi',
                cover: 'https://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
                musicSrc : () => {
                    return Promise.resolve('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3')
                }
            },
            {
                name: 'Macarena',
                singer: 'Los Del Rio',
                cover: 'https://res.cloudinary.com/alick/image/upload/v1502375978/cover_euwooi.png',
                musicSrc : () => {
                    return Promise.resolve('https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/mSpBSRyKC8bMvulKGFPY21Fmm1Sx46C4uAPn4CgK.mp3')
                }

            }],
        defaultPlayIndex: 0,
        mode: 'full',
        showMiniModeCover: true,
        showMiniProcessBar: false,
        showPlay: true,
        showReload: true,
        showDownload: true,
        showThemeSwitch: false,
        showLyric: true,
        showDestroy: true,
        showMediaSession: true,
        preload: true,
        glassBg: true,
        autoPlay: true,
        playMode: 'order',
        playModeShowTime: 600,
        theme: 'dark',
        bounds: 'body',
        getContainer: () => document.body,
        defaultPosition: {
            top: 0,
            left: 0,
        },
        playModeText: {
            order: 'order',
            orderLoop: 'orderLoop',
            singleLoop: 'singleLoop',
            shufflePlay: 'shufflePlay',
        },
        once: false,
        remember: true,
        remove: true,
        defaultVolume: 100,
        loadAudioErrorPlayNext: true,
        spaceBar: true,
        autoHiddenCover: true,
        toggleMode: true,
        showProgressLoadBar: true,
        showPlayMode: true,
        responsive: true,
    }
    return (
        <div>
            <ReactJkMusicPlayer {...options} />
        </div>
    )
}

export default Music;