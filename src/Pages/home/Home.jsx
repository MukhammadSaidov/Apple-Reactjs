import '../home/Home.css'
import { newCategory, newIphone } from './HomeInfo'


const Home = () => {
    return (
        <div className="home">
            <div className="iphone">
                {newIphone.map((item) => (
                    <div className="itemIphone">
                        <div className="content">
                            <h2>{item.name}</h2>
                            <h6>{item.info}</h6>
                            <h3>{item.infoIpad}</h3>
                            <span >{item.price}</span>
                            <span >{item.offers}</span> 
                            <div className="link">
                                <a href="#">{item.link1}</a>
                                <a href="#">{item.link2}</a>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>

            <div className="category">
                {newCategory.map((item) => (
                        <div className="itemCategory">
                            <div className="content">
                                <div className="imgContent">
                                    <img src={item.url} alt="No Photo" />
                                    <img src={item.url2} alt="No Photo" />
                                </div>
                                <h2>{item.name}</h2>
                                <h2>{item.name2}</h2>
                                <h5>{item.watchSeries}</h5>
                                <h6>{item.info}</h6>
                                <h6>{item.info2}</h6>
                                <div className="link">
                                    <a href="#">{item.link1}</a>
                                    <a href="#">{item.link2}</a>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default Home;