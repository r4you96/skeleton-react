import React from "react";
interface Props{
    children?: React.ReactElement;
}
const FullLayout: React.FC<Props> = (props) => {
    const {children} = props;
    return (
        <div
            className={"d-flex justify-content-center align-items-center"}
            style={{
                //border:"1px solid black",
                width: "90vw",
                height: "80vh"
            }}
        >
            {children}
        </div>
    )
}

export default FullLayout;