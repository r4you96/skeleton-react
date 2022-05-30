import React from "react";
interface Props{
    children?: React.ReactElement;
}
const FullLayout: React.FC<Props> = (props) => {
    const {children} = props;
    return (
        <div className={"d-flex"}>
            {children}
        </div>
    )
}

export default FullLayout;