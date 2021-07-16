import './featuredInfo.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function FeaturedInfo() {
    return(
        <div className={"featured"}>
            <div className={"featuredItem"}>
                <span className={"featuredTitle"}>Fonduri totale:</span>
                <div className={"featuredMoneyContainer"}>
                    <span className={"featuredMoney"}>$3,323.23</span>
                    <span className={"featuredMoneyRate"}>-43
                    <ArrowDownwardIcon className={"arrowNegative"} />
                    </span>
                </div>
                <span className={"featuredSub"}>Comparat cu luna trecuta</span>
            </div>

            <div className={"featuredItem"}>
                <span className={"featuredTitle"}>Total studenti</span>
                <div className={"featuredMoneyContainer"}>
                    <span className={"featuredMoney"}>1890</span>
                    <span className={"featuredMoneyRate"}>-10
                    <ArrowDownwardIcon className={"arrowNegative"} />
                    </span>
                </div>
                <span className={"featuredSub"}>Comparat cu luna trecuta</span>
            </div>

            <div className={"featuredItem"}>
                <span className={"featuredTitle"}>Cheltuieli totale</span>
                <div className={"featuredMoneyContainer"}>
                    <span className={"featuredMoney"}>$3,366.23</span>
                    <span className={"featuredMoneyRate"}>+43
                    <ArrowUpwardIcon className={"arrowPositive"}/>
                    </span>
                </div>
                <span className={"featuredSub"}>Comparat cu luna trecuta</span>
            </div>
        </div>
    );
}

export  default FeaturedInfo;