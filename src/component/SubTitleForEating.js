import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function SubTitleForEating(props){
    return(
        
            <div className="subTitleForEating">
                This is SubTitleForEating Title
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
export default SubTitleForEating; 