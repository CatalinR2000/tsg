import './user.css'
import HotelIcon from '@material-ui/icons/Hotel';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationCityIcon from '@material-ui/icons/LocationCity';

function User() {
    return(
        <div className={"user"}>
           <div className={"userTitleContainer"}>
                <h1>Edit User</h1>
            </div>
            <div className={"userContainer"}>
                <div className={"userShow"}>
                    <div className={"userShowTop"}>
                        <div className={"userShowTopTitle"}>
                            <span className={"userShowUsername"}>Rusu Mihial Catalin</span>
                            <span className={"userShowUserTitle"}></span>
                        </div>
                    </div>
                    <div className={"userShowButtom"}>
                        <span className={"userShowTitle"}>Detali despre sudent</span>
                        <div className={"userShowInfo"}>
                            <HotelIcon className={"userShowIcon"}  />
                            <span className={"userShowInfoTitle"}>Camera 12</span>
                        </div>
                        <div className={"userShowInfo"}>
                            <CalendarTodayIcon className={"userShowIcon"} />
                            <span className={"userShowInfoTitle"}>12/12/2021</span>
                        </div>
                        <div className={"userShowInfo"}>
                            <CreditCardIcon className={"userShowIcon"} />
                            <span className={"userShowInfoTitle"}>Achitat</span>
                        </div>
                    </div>
                    <div className={"userShowButtom"}>
                        <span className={"userShowTitle"}>Contact Detailes</span>
                        <div className={"userShowInfo"}>
                            <PhoneAndroidIcon className={"userShowIcon"} />
                            <span className={"userShowInfoTitle"}>0231234756</span>
                        </div>
                        <div className={"userShowInfo"}>
                            <MailOutlineIcon className={"userShowIcon"} />
                            <span className={"userShowInfoTitle"}>catalin@yahoo.com</span>
                        </div>
                        <div className={"userShowInfo"}>
                            <LocationCityIcon className={"userShowIcon"} />
                            <span className={"userShowInfoTitle"}>Brasov</span>
                        </div>
                    </div>
                </div>
                <div className={"userUpdate"}>
                    <span className={"userUpdateTitle"}>Modifica</span>
                    <form className={"userUpdateForm"}>
                        <div className={"userUpdateLeft"}>
                            <div className={"userUpdateItem"}>
                                <label>Nume</label>
                                <input type={"text"} className={"userUpdateInput"} placeholder={"Rusu"}></input>
                            </div>
                            <div className={"userUpdateItem"}>
                                <label>Prenume</label>
                                <input type={"text"} className={"userUpdateInput"} placeholder={"Catalin"}></input>
                            </div>
                            <div className={"userUpdateItem"}>
                                <label>Numar de telefon</label>
                                <input type={"number"} className={"userUpdateInput"} placeholder={"0732765234"}></input>
                            </div>
                            <div className={"userUpdateItem"}>
                                <label>Email</label>
                                <input type={"email"} className={"userUpdateInput"} placeholder={"exemplu@yahoo.com"}></input>
                            </div>

                            <div className={"userUpdateItem"}>
                                <label>Data nasterii</label>
                                <input type={"date"} className={"userUpdateInput"}></input>
                            </div>
                            <div className={"userUpdateItem"}>
                                <label>Camera</label>
                                <input type={"number"} className={"userUpdateInput"} placeholder={"exemplu: 23"}></input>
                            </div>
                            <div className={"userUpdateItem"}>
                                <label>Status plata</label>
                                <input type={"text"} className={"userUpdateInput"} placeholder={"achitat/neachitat"}></input>
                            </div>
                            <button className={"userUpdateButton"}>Updatre</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export  default User;