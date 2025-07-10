import styled from "styled-components";

const mainCSS = {
    Body: styled.section`
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-top: 86px;
    `,
    NewSection: styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 77px ${props => (props.$pad)};
        background-color: rgb(255, 255, 255);
        @media (max-width: 425px) {
            padding-top: 40px;
            padding-bottom: 40px;
        }
    `,
    NewSectionContainer: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
        max-width: 1400px;
        /* background-color: red; */
        *{
            /* background-color: green; */
        }    
    `,
    Title: styled.h2`
        display: block;
        width: 100%;
        color: rgb(0, 0, 0);
        font-size: 46.37px;
        font-weight: 500;
        line-height: 47px;
        letter-spacing: 0.05rem;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 27.95px;
        }
        @media (max-width: 425px) {
            font-size: 20px;
        }
    `,
    Conclusion: styled.div`
        width: fit-content;
        color: rgb(0, 0, 0);
        font-size: 25.97px;
        font-weight: 500;
        line-height: 32px;
        letter-spacing: 0.06rem;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 22.95px;
            line-height: 23px;
        }
        @media (max-width: 425px) {
            font-size: 12.29px;
            line-height: 13px;
        }
    `,
    Slider: styled.div`
        width: 100%;
        height: 442px;
        margin: 70px 0;
        padding: 0 16px;
        @media (max-width: 1400px) {
            margin: 70px 30px;
        }
        @media (max-width: 665px) {
            margin: 30px 15px;
        }
    `,
}

export default mainCSS;