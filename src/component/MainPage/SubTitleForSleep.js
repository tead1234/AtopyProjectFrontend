import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
function SubTitleForSleep(props){
    return(
        <div className="subTitleForSleep">
            피부에 안좋은 영향을 준 수면시간
            <br></br>
            {props.sleepTime}
            
        </div>
    );
}
export default SubTitleForSleep; 