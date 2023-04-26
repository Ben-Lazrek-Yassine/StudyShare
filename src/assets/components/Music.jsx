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
                    return Promise.resolve('https://cdns-preview-8.dzcdn.net/stream/c-8858acb604dfa75fb39a1a984e6b4d74-8.mp3')
                }
            },
            {
                name: 'Relaxing piano music',
                singer: 'Los Del Rio',
                cover: 'https://www.musicnotes.com/images2/promos/store/900x520_piano-min.jpg',

                musicSrc : () => {
                    return Promise.resolve('https://d289.d2mefast.net/tb/d/0e/4_beautiful_soundtracks_relaxing_piano_10min_mp3_42098.mp3')
                }

            },
            {
                name: '✪ dima ghabra ✪',
                singer: 'Rafa',
                cover: 'https://tubidy.mobi/nthumbs/1/R59fMnrecqlwN7BzftsHTw_3D_3D.jpg',
                musicSrc : () => {
                    return Promise.resolve('https://d231.d2mefast.net/tb/9/75/tubidy_mp3_42722.mp3')
                }
            },
            {
                name: 'Ni**as in Paris',
                singer: 'Jay-Z & Kanye West',
                cover: 'data:image/jpeg;base64,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',
                musicSrc : () => {
                    return Promise.resolve('https://cdns-preview-f.dzcdn.net/stream/c-f4ae8386b85486edf78ff980c270605b-4.mp3')
                }
            },
            {
                name: 'Very relaxing',
                singer: 'relaxo',
                cover: 'data:image/jpeg;base64,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',
                musicSrc : () => {
                    return Promise.resolve('https://www.cjoint.com/doc/19_04/IDjxcyLsXVm_Thomas-the-Tank-Engine-EAR-RAPE-BASS-BOOSTED-DISTORTED-192-kbps-.mp3d')
                }
            },
            
            
        ],
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