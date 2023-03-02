import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function SubTitleForExercise(props){
    return(
        <div className="subTitleForExercise">
            피부에 영향을 준 운동시간
            <br></br>
            {props.exercise}
            
        </div>
    );
}
export default SubTitleForExercise; 