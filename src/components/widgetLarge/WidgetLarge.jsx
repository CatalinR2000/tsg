import './widgetLarge.css';

function WidgetLarge() {

    return(
        <div className={"widgetLarge"}>
            <span className={"widgetLargeTitle"}>Todo list</span>
            <div className={"list"}>
                <ul>
                    <li>
                        <label>
                            <input type={"checkbox"}/>
                            <p>De verificat camera 13 din caminul 5!</p>
                            <span></span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type={"checkbox"}/>
                            <p>De verificat starea bailor din caminul 1!</p>
                            <span></span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type={"checkbox"}/>
                            <p>Studentul cu nr. mat. 3245 nu a achitat 3 luni. De verificat!</p>
                            <span></span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type={"checkbox"}/>
                            <p>De schibat becurile pe de parierele din caminul 3!</p>
                            <span></span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type={"checkbox"}/>
                            <p>De decazat camera 23 din caminul 13!</p>
                            <span></span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type={"checkbox"}/>
                            <p>Verifaca starea paturilor din camera 15 a caminului 4!</p>
                            <span></span>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default WidgetLarge;