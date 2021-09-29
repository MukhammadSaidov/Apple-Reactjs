import '../mac/Mac.css'
import { topIcon } from "./MacJson"

const Mac = () => {

    return (
        <div className="Mac" style={{backgroundColor:'#ffffff'}}>

            <div className="top" style={{ backgroundColor:"#F9F9FA" , height:'100px' ,display:'flex', justifyContent:'space-between', padding:'0px 220px' , alignItems:'center'}}>
                {topIcon.map((item) =>  
                    <div className="item">
                        <img src={item.img} style={{height:'55px' , width:'60px'}} />
                        <h6 style={{fontSize:"13px"}}>{item.text}</h6>
                    </div>
                )}
            </div>
            <div className="topFooter">
                <span>Save on Mac for college with education pricing. And get AirPods.◊</span>
                <a href="#">Shop now  ></a>
            </div>

            <div className="iMac" style={{height:'870px'}}>
                <div className="text">
                    <h6>New</h6>
                    <h3>iMac</h3>
                    <h4>Say hello.</h4>
                    <h5>From $1299</h5>
                    <button>Buy</button>
                    <br />
                    <a href="#">Learn more ></a>
                </div>
            </div>
            <div className="Desktop_filter">
                <div className="title">
                    <h2>Which Mac is right for you?</h2>
                    <a href="#">Compare all Mac models ></a>
                </div>
                <div className="filter_name">
                    <h4>Notebook</h4>
                    <h4>Desktop</h4>
                </div>
              <div className="Notebooks">

                <div className="Macbook">
                    <div className="Macbook_item">
                    <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_mba__gdncw5gbxoq6_large.png" />
                    <h3>MacBook Air</h3>
                    <p>From $999</p>
                    <div className="colors">
                    <div className="color_one"></div>
                    <div className="color_two"></div>
                    <div className="color_three"></div>
                    </div>
                    <button>Buy</button>
                    </div>
                    <div className="Macbook_info">
                        <div className="display">
                            <h4>13.3"</h4>
                            <p>Retina display <sup>1</sup></p>
                        </div>

                        <div className="chip">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_m1__fz8nzgohw2ai_large.png" alt="" />
                            <p>Apple M1 chip</p>
                        </div>

                        <div className="memory">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_unified_memory__buw4hhhvj4uq_large.png" alt="" />
                            <p>Up to 16GB unifed memory For increase performance and power efficiency</p>
                        </div>

                        <div className="storage">
                            <h4>2TB</h4>
                            <p>Maximum configurable storage <sup>2</sup></p>
                        </div>

                        <div className="battery">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_battery__gbh9jzw6c7u6_large.png" alt="" />
                            <p>Up to 18 hours battery life <sup>3</sup></p>
                        </div>

                        <div className="camera">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_camera__ejp1p20yq1me_large.png" alt="" />
                            <h5>720p FaceTime HD camera</h5>
                            <p>Witch the image signal processor of M1 for drastically improved performance</p>
                        </div>

                        <div className="weight">
                            <h4>2.8 lb.</h4>
                            <p>Weight</p>
                        </div>

                        <div className="touch">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_touchid__e9878ag21q6i_large.png" alt="" />
                            <p>Touch ID</p>
                        </div>
                    </div>
                </div>


                <div className="Macbook">
                    <div className="Macbook_item">
                    <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_mba__gdncw5gbxoq6_large.png" />
                    <h3>MacBook Pro 13"</h3>
                    <p>From $1299</p>
                    <div className="colors">
                    <div className="color_one"></div>
                    <div className="color_two"></div>
                    </div>
                    <button>Buy</button>
                    </div>
                    <div className="Macbook_info">
                        <div className="display">
                            <h4>13.3"</h4>
                            <p>Retina display <sup>1</sup></p>
                        </div>

                        <div className="chip">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_m1__fz8nzgohw2ai_large.png" alt="" />
                            <p>Apple M1 chip</p>
                        </div>

                        <div className="memory">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_unified_memory__buw4hhhvj4uq_large.png" alt="" />
                            <p>Up to 16GB unifed memory For increase performance and power efficiency</p>
                        </div>

                        <div className="storage">
                            <h4>2TB</h4>
                            <p>Maximum configurable storage <sup>2</sup></p>
                        </div>

                        <div className="battery">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_battery__gbh9jzw6c7u6_large.png" alt="" />
                            <p>Up to 18 hours battery life <sup>3</sup></p>
                        </div>

                        <div className="camera">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_camera__ejp1p20yq1me_large.png" alt="" />
                            <h5>720p FaceTime HD camera</h5>
                            <p>Witch the image signal processor of M1 for drastically improved performance</p>
                        </div>

                        <div className="weight">
                            <h4>3.0 lb.</h4>
                            <p>Weight</p>
                        </div>

                        <div className="touch">
                            <img style={{marginBottom: "10px"}} src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_touchbar__f7w2g23m47u6_large.png" alt="" />
                            <p>Touch Bar and Touch ID</p>
                        </div>
                    </div>
                </div>


                <div className="Macbook">
                    <div className="Macbook_item">
                    <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_mbp16__fykfvftfaeuu_large.png" />
                    <h3>MacBook Pro 16"</h3>
                    <p>From $2399</p>
                    <div className="colors">
                    <div className="color_one"></div>
                    <div className="color_two"></div>
                    </div>
                    <button>Buy</button>
                    </div>
                    <div className="Macbook_info">
                        <div className="display">
                            <h4>16"</h4>
                            <p>Retina display <sup>1</sup></p>
                        </div>

                        <div className="chip">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_m1__fz8nzgohw2ai_large.png" alt="" />
                            <p>Apple M1 chip</p>
                        </div>

                        <div className="memory">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_unified_memory__buw4hhhvj4uq_large.png" alt="" />
                            <p>Up to 16GB unifed memory For increase performance and power efficiency</p>
                        </div>

                        <div className="storage">
                            <h4>2TB</h4>
                            <p>Maximum configurable storage <sup>2</sup></p>
                        </div>

                        <div className="battery">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_battery__gbh9jzw6c7u6_large.png" alt="" />
                            <p>Up to 18 hours battery life <sup>3</sup></p>
                        </div>

                        <div className="camera">
                            <img src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_camera__ejp1p20yq1me_large.png" alt="" />
                            <h5>720p FaceTime HD camera</h5>
                            <p>Witch the image signal processor of M1 for drastically improved performance</p>
                        </div>

                        <div className="weight">
                            <h4>4.3 lb.</h4>
                            <p>Weight</p>
                        </div>

                        <div className="touch">
                            <img style={{marginBottom: "10px"}} src="https://www.apple.com/v/mac/home/bi/images/overview/compare/compare_icon_touchbar__f7w2g23m47u6_large.png" alt="" />
                            <p>Touch Bar and Touch ID</p>
                        </div>
                    </div>
                    <div className="Macbook_footer">
                        <a href="#">Learn more  ></a>
                        <a href="#">Learn more  ></a>
                        <a href="#">Learn more  ></a>
                    </div>
                </div>
              </div>
            </div>

            {/* <div className="Mac_products">
                .
            </div> */}
        </div> /* Mac */

    );
}

export default Mac;