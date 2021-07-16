import './newUser.css';
import {Component} from "react";
import Api from "../../axios/Api";

export class NewUser extends Component {
    state = {
        'fName' : '',
        'lName' : '',
        'numberPhone' : '',
        'email' : '',
        'bDay' : '',
        'room' : '',
    }

    handlerChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    handlerSubmit = async (event) =>{
        event.preventDefault()
        await Api.post('/addUser.php', this.state)
        this.props.history.push('/')
    }
    render(){
        return(
            <div className={"newUser"}>
                <h1 className={"newUserTitle"}>New User</h1>
                <form className={"newUserForm"}>
                    <div className={"newUserItem"}>
                        <label>Nume</label>
                        <input type={"text"} name={"fName"} placeholder={"Rusu"} onChange={this.handlerChange} />
                    </div>
                    <div className={"newUserItem"}>
                        <label>Prenume</label>
                        <input type={"text"} name={"lName"} placeholder={"Catalin"} onChange={this.handlerChange} />
                    </div>
                    <div className={"newUserItem"}>
                        <label>Numar de telefon</label>
                        <input type={"number"} name={"numberPhone"} placeholder={"0723674837"} onChange={this.handlerChange} />
                    </div>
                    <div className={"newUserItem"}>
                        <label>Email</label>
                        <input type={"email"} name={"email"} placeholder={"exemplu@yahoo.com"} onChange={this.handlerChange} />
                    </div>
                    <div className={"newUserItem"}>
                        <label>Data nasterii</label>
                        <input type={"date"} name={"bDay"} onChange={this.handlerChange} />
                    </div>
                    <div className={"newUserItem"}>
                        <label>Camera</label>
                        <input type={"text"} name={"room"} placeholder={"exemplu: 23"} onChange={this.handlerChange} />
                    </div>
                    <button className={"newUserButton"}>Create</button>
                </form>
            </div>
        );
    }
}

export default NewUser;