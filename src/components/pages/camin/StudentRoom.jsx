import './studentroom.css';
import Footer from "../../footer/Footer";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import {useState} from "react";
import {userRows} from "../../userData";
import {IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";
import {DeleteOutline} from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import * as React from "react";
import {DataGrid} from "@material-ui/data-grid";
import DialogAddRoom from "../../dialogAddRoom/DialogAddRoom";

function StudentRoom(){

    const [data, setData] = useState(userRows);
    const handelDetele = (id)=>{
        setData(data.filter((item)=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'Name', headerName: 'Nume', width: 130 },
        {
            field: 'age',
            headerName: 'Varsta',
            width: 130,
        },
        {
            field: 'room',
            headerName: 'Camera',
            width: 130,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'phoneNumber',
            headerName: 'Numar de telefon',
            width: 190,
        },
        {
            field: 'action',
            headerName: 'Sterge/Editeaza',
            width: 200,
            renderCell: (param)=>{
                return(
                    <div>
                        <IconButton>
                            <Link>
                                <DeleteOutline className={"buttonDelete"} onClick={() => handelDetele(param.row.id)} />
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link to={"/user/"+param.row.id}>
                                <EditIcon className={"buttonEdit"} />
                            </Link>
                        </IconButton>
                    </div>
                )
            }
        },

    ];

    return(
        <div className={"studentRoom"}>
            <FeaturedInfo />
            <br />


            <div className={"studentContent"}>
                <div className={"studentContentLeft"}>
                        <DialogAddRoom />
                            <ul className={"studentFitter"}>
                                <li className={"studentFitterItem"}>
                                    Camera 1
                                </li>
                                <li className={"studentFitterItem"}>
                                    Camera 2
                                </li>
                                <li className={"studentFitterItem"}>
                                    Camera 3
                                </li>
                                <li className={"studentFitterItem"}>
                                    Camera 4
                                </li>
                                <li className={"studentFitterItem"}>
                                    Camera 5
                                </li>
                                <li className={"studentFitterItem"}>
                                    Camera 6
                                </li>
                                <li className={"studentFitterItem"}>
                                    Studenti neachitati
                                </li>
                                <li className={"studentFitterItem"}>
                                    Studenti bugetati
                                </li>
                                <li className={"studentFitterItem"}>
                                    Studenti cu taxa
                                </li>
                            </ul>
                </div>
                <div className={"studentContentRight"}>
                    <div className={"studentRoomList"}>
                        <DataGrid  rows={data} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default StudentRoom;