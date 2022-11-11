import React  from "react";
let ImageList = (props)=>{
    //console.log(props)
    console.log(props.images)
    let images = props.images.map(function({description,id,urls}){
        return <img  alt = {description} key={id} src={urls.regular}/>;
    });
    return <div>{images}</div>
}
export default ImageList