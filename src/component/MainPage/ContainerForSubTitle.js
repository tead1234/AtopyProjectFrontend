import MainTitle from "./mainTitle";
import SubTitleForEating from "./SubTitleForEating";
import SubTitleForExercise from "./SubTitleForExercise";
import SubTitleForSleep from "./SubTitleForSleep";

function ContainerForSubTitle(props){
    return(
        <div className="container-subtitle">
         <SubTitleForEating morning = {props.morning}></SubTitleForEating>
         <SubTitleForSleep sleepTime = {props.sleepTime} ></SubTitleForSleep>
         <SubTitleForExercise exercise = {props.exercise}></SubTitleForExercise>
        </div>
    )
}
export default ContainerForSubTitle; 