import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function SubTitleForExercise(props){
    return(
        <div className="subTitleForExercise">
            This is SubTitleForExercise Title
            Today's sleepTime is {props.sleepTime}
            <div style={
                {position : "relative",
                top : "50px",
               }
                }>
                <Button>click</Button>
            </div>
        </div>
    );
}
export default SubTitleForExercise; 