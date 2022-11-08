import React, { Fragment } from "react"
import "../styles/components/ui/small/card.css";
import 'react-photo-view/dist/react-photo-view.css';
import { useAsync } from "react-use";
import "../styles/components/ImageCard.css"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import type { ImgHTMLData } from "astro-imagetools";
import ImageGalery from "../pages/ImageGalery";
type ImageCardProps = {
    //TODO: If i ever open it to publishing sanitize it
    img: ImgHTMLData
    class?: string,
    label: string | undefined,
    path: string
}
export default (props:ImageCardProps)=>{
    
    console.log(props.path)
    return <><div className={"card image-card"+(props.class ?(" "+props.class): "")} >
        <PhotoView src={props.path}>
        <div className="img" dangerouslySetInnerHTML={{
            __html:props.img ?? "ERR"
            }}/></PhotoView>
    
        <p>{props.label ?? ""}</p>
    </div>
    </>
}