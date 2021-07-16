import './widgetSmall.css';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PersonIcon from '@material-ui/icons/Person';

function WidgetSmall() {
    return(
        <div className={"widgetSmall"}>
            <span className={"widgetSmallTitle"}>Ultimele achitari</span>
            <ul className={"widgetSmallList"}>
                <li className={"widgetSmallListItem"}>
                    <PersonIcon />
                    <div className={"widgetSmallUser"}>
                        <span className={"widgetSmallUsername"}>Rusu Mihail Catalin</span>
                        <span className={"widgetSmallUserTitle"}>Camera 12</span>
                    </div>
                    <button className={"widgetSmallButton"}>
                        <VisibilityIcon className={"widgetSmallIcon"} />Vezi factura
                    </button>
                </li>
                <li className={"widgetSmallListItem"}>
                    <PersonIcon />
                    <div className={"widgetSmallUser"}>
                        <span className={"widgetSmallUsername"}>Dragulin Iulian</span>
                        <span className={"widgetSmallUserTitle"}>Camera 15</span>
                    </div>
                    <button className={"widgetSmallButton"}>
                        <VisibilityIcon className={"widgetSmallIcon"} />Vezi factura
                    </button>
                </li>
                <li className={"widgetSmallListItem"}>
                    <PersonIcon />
                    <div className={"widgetSmallUser"}>
                        <span className={"widgetSmallUsername"}>Hututui Mihnea</span>
                        <span className={"widgetSmallUserTitle"}>Camera 45</span>
                    </div>
                    <button className={"widgetSmallButton"}>
                        <VisibilityIcon className={"widgetSmallIcon"} />Vezi factura
                    </button>
                </li>
                <li className={"widgetSmallListItem"}>
                    <PersonIcon />
                    <div className={"widgetSmallUser"}>
                        <span className={"widgetSmallUsername"}>Trifan Madalin</span>
                        <span className={"widgetSmallUserTitle"}>Camera 23</span>
                    </div>
                    <button className={"widgetSmallButton"}>
                        <VisibilityIcon className={"widgetSmallIcon"} />Vezi factura
                    </button>
                </li>
                <li className={"widgetSmallListItem"}>
                    <PersonIcon />
                    <div className={"widgetSmallUser"}>
                        <span className={"widgetSmallUsername"}>Lupu Vlad</span>
                        <span className={"widgetSmallUserTitle"}>Camera 54</span>
                    </div>
                    <button className={"widgetSmallButton"}>
                        <VisibilityIcon className={"widgetSmallIcon"} />Vezi factura
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default WidgetSmall;