import { ResponsivePie } from "@nivo/pie"
import { Chart } from "chart.js"
import Tables from "./Tables"
const data = [
{
  "id": "hack",
  "label": "hack",
  "value": 221,
  "color": "hsl(78, 70%, 50%)"
},
{
  "id": "haskell",
  "label": "haskell",
  "value": 72,
  "color": "hsl(342, 70%, 50%)"
},
{
  "id": "python",
  "label": "python",
  "value": 116,
  "color": "hsl(42, 70%, 50%)"
},
{
  "id": "css",
  "label": "css",
  "value": 232,
  "color": "hsl(193, 70%, 50%)"
},
{
  "id": "c",
  "label": "c",
  "value": 468,
  "color": "hsl(273, 70%, 50%)"
}
];
const SpecificPage = () => {
    return(
      <div>
          <div style={{ display : "flex", width : "100vw",height : "30vh", marginBottom : "20vh"}}>
          <ResponsivePie data = {data}></ResponsivePie>
          </div>
        <div style={{width : "100vw" }}>
          <Tables></Tables>
        </div>
      </div>
        
    )
}
export default SpecificPage