import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function SubTitleForEating(props){
    return(
        
            <div className="subTitleForEating">
                피부에 안좋은 영향을 준 식사들
                <br></br>
                <ul>
                    <li>{props.morning}</li>
                    <li>{props.lunch}</li>
                    <li>{props.dinner}</li>
                </ul>
            </div>
            
    );
}
export default SubTitleForEating; 