import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
function SubTitleForSleep(props){
    return(
        <div className="subTitleForSleep">
            This is SubTitleForEating Title
            Today's sleepTime is {props.sleepTime}
            
        </div>
    );
}
export default SubTitleForSleep; 