import MainTitle from "./mainTitle";
import SubTitleForEating from "./SubTitleForEating";
import SubTitleForExercise from "./SubTitleForExercise";
import SubTitleForSleep from "./SubTitleForSleep";

function ContainerForSubTitle(props){
    return(
        <div className="container-subtitle">
         <SubTitleForEating sleepTime = {props.sleepTime}></SubTitleForEating>
         <SubTitleForSleep sleepTime = {props.sleepTime} ></SubTitleForSleep>
         <SubTitleForExercise></SubTitleForExercise>
        </div>
    )
}
export default ContainerForSubTitle; 