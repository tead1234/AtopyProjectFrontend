import { ResponsivePie } from "@nivo/pie"
import { Chart } from "chart.js"
import ControlledCarousel from "../MainPage/ControlledCarousel";
import Tables from "./Tables"

const SpecificPage = () => {
    return(
      <div>
        <ControlledCarousel>
        
        </ControlledCarousel>
        <div style={{width : "100vw" }}>
          <Tables></Tables>
        </div>
      </div>
        
    )
}
export default SpecificPage