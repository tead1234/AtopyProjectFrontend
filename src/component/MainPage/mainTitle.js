function MainTitle(props){
    return(
        <div className="mainTitle">
            오늘의 피부 상태는 어떤가요?
            <div className="slot">
            <div class="slots loop">
    <div class="slot slot1">
      <div class="slot-inner background1"></div>
    </div>

    <div class="slot slot2">
      <div class="slot-inner background1"></div>
    </div>

    <div class="slot slot3">
      <div class="slot-inner background1"></div>
    </div>
  </div>
  <button class="btn" onClick='myAction()'>HIT IT!</button>
            </div>
        </div>
    );
}
export default MainTitle; 