function MainTitle(props){
    return(
        <div className="mainTitle">
            오늘의 피부 상태는 어떤가요? {props.skinState}
        </div>
    );
}
export default MainTitle; 