import styled from "styled-components";
import mainCSS from "./main.css";

const contactsCSS = {
    Contacts: styled(mainCSS.NewSection)`
        background: rgb(243, 244, 241);
    `,
    ContactsContainer: styled(mainCSS.NewSectionContainer)`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        @media (max-width: 1340px) {
            flex-direction: column-reverse;
        }
    `,
    Title: styled(mainCSS.Title)`
        display: flex;
        justify-content: center;
        margin-bottom: 61px;
        @media (max-width: 920px) {
            margin-bottom: 30px;
        }
    `,
    Map: styled.div`
        aspect-ratio: 676 / 713;
        width: 65%;
        border-radius: 19px;
        overflow: hidden;
        @media (max-width: 1340px) {
            width: 95%;
            aspect-ratio: 2 / 1;
        }
    `,
    Info: styled.div`
        display: flex;
        flex-direction: column;
        margin-left: 68px;
        @media (max-width: 1340px) {
            margin-left: 0px;
            margin-bottom: 75px;
        }
        @media (max-width: 920px) {
            margin-bottom: 35px;
        }
    `,
    PointContainer: styled.div`
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        row-gap: 75px;
        column-gap: 75px;
        @media (max-width: 1340px) {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 30px;
            column-gap: 30px;
        }
        @media (max-width: 785px) {
            grid-template-columns: repeat(1, 1fr);
        }
        @media (max-width: 340px) {
            row-gap: 10px;
            column-gap: 30px;
        }
    `,
    Point: styled.div`
        display: flex;
        &:last-child{
            margin-bottom: 0px;
        }
        @media (max-width: 1340px) {
            padding: 10px;
            border-radius: 5px;
        }
        @media (min-width: 1024px) {
            &:first-child,
            &:nth-child(2){
                &:hover{
                    transform: scale(1.1);
                }
            }
        }
        &:first-child,
        &:nth-child(2){
            transition: all 0.2s ease-in-out;
            &:active{
                transform: scale(0.8);
            }
        }
    `,
    PointImg: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 21.8px;
        img {
            height: 56.23px;
        }
        
    `,
    Pointinfo: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,
    PointTitle: styled.div`
        display: flex;
        align-items: center;
        color: rgb(0, 0, 0);
        font-size: 32px;
        font-weight: 400;
        line-height: 39px;
        letter-spacing: 0.04rem;
        @media (max-width: 920px) {
            font-size: 24px;
            line-height: 25px;
        }
        @media (max-width: 340px) {
            font-size: 14px;
            line-height: 15px;
        }
    `,
    PointDesk: styled.div`
        margin-top: 10px;
        color: rgb(0, 0, 0);
        font-size: 24px;
        font-weight: 275;
        line-height: 29px;
        letter-spacing: 0.04rem;
        a{
            text-decoration: none;
            color: #000;
        }
        @media (max-width: 920px) {
            margin-top: 5px;
            font-size: 19px;
            line-height: 21px;
        }
        @media (max-width: 340px) {
            font-size: 13px;
            line-height: 13.2px;
        }
    `,
}

export default contactsCSS