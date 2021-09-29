import React from 'react';
import '../store/Store.css'
import {StoreHeader, MacIpad} from './StoreJson'

const Store = () => {
    return (
       <div className="Store">
            <div className="iPad_title">
            {StoreHeader.map((item) =>
                <div className="iPad_wrapper">
                    <div className="iPad_item">
                        <div className="iPad_texts">
                        <h4>{item.title}</h4>
                        <h2>{item.buyIpad}</h2>
                        <p>{item.text}</p>
                        <a href="#">{item.learnMore}</a>
                    </div>
                    <img src={item.img} alt="iPad" />
                    </div>
                </div>
            )}
        </div>

        <div className="MacIpad">
            {MacIpad.map((item) =>
                <>
                <h2>{item.MacIpadtitle}</h2>
                <h4>{item.MacIpadtext}</h4>
                </>
            )}
        </div>
        
        <div className="AppleCatalog">
            <div className="Title">
                <h2>Mac</h2>
                <p>Education pricing shown for all Mac models.</p>
            </div>
            <div className="Container">
                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-segment_GEO_US?wid=400&hei=300&fmt=png-alpha&.v=1604368878000" />
                    <p>MacBook Air</p>
                    <p>From $899</p>
                </div>

                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-pro-segment-2019_GEO_US?wid=400&hei=300&fmt=png-alpha&.v=1604368883000" />
                    <p>MacBook Pro</p>
                    <p>From $1199</p>
                </div>

                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-segment_GEO_US?wid=400&hei=300&fmt=png-alpha&.v=1617749870000" />
                    <p>iMac</p>
                    <p>From $1249</p>
                </div>
                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-segment-2019?wid=400&hei=300&fmt=png-alpha&.v=1572897645347" />
                    <p>Mac Pro</p>
                    <p>From $5599</p>
                </div>
                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-segment-202011?wid=400&hei=300&fmt=png-alpha&.v=1603469675000" />
                    <p>Mac mini</p>
                    <p>From $649</p>
                </div>
                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/pro-display-segment-2019?wid=400&hei=300&fmt=png-alpha&.v=1572897645570" />
                    <p>Pro Display XDR</p>
                    <p>From $4599</p>
                </div>

            </div>
                <div className="MacBook">
                    <div className="text">
                        <h2>Trade in your eligible Mac and get credit toward a new Macbook.<sup>1</sup></h2>
                        <p>One more reason it's a great time to buy a new Mac.</p>
                        <a href="#">Learn more ></a>
                    </div>
                    <img className="iMac" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-trade-in-mac-201706_GEO_US?wid=640&hei=420&fmt=png-alpha&.v=1604022731000" />
                </div>

                <div className="Title">
                    <h2>iPad</h2>
                    <p>Education pricing shown for all Mac models.</p>
                </div>

                <div className="Container">

                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-segment-ipad-pro?wid=138&hei=95&fmt=png-alpha&.v=1617749870000" />
                    <p>iPad Pro</p>
                    <p>From $749</p>
                </div>

                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-segment-ipad-air-202009?wid=400&hei=300&fmt=png-alpha&.v=1599405212000" />
                    <p>iPad Air</p>
                    <p>From $549</p>
                </div>

                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-segment-ipad-202109?wid=400&hei=300&fmt=png-alpha&.v=1629768130000" />
                    <p>iPad</p>
                    <p>From $309</p>
                </div>

                <div className="Items">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-segment-ipad-mini-202109?wid=138&hei=95&fmt=png-alpha&.v=1629768130000" />
                    <p>iPad mini</p>
                    <p>From $449</p>
                </div>

            </div>
                <div className="Content">
                    <div className="item">
                        <a href="#">Special financing</a>
                        <p>Apply for special financing <br/> plus rewards.</p>
                        <a href="#">Learn more ></a>
                    </div>

                    <div className="item">
                        <a href="#">Apple Refurbished Products</a>
                        <p>All tested and certified, <br /> including a one-year <br /> warranty.</p>
                        <a href="#">Learn more ></a>
                    </div>

                    <div className="item">
                        <a href="#">AppleCare+</a>
                        <p>All tested and certified, <br /> including a one-year <br /> warranty.</p>
                        <a href="#">Learn more ></a>
                    </div>
                </div>

                <div className="products_container">
                    <div className="image">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/edu-accessories-201903?wid=1068&hei=480&fmt=png-alpha&.v=1618079611000" alt="" />
                    </div>
                    <div className="text_one">
                        <h2>Accessories</h2>
                        <p>Carefuly selected to help you get the most from your Apple products.</p>
                        <a href="#">Shop now ></a>
                    </div>

                    <div className="text_two">
                            <div className="texts">
                                <h2>Apple Music Student <br /> Plan now comes witch <br /> Apple TV+ for free. <sup>2</sup></h2>
                                <button>Try it free</button>
                                <a href="#">Learn more about Apple TV+  ></a>
                            </div>
                            <div className="image">
                                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-plus-education-202002_GEO_US?wid=486&hei=409&fmt=png-alpha&.v=1618941141000" alt="" />
                            </div>
                    </div>
                    <div className="text_three">
                        <div className="text_end">
                            <h2>Apple for College</h2>
                            <p>The most powerful tools for learning  And whatever's next.</p>
                            <a href="#">Learn more ></a>
                        </div>
                    </div>
                    
                    <div className="collection">
                        <div className="photos">
                            <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-pro-apps-bundle-201702?wid=434&hei=66&fmt=jpeg&qlt=95&.v=1612565698000" alt="" />
                        </div>
                        <div className="text_collection">
                            <h2>Five amazing apps. <br /> One powerful collection.</h2>
                            <p>Unleash your creative potential with the Pro Apps Bundle for qualifying college students, teachers, and education institutions. Get all five professional applications for video and music at a special price — including Final Cut Pro, Motion, and Compressor, plus Logic Pro and MainStage</p>
                            <a href="#"> Buy  ></a>
                        </div>
                    </div>
                </div>

                <div className="image_wrapper">
                    <div className="image_end">
                        <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/today-at-apple-201706?wid=1440&hei=480&fmt=png-alpha&.v=1524766961868" alt="" />
                     </div>
                    <div className="image_text">
                        <h2>today at apple</h2>
                        <p>Discover inspiring sessions to amplify your love of music, make the most of every picture, or take your coding to the next level. Happening every day at Apple.</p>
                        <a href="#">See what's happening  nearby ></a>
                    </div>
                </div>

         </div>
       </div>
        
    );
};


export default Store;