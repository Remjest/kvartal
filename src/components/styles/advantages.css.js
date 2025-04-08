import styled from "styled-components";
import mainCSS from "./main.css";

const advantagesCSS = {
    Advantages: styled(mainCSS.NewSection)``,
    AdvantagesContainer: styled(mainCSS.NewSectionContainer)``,
    Title: styled(mainCSS.Title)``,
    BlocksContainer: styled.div`
        display: grid;
        margin: 70px 98px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        column-gap: 67px;
        row-gap: 70px;
        @media (max-width: 1400px) {
            margin: 70px 30px;
        }
        @media (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 47px;
            row-gap: 50px;
        }
        @media (max-width: 665px) {
            margin: 30px 15px;
            column-gap: 37px;
            row-gap: 40px;
        }
        @media (max-width: 425px) {
            column-gap: 10px;
            row-gap: 13px;
        }
    `,
    Block: styled.div`
        display: flex;
        flex-direction: column;
    `,
    BlockTop: styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 17.5px;
        @media (max-width: 665px) {
            flex-direction: row;
            align-items: center;
            margin-bottom: 8.6px;
        }
    `,
    BlockImg: styled.div`
        width: 49.5px;
        height: 49.5px;
        margin-right: 5px;
        margin-bottom: 20px;
        img{
            width: 49.5px;
            height: 49.5px;
        }
        @media (max-width: 665px) {
            width: 19.8px;
            height: 19.8px;
            margin-bottom: 0px;
            img{
                width: 19.8px;
                height: 19.8px;
            }   
        }
    `,
    BlockTitle: styled.div`
        width: 100%;
        color: rgb(0, 0, 0);
        font-size: 17.74px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 0.06rem;
        text-align: left;
        @media (max-width: 665px) {
            font-size: 10.5px;
            line-height: 13px;
            margin-bottom: 0px;
        }
    `,
    BlockDesk: styled.div`
        /* background-color: #fff; */
        /* margin-top: auto; */
        color: rgb(26, 26, 26);
        font-size: 15.43px;
        font-weight: 300;
        line-height: 19px;
        letter-spacing: 0.05rem;
        text-align: left;
        @media (max-width: 665px) {
            font-size: 8.6px;
            line-height: 11px;
        }
    `,
    Conclusion: styled(mainCSS.Conclusion)``,

}

export default advantagesCSS