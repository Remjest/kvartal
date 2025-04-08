import React from "react";
import { useSelector } from "react-redux";
import footerCSS from "../styles/footer.css";
import Logo from "../../img/Footer/fLogo.svg";
import Phone from "../../img/Footer/phone.svg";
import Geo from "../../img/Footer/geo.svg";
import Vk from "../../img/Footer/vk.svg";


const Footer = () => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <footerCSS.Footer $pad={sectionPadding}>
                <footerCSS.FooterContainer>
                    <footerCSS.Point>
                        <footerCSS.PointImg style={{justifyContent: 'start', width: '100%'}}><img src={Logo} alt="" /></footerCSS.PointImg>
                    </footerCSS.Point>
                    <footerCSS.Point>
                        <footerCSS.PointImg><img src={Phone} alt="" /></footerCSS.PointImg>
                        <footerCSS.PointInfo>
                            <span>+7 (905) 865-63-41<br />+7 (905) 667-67-75</span>
                        </footerCSS.PointInfo>
                    </footerCSS.Point>
                    <footerCSS.Point>
                        <footerCSS.PointImg><img src={Geo} alt="" /></footerCSS.PointImg>
                        <footerCSS.PointInfo>
                            <span>
                                улица Грибоедова, 3,<br />
                                Дзержинск, <br />
                                Нижегородская область
                            </span>
                        </footerCSS.PointInfo>
                    </footerCSS.Point>
                    <footerCSS.Point>
                        <footerCSS.PointImg style={{justifyContent: 'end', width: '100%'}}><img src={Vk} alt="" /></footerCSS.PointImg>
                    </footerCSS.Point>
                </footerCSS.FooterContainer>
            </footerCSS.Footer>
        </>
    );
}

export default Footer