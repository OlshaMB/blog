import ImageCard from "../components/ImageCard";
import glob from "glob-promise";
import { parse as toml } from "toml";
import { readFileSync } from "fs";
import React from "react";
import type { ImgHTMLData } from "astro-imagetools";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "../styles/components/ImageGallery.css";
type Props = {
    imagesAndlabels: {
        label: string | undefined,
        img: ImgHTMLData,
        realPath: string
    }[]
}
export default function (props: Props) {
    console.log(props.imagesAndlabels[0].label.replace("/public",""));
    
    return <PhotoProvider>
        <div className="photos">
            {
                props.imagesAndlabels.map((e, i) => {
                    return (
                        <ImageCard path={e.realPath.replace("public","")} img={e.img} label={(e.label)} />
                )})
            }
        </div>
    </PhotoProvider>
}
