import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const FooterPage = (props) => {
    return (
        <div class="d-flex flex-column mb-3 mt-3">
        <footer class="footer">
            <div className="text-center">
            <span>&copy; {props.tahun} Byu with Rj.</span>
            </div>
        </footer>
        </div>
    );
};

export default FooterPage;
