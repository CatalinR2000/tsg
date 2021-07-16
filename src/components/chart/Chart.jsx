import './chart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart({title, data, dataKey, grid}) {

    return(
        <div className={"chart"}>
            <h3 className={"chartTitle"}>{title}</h3>
            <ResponsiveContainer aspect={4/1} width={"100%"}>
                <LineChart data={data}>
                    <XAxis dataKey={"name"} stroke={"#5550bd"}/>
                    <YAxis/>
                    {grid && <Line type={"monotone"} dataKey={"Active user"} />}
                    {grid &&<Line type={"monotone"} dataKey={"Money"} />}
                    <Tooltip />
                    <CartesianGrid stroke={"#e0dfdf"}  strokeDasharray={5} />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;