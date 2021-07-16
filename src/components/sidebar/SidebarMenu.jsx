import  './sidebar.css';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HotelIcon from '@material-ui/icons/Hotel';
import PeopleIcon from '@material-ui/icons/People';
import {Link} from "react-router-dom";

function SidebarMenu() {
    return(
        <div className={"sidebar"}>
            <div className={"sidebarWrapper"}>
                <div className={"sidebarMenu"}>
                    <h3 className={"sidebarTitle"}>Dashboard</h3>
                    <ul className={"sidebarList"}>
                        <Link to={"/"} className={"link"}>
                            <li className={"sidebarListItem"}>
                                    <LineStyleIcon className={"sidebarIcon"}/>
                                    Dashboard
                            </li>
                        </Link>
                        <Link to={"/users"} className={"link"}>
                            <li className={"sidebarListItem"}>
                                <PeopleIcon className={"sidebarIcon"}/>
                                Studenti
                            </li>
                        </Link>
                        <Link to={"/payment"} className={"link"}>
                            <li className={"sidebarListItem"}>
                                <AssignmentIcon className={"sidebarIcon"}/>
                                Facturi
                            </li>
                        </Link>
                    </ul>
                    <h3 className={"sidebarTitle"}>Camine</h3>
                    <ul className={"sidebarList"}>
                        <Link to={"/studentRoom"} className={"link"}>
                            <li className={"sidebarListItem"}>
                                <HotelIcon className={"sidebarIcon"}/>
                                Caminul 1
                            </li>
                        </Link>
                        <li className={"sidebarListItem"}>
                            <HotelIcon className={"sidebarIcon"}/>
                            Caminu 2
                        </li>
                        <li className={"sidebarListItem"}>
                            <HotelIcon className={"sidebarIcon"}/>
                            Caminul 3
                        </li>
                        <li className={"sidebarListItem"}>
                            <HotelIcon className={"sidebarIcon"}/>
                            Caminul 4
                        </li>
                        <li className={"sidebarListItem"}>
                            <HotelIcon className={"sidebarIcon"}/>
                            Caminul 5
                        </li>
                        <li className={"sidebarListItem"}>
                            <HotelIcon className={"sidebarIcon"}/>
                            Caminul 6
                        </li>
                        <li className={"sidebarListItem"}>
                            <HotelIcon className={"sidebarIcon"}/>
                            Caminul 7
                        </li>
                        <li className={"sidebarListItem"}>
                            <HotelIcon className={"sidebarIcon"}/>
                            Caminul 8
                        </li>
                        <li className={"sidebarListItem"}>
                            <HotelIcon className={"sidebarIcon"}/>
                            Caminul 9
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default SidebarMenu;