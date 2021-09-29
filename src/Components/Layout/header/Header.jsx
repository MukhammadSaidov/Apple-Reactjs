import "../header/Header.css"
import order from "../../Icons/order.svg"
import magnifyinGglass from "../../Icons/magnifying-glass.svg"
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <div className='top' >
            <div className="topFixset">
            <Link to="/"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"/> </Link>
            <Link to="/store"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_store_image__d8z9vxma66c2_large.svg"></img> </Link>
            <Link to="/mac"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_mac_image__fv4ktb435mum_large.svg"></img> </Link>
            <Link to="#"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fefum478f4uq_large.svg"></img></Link>
            <Link to="#"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_ipad_image__fefum478f4uq_large.svg"></img></Link>
            <Link to="#"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_watch_image__dfo5u4bhooqe_large.svg"></img></Link>
            <Link to="#"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_tv_image__dtzdy60o3imq_large.svg"></img></Link>
            <Link to="#"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_music_image__bewxrazzig02_large.svg"></img></Link>
            <Link to="#"><img src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_links_support_image__b24reo1n4fbm_large.svg"></img></Link>
            <Link to="#"><img src={magnifyinGglass} style={{height:'18px'}}/></Link>
            <Link to="#"><img src={order} style={{height:'18px'}}/></Link>
            </div>
        </div>
    )
}
export default Header;