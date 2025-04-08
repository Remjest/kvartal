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
    Slider: styled(mainCSS.Slider)`
        margin-bottom: 30px;
    `,

}

export default catalogCSS