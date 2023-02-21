import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ContainerForSubTitle from './ContainerForSubTitle';
import { Link } from 'react-router-dom';
import MainTitle from './mainTitle';
function MainPage(props){
    return(
        <div className="MainPage">
          <MainTitle skinState = {props.skinState}></MainTitle>,
          <ContainerForSubTitle sleepTime= {props.sleepTime}></ContainerForSubTitle>,
          <Link to= "/specific">
            <Button style={{position : "relative", top : "70px", margin : "20px"}} >더 자세히 알아보기</Button>
          </Link>
          <Link to = "/create">
            <Button variant='secondary' style={{position : "relative", top : "70px"}}>오늘 상태 기록하기</Button>
          </Link>
        </div>
    );
}
export default MainPage; 