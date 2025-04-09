import styled from "styled-components";

const headerCSS = {
    Header: styled.section`
        position: fixed;
        top:0;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 86px;
        padding: 0px ${props => (props.$pad)};
        background: rgba(243, 244, 241, 0.6);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px); /* Для Safari */
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    `,
    HeaderContainer: styled.div`
        display: flex;
        width: 100%;
        max-width: 1440px;
        height: 86px;
        justify-content: space-between;
        align-items: center;
    `,
    LogoContainer: styled.div`
        width: 180px;
        height: 58.2px;
        user-select: none;
        cursor: pointer;
    `,
    MenuDesktopContainer: styled.div`
        display: flex;
        width: ${(770 / 1440) * 100}%;
        max-width: 770px;
        height: 27px;
        justify-content: space-between;
    `,
    MenuMobileContainer: styled.div`
        box-sizing: border-box;
        position: fixed;
        height: calc(100vh - 86px);
        width: 75%;
        margin-top: 86px;
        max-width: 240px;
        background: rgba(194, 196, 191, 0.6);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px); /* Для Safari */
        overflow-y: auto;
        z-index: 1000;
        right: ${props => (props.$transform ? '0px' : '-240px')};
        transition: right 400ms ease-in-out;
        &::-webkit-scrollbar {
            width: 0;
        }
    `,
    MenuMobileContainerWrap: styled.div`
            flex-direction: column;
            margin: 40px 30px 40px 30px;
    `,
    BurgerButton: styled.div`
        display: none;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        height: 36px;
        width: 36px;
        @media (max-width: 992px) { 
            display: flex;
        }
    `,
    BurgerBar: styled.div`
        height: 2px;
        width: 100%;
        background-color: #000;
        border-radius: 1px;
        transition: transform 400ms ease-in-out;
        
        &:first-child{
            transform-origin: center;
            transform: ${props => (props.$transform ? 'translateY(17px) rotate(-225deg) scaleX(1.4142)' : '0')};
        } 
        &:last-child{
            transform-origin: center;
            transform: ${props => (props.$transform ? 'translateY(-17px) rotate(225deg) scaleX(1.4142)' : '0')};
        }
    `,
    BurgerBarMid: styled.div`
        height: 2px;
        width: ${props => (props.$transform ? '0%' : '80%')};
        background-color: #000;
        border-radius: 1px;
        transition: width 400ms cubic-bezier(.52,0,.27,2);
    `,
    MenuButton: styled.a`
        position: relative;
        display: flex;
        width: fit-content;
        height: 27px;
        cursor: pointer;
        color: rgb(0, 0, 0);
        user-select: none;
        align-items: center;
        border-bottom: 2px solid rgb(0, 0, 0);
        border-color: ${props => props.$focus ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)'};
        transition: all 0.3s linear;
        font-size: clamp(0.7rem, 0.85vw, 1rem);
        font-weight: 500;
        line-height: 14px;
        letter-spacing: 0.08em;
        text-align: left;
        text-transform: uppercase;

        @media (max-width: 992px) { 
            font-weight: 300;
            width: 100%;
            font-size: clamp(1rem, 0.85vw, 1rem);
            padding-left: 18px;
            margin-bottom: 15px;
            border: 1px solid rgb(0, 0, 0);
            border-color: ${props => props.$focus ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)'};
            border-radius: 3px;
            transition: background-color 100ms ease-in-out, border-color 0.3s linear;
            &:last-child{
                margin-bottom: 0px;
            }
            &:before{
                position: absolute;
                content: '';
                width: 2px;
                height: 2px;
                border-radius: 50%;
                background-color: #000;
                top:50%;
                left: 9px;
                transform: translate(50%, -50%);
            }
            &:active{
                background-color: rgba(194, 196, 191, 0.8)
            }
        }
    `,
}

export default headerCSS