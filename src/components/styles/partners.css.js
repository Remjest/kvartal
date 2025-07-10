import styled from "styled-components";
import mainCSS from "./main.css";

const partnersCSS = {
    Partners: styled(mainCSS.NewSection)`
    `,
    PartnersContainer: styled(mainCSS.NewSectionContainer)``,
    Title: styled(mainCSS.Title)``,
    SliderContainer: styled(mainCSS.Slider)`
        height: calc(362px + 3rem);
        overflow: visible;
        @media (max-width: 768px) {
            height: calc(252px + 3rem);
            padding: 0;
        }
        @media (max-width: 425px) {
            width: calc(100% + 40px);
        }
    `,
    Slide: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1/1;
        height: 362px;
        /* margin: 0 36px; */
        border-radius: 15px;
        font-size: 120px;
        @media (max-width: 768px) {
            height: 252px;
        }
    `,
    SlideImg: styled.div`
        height: 100%;
        *{
            height: 100%;
        }
    `,
    Subtitle: styled(mainCSS.Conclusion)`
        margin-bottom: 45px;
        color: rgb(0, 0, 0);
        font-size: 32.73px;
        font-weight: 300;
        line-height: 40px;
        letter-spacing: 0.04rem;
        @media (max-width: 768px) {
            font-size: 22.95px;
            line-height: 23px;
        }
        @media (max-width: 425px) {
            margin-bottom: 25px;
            line-height: 13px;
        }
    `,
    Guilds: styled.div`
        display: flex;
        justify-content: space-between;
        width: 72%;
        @media (max-width: 545px) {
            width: 90%;
        }
        @media (max-width: 365px) {
            width: 100%;
        }
    `,
    Guild: styled.div`
        padding: 10px;
        overflow: hidden;
        border: 2px solid rgb(40, 45, 48);
        border-radius: 5px;
        animation: GuildAnimation 1.7s linear infinite both ;
        img{
            height: 98px;
        }
        @media (max-width: 1024px) {
            img{
                height: 70px;
            }
        }
        @media (max-width: 768px) {
            img{
                height: 49px;
            }
        }
        @media (max-width: 425px) {
            img{
                height: 41px;
            }
        }
        @media (max-width: 365px) {
            padding: 5px;
        }
        @keyframes GuildAnimation {
            from {
                transform:scale(0.95);
            }
            50% {
                transform:scale(1);
            }
            to {
                transform:scale(0.95);
            }
        }
    `,
}

export default partnersCSS