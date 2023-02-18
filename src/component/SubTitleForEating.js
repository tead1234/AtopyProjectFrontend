import { Button } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function SubTitleForEating(props){
    return(
        <div className="subTitleForEating">
            This is SubTitleForEating Title
            Today's sleepTime is {props.sleepTime}
            <Button variant="primary">Primary</Button>{' '}
        </div>
    );
}
export default SubTitleForEating; 