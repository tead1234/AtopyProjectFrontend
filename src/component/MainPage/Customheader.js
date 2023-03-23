import styled from "styled-components";

const Header = styled.header` 
        width : 100vw;
        height : 100px;
        background: white;
        box-shadow: 1px 1px 1px 1px gray;
        margin-bottom : 100px;
    `;
function Customheader () {
    
    return (
        <Header>
            <div style={ {display : "flex", alignContent : "center"}}>
            <div>
                main image
            </div>
            <div>
                hi
            </div>
            <div>
                bye
            </div>
            </div>
            
        </Header>
    )
}
export default Customheader