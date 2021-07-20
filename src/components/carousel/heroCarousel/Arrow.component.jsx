import React from "react";


export const NextArrow = (props) => {
    // props { ClassName, style, onClick }
    return <>
    <div></div>
         <div   className={props.ClassName}
         style={{ ...props.style, backgroundColor: "black" }}
            onClick={props.onClick} />
    </>
};

export const PrevArrow = (props) => {
    // props { ClassName, style, onClick }
    return <>
    <div></div>
        {/* <div
            className={props.ClassName}
            style={{ ...props.style, backgroundColor: "black" }}
        onClick={props.onClick} /> */}
    </>

}