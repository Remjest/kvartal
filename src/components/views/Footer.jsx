import React from "react";
import { useSelector } from "react-redux";
import footerCSS from "../styles/footer.css";
import NavButtonHOC from "../shared/NavButton";
import Logo from "../../img/Footer/fLogo.svg";
import Phone from "../../img/Footer/phone.svg";
import Geo from "../../img/Footer/geo.svg";
import Vk from "../../img/Footer/vk.svg";

const NavButton = NavButtonHOC(footerCSS.Point)

const Footer = () => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <footerCSS.Footer $pad={sectionPadding}>
                <footerCSS.FooterContainer>
                    <NavButton href="#hero">
                        <footerCSS.PointImg style={{justifyContent: 'start', width: '100%'}}><img src={Logo} alt="" /></footerCSS.PointImg>
                    </NavButton>
                    <footerCSS.Point>
                        <footerCSS.PointImg><img src={Phone} alt="" /></footerCSS.PointImg>
                        <footerCSS.PointInfo>
                            <a href="tel:89058656341">+7 (905) 865-63-41</a><br /><a href="tel:89056676775">+7 (905) 667-67-75</a>
                        </footerCSS.PointInfo>
                    </footerCSS.Point>
                    <footerCSS.Point href="https://yandex.ru/maps/-/CHVcm0le" target="_blank">
                        <footerCSS.PointImg><img src={Geo} alt="" /></footerCSS.PointImg>
                        <footerCSS.PointInfo>
                            <span>
                                улица Грибоедова, 3,<br />
                                Дзержинск, <br />
                                Нижегородская область
                            </span>
                        </footerCSS.PointInfo>
                    </footerCSS.Point>
                    <footerCSS.Point href="https://m.vk.com/ankvartaldzr" target="_blank">
                        <footerCSS.PointImg style={{justifyContent: 'end', width: '100%'}}><img src={Vk} alt="" /></footerCSS.PointImg>
                    </footerCSS.Point>
                </footerCSS.FooterContainer>
            </footerCSS.Footer>
        </>
    );
}

export default Footer