import './home.css'
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import Chart from "../../chart/Chart";
import {userData} from "../../../chartData";
import WidgetSmall from "../../widgetSmall/WidgetSmall";
import WidgetLarge from "../../widgetLarge/WidgetLarge";
import Footer from "../../footer/Footer";

function Home() {
    return(
        <div className={"home"}>
            <FeaturedInfo />
            <Chart data={userData} title={"Total fonduri"} grid dataKey/>
            <div className={"homeWidgets"}>
                <WidgetSmall />
                <WidgetLarge />
            </div>
            <Footer />
        </div>
    );
}

export default Home;