import { TbError404 } from "react-icons/tb";


function PageNotFound() {
    return(
        <div className="PageNotFound">
            <h3 className="PageNotFound-h3">! Page Not Found</h3>
            <TbError404 />
        </div>
    )
}


export default PageNotFound;