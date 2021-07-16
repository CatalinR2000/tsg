import './userList.css';
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {IconButton} from "@material-ui/core";
import {DeleteOutline} from "@material-ui/icons";
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom";
import {userRows} from "../../userData";




function UserList(){


       const columns = [
           {field: 'id', headerName: 'ID', width: 100},
           {field: 'Name', headerName: 'Nume', width: 130},
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
               renderCell: (param) => {
                   return (
                       <div>
                           <IconButton>
                               <Link>
                                   <DeleteOutline className={"buttonDelete"}/>
                               </Link>
                           </IconButton>
                           <IconButton>
                               <Link to={"/user/" + param.row.id}>
                                   <EditIcon className={"buttonEdit"}/>
                               </Link>
                           </IconButton>
                       </div>
                   )
               }
           },

       ];

           return(
               <div className={"userList"}>
                   <Link to={"/newUser"}>
                       <button className={"userAddButton"}>Student nou</button>
                   </Link>
                   <DataGrid rows={userRows} disableSelectionOnClick columns={columns} pageSize={10} checkboxSelection />
               </div>
           );


}

export  default UserList;