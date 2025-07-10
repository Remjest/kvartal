import styled from "styled-components";
import mainCSS from "./main.css";
import Background from "../../img/BlockServices/background.png"

const servicesCSS = {
    Services: styled(mainCSS.NewSection)`
        background: url(${Background}) bottom center no-repeat ;
        @media (min-width: 1440px) {
            background: url(${Background}) bottom center/100% no-repeat ;
        }
        @media (max-width: 610px) {
            background: url(${Background}) -350px 80%  no-repeat;
        }
    `,
    ServicesContainer: styled(mainCSS.NewSectionContainer)``,
    Title: styled(mainCSS.Title)``,
    SliderContainer: styled(mainCSS.Slider)`
        height: 362px;
        overflow: visible;
        @media (max-width: 1024px) {
            width: calc(100% + 100px);
            padding: 0;
        }
        @media (max-width: 768px) {
            height: 252px;
        }
        @media (max-width: 425px) {
            width: calc(100% + 40px);
        }
    `,
    Slide: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 42px 27px;
        aspect-ratio: 1/1;
        height: 362px;
        margin: 0 30px;
        border-radius: 15px;
        backdrop-filter: blur(4.5px);
        -webkit-backdrop-filter: blur(4.5px);
        background: rgba(40, 45, 48, 0.55);
        font-size: 120px;
        @media (max-width: 768px) {
            padding: 29px 19px;
            height: 252px;
        }
        @media (max-width: 425px) {
            margin: 0 10px;
        }
    `,
    SliderTop: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 26px;
    `,
    SlideTitle: styled.div`
        color: rgb(255, 255, 255);
        font-size: 24.36px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0.05rem;
        @media (max-width: 768px) {
            font-size: 17px;
            line-height: 21px;
        }
    `,
    SlideText: styled.div`
        color: rgb(255, 255, 255);
        font-size: 16.87px;
        font-weight: 275;
        line-height: 21px;
        letter-spacing: 0.05rem;
        @media (max-width: 768px) {
            font-size: 11.8px;
            line-height: 14px;
        }
    `,
    SlideImg: styled.div`
        width: 48px;
        height: 48px;
        img {
            width: 48px;
            height: 48px;
        }
        @media (max-width: 768px) {
            width: 28px;
            height: 28px;
            img {
                width: 28px;
                height: 28px;
            }
        }
    `,
    Reviews: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 46px 40px;
        border-radius: 22px;
        backdrop-filter: blur(4.5px);
        -webkit-backdrop-filter: blur(4.5px);
        background: rgba(40, 45, 48, 0.55);
        @media (max-width: 610px) {
            padding: 16px;
        }
    `,
    ReviewsTitle: styled.div`
        margin-bottom: 21px;
        color: rgb(255, 255, 255);
        font-size: 45.81px;
        font-weight: 600;
        line-height: 56px;
        letter-spacing: 0.04rem;
        @media (max-width: 768px) {
            font-size: 27.95px;
            line-height: 28px;
        }
        @media (max-width: 425px) {
            margin-bottom: 14px;
            font-size: 20px;
            line-height: 28px;
        }
    `,
    ReviewsContainer: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    `,
    Review: styled.div`
        width: 60.3%;
        padding: 27px 43px;
        border-radius: 11px;
        background-color: rgba(40, 45, 48, 0.82);
        &:nth-child(2){
            margin: 50px 0;
            margin-left: auto;
        }
        @media (max-width: 1000px) {
            width: 100%;
            &:nth-child(2){
                margin: 30px 0;
            }
        }
        @media (max-width: 610px) {
            padding: 14px 9px;
            &:nth-child(2){
                margin: 15px 0;
            }
        }
    `,
    ReviewTop: styled.div`
        display: flex;
        margin-bottom: 17.8px;
        @media (max-width: 610px) {
            margin-bottom: 10px;
        }
    `,
    ReviewTopRight: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 27px;
        @media (max-width: 610px) {
            margin-left: 15px;
        }
    `,
    RewiewDesk: styled.div`
        color: rgb(255, 255, 255);
        font-size: 18.41px;
        font-weight: 100;
        line-height: 22px;
        letter-spacing: 0.04rem;
        img{
            height: 18px;
        }
        @media (max-width: 610px) {
            font-size: 10.66px;
            line-height: 13px;
            img{
                height: 11px;
            }
        }
    `,
    ReviewAvatar: styled.div`
        img{
            height: 61px;
        }
        @media (max-width: 610px) {
            img{
                height: 35px;
            }
        }
    `,
    ReviewName: styled.div`
        color: rgb(255, 255, 255);
        font-size: 21.12px;
        font-weight: 275;
        line-height: 26px;
        letter-spacing: 0.04rem;
        @media (max-width: 610px) {
            font-size: 12.23px;
            line-height: 13px;
        }
    `,
    ReviewStars: styled.div`
        img{
            height: 31px;
        }
        @media (max-width: 610px) {
            img{
                height: 18.4px;
            }
        }
    `,


}

export default servicesCSS