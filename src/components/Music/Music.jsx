import React from "react";
import module from "./Music.module.css";
import {NavLink} from "react-router-dom";

const Muzon = (props) => {
    let path = '/music/' + props.id;
    return <NavLink to={path}>{props.music}</NavLink>
}

const Music = (props) => {
    let musics = [
        {id: 1, music: 'Arash - Yalla.mp3'},
        {id: 2, music: 'Timati & Egor Krid- Gucci.mp3'},
        {id: 3, music: 'Yalla - Chayxana.mp3'},
        {id: 4, music: 'Yulduz Usmonova - Dunyo.mp3'},
        {id: 5, music: 'Sevara Nazarkhan - Bolalar.mp3'},
    ]

    let musicsElement = musics.map(function (item) {
        return <Muzon id={item.id} music={item.music}/>
    });

    return (
        <div className={module.musicsItem}>
            {musicsElement}
        </div>
    )
};

export default Music;