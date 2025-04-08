import styled from "styled-components";


const footerCSS = {
    Footer: styled.section`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 136px;
        margin-top: auto;
        /* flex-shrink: 0; */
        background: rgb(40, 45, 48);
        padding: 18px ${props => (props.$pad)};
        @media (max-width: 575px) {
            height: 70px;
        }
    `,
    FooterContainer: styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        max-width: 1440px;
    `,
    Point: styled.div`
        display: flex;
        padding: 0 7px;
        min-height: 34px;
        width: 37.5%;
        justify-content: center;
        align-items: center;
        border-right: 1px solid rgb(243, 244, 241);
        &:last-child{
            width: 12.5%;
            border-right: none;
            padding-right: 0;
        }
        &:first-child{
            width: 12.5%;
            padding-left: 0;
        }
       
    `,
    PointImg: styled.div`
        width:fit-content;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1120px) {
            img{
                height: 50px;
            }
        }
        @media (max-width: 575px) {
            img{
                height: 20px;
            }
        }
    `,
    PointInfo: styled.span`
        display: block;
        color: rgb(255, 255, 255);
        font-size: clamp(0.6rem, 1.1vw, 1rem);
        margin-left: clamp(0.2rem, 2.25vw, 3rem);
        font-weight: 250;
        line-height: 140.86%;
        letter-spacing: 4%;
        text-align: left;
        white-space: nowrap;
        @media (max-width: 1120px) {
            margin-left: 0px;
        }
        @media (max-width: 575px) {
            font-size: 6px;
        }
    `
    
}

export default footerCSS