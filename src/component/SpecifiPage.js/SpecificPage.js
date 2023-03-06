import { ResponsivePie } from "@nivo/pie"
import { ResponsiveBump } from '@nivo/bump'
import MyResponsive from "./Myresponsive"
import Tables from "./Tables"

const SpecificPage = (props) => {
    return(
      <div>
          <div className="grape-container" style={{ display : "flex", width : "70vw",height : "30vh", marginBottom : "20vh"}}>
                <ResponsivePie className = "ResponsivePie" data = {props.data}></ResponsivePie>
                {/* <ResponsiveBump ></ResponsiveBump> */}
                <MyResponsive className= "MyResponsive" data = {props.sleepData}></MyResponsive>
          </div>
        <div style={{width : "100vw" }}>
          <Tables></Tables>
        </div>
      </div>
        
    )
}
export default SpecificPage