import styled from "styled-components";

const heroCSS = {
    Hero: styled.section`
        position: relative;
        display: flex;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding-top: 70px;
        padding-bottom: 70px;
        background: rgb(243, 244, 241);
        align-items: center;
        @media (max-width: 425px) {
            padding-top: 40px;
            padding-bottom: 40px;
        }
    `,
    HeroTop: styled.div`
        position: absolute;
        top: 10px;
        left: 0;
    `,
    BlueLine: styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 342px;
        margin-top: 90px;
        margin-bottom: 50px;
        background: linear-gradient(90deg, rgba(58,125,175,1) 0%, rgba(58,125,175,1) 27%, rgba(24,52,73,1) 100%);
        padding: 0px ${props => (props.$pad)};
    `,
    BlueLineContainer: styled.div`
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 1440px;
    `,
    infoContainer: styled.div`
        display: flex;
        flex-direction: column;
        z-index: 1;
        img{
                display: none;
                width: 83.4px;
        }
        @media (max-width: 665px) {
            width: 60%;
            align-items: center;
            img {
                display: block;
                animation: LogoAnimation 1s ease-out 1s both;
                @keyframes LogoAnimation {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            }
        }
    `,
    H1Container: styled.h1`
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        width: 585px;
        user-select: none;
        @media (max-width: 665px) {
            width: auto;
            align-items: center;
        }
    `,
    H1: styled.span`
        display: block;
        margin-bottom: 10px;
        color: rgb(255, 255, 255);
        font-size: 79.73px;
        font-weight: 350;
        line-height: 80px;
        letter-spacing: 9.5px;
        text-align: left;
        text-transform: uppercase;
        text-shadow: 0px 3.8px 3.8px rgba(0, 0, 0, 0.18);
        left: 0px;
        @media (max-width: 1165px) {
            font-size: 59px;
            line-height: 59px;
        }
        @media (max-width: 665px) {
            font-size: 26.91px;
            line-height: 27px;
            letter-spacing: 4px;
        }
        @media (max-width: 425px) {
        }
    `,
    SubText: styled.span`
        display: flex;
        justify-content: end;
        width: 100%;
        margin: 0 10px;
        color: rgb(255, 255, 255);
        font-style: italic;
        font-size: 30.33px;
        font-weight: 100;
        line-height: 37px;
        letter-spacing: 3px;
        text-align: left;
        text-shadow: 0px 3.8px 3.8px rgba(0, 0, 0, 0.18);
        @media (max-width: 1300px) {
            width: 78%;
            flex-direction: column;
        }
        @media (max-width: 1165px) {
            width: 61%;
            font-size: 23px;
            line-height: 23px;
        }
        @media (max-width: 665px) {
            width: auto;
            text-align: center;
            font-size: 10.47px;
            line-height: 10.5px;
        }
    `,
    HeroImg: styled.div`
        position: absolute;
        right: 0;
        bottom: 0;
        width: 670px;
        height: 490px;
        overflow: hidden;
        pointer-events:none;
        img{
            position: absolute;
            bottom: -10px;
            width: 700px;
            animation: ImgAnimation 1.2s cubic-bezier(.52,0,.27,1.2) 1s both;
        }
        @media (max-width: 1000px) {
            width: 500px;
        }
        @media (max-width: 835px) {
            width: 400px;
            img{
                transform: rotate(-10deg);
            }
        }
        @media (max-width: 665px) {
            width: 350px;
            img{
                transform: rotate(-10deg);
            }
        }
        @media (max-width: 425px) {
            width: 300px;
            img{
                transform: rotate(-15deg);
            }
        }
        @media (max-width: 350px) {
            width: 280px;
        }
        @keyframes ImgAnimation {
            from {
                bottom: -480px;
            }
            to {
                bottom: -10px;
            }
        }
    `,
    HeroButton: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 487px;
        width: 60%;
        min-width: 280px;
        height: 85px;
        margin: 0 20px;
        padding: 0 5px;
        border: 1px solid rgb(40, 45, 48);
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        color: rgb(40, 45, 48);
        font-size: 21.65px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0.05rem;
        text-align: left;
        transition: all 0.3s ease;
        @media (min-width: 1024px) {
            &:hover{
                background: rgb(40, 45, 48);
                color: rgb(243, 244, 241);
                transform: scale(1.1);
            }
        }
        &:active{
            background: rgb(40, 45, 48);
            color: rgb(243, 244, 241);
            transform: scale(0.9);
        }
        @media (max-width: 665px) {
            height: 50px;
            font-size: 12.71px;
        }
    `
}

export default heroCSS