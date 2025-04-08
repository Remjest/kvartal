import styled from "styled-components";
import mainCSS from "./main.css";

const catalogCSS = {
    Catalog: styled(mainCSS.NewSection)`
        background-color: rgb(243, 244, 241);
    `,
    CatalogContainer: styled(mainCSS.NewSectionContainer)`
    `,
    Title: styled(mainCSS.Title)`
    `,
    Description: styled.div`
        margin: 50px 0;
        padding: 0 30px;
        width: 100%;
        display: flex;
        flex-direction: column;
        color: rgb(26, 26, 26);
        font-size: 27px;
        font-weight: 300;
        line-height: 34px;
        letter-spacing: 0.05rem;
        text-align: left;
        @media (max-width: 768px) {
            margin: 30px 0;
            padding: 0 15px;
            font-size: 20px;
            line-height: 23px;
        }
        @media (max-width: 425px) {
            margin-top: 20px;
            font-size: 12.29px;
            line-height: 13px;
        }
    `,
    DescriptionTop: styled.div``,
    Objects: styled.ul`
        margin: 45px;
        li{
            padding: 10px;
            display: flex;
            align-items: center;
            img{
                height: 47px;
                width: 47px;
                margin-right: 17px;
            }
        }
        @media (max-width: 768px) {
            margin: 15px;
            li{
                padding: 10px;
                img{
                    height: 37px;
                    width: 37px;
                    margin-right: 17px;
                }
            }
        }
        @media (max-width: 425px) {
            li{
                padding: 5px;
                img{
                    height: 27px;
                    width: 27px;
                }
            }
        }
    `,
    DescriptionBottom: styled.div``,
    ObjectButton: styled.a`
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 487px;
        width: 60%;
        min-width: 280px;
        height: 85px;
        margin: 0 20px;
        margin-bottom: 40px;
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
            margin-bottom: 20px;
        }
    `,
    Conclusion: styled(mainCSS.Conclusion)`
        font-size: 35.62px;
        font-style: italic;
        @media (max-width: 885px) {
                font-size: 22.95px;
            }
        @media (max-width: 635px) {
            font-size: 17.95px;
        }
        @media (max-width: 535px) {
            font-size: 12px;
        }
    `,
}

export default catalogCSS