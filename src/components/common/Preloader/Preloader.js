import React from "react";
import preloader from "../../../assds/images/loading.gif";

let Preloader = (props) => {
    return (
        <div style={{ beckgroundColor: "red" }}>
            <img src={preloader} />
        </div>
    );
};

export default Preloader;
