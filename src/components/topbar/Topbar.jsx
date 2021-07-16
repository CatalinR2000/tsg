import './topbar.css';
import {Badge, IconButton} from "@material-ui/core";
import {NotificationsNone} from "@material-ui/icons";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';

function Topbar() {
    return(
        <div className={"topbar"}>
            <div className={"topbarWrapper"}>
                <div className={"topLeft"}>
                    <span className={"logo"}>AdminPanel</span>
                </div>
                <div className={"topRight"}>
                        <IconButton>
                            <Badge badgeContent={4} color={"secondary"}>
                                <NotificationsNone/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={4} color={"secondary"}>
                                <MailOutlineIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <SettingsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge>
                                <SupervisorAccountIcon />
                            </Badge>
                        </IconButton>
                </div>
            </div>
        </div>
    );
}
export default Topbar;