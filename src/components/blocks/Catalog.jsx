import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import catalogCSS from "../styles/catalog.css";
import Building from "../../img/BlockObjects/building.png"
import Mother from "../../img/BlockObjects/mother.png"
import Cottage from "../../img/BlockObjects/cottage.png"
import Bag from "../../img/BlockObjects/bag.png"

const Catalog = forwardRef((props,ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <catalogCSS.Catalog $pad={sectionPadding}>
                <catalogCSS.CatalogContainer>
                    <catalogCSS.Title ref={ref} id="catalog">Наши объекты</catalogCSS.Title>
                    <catalogCSS.Description>
                        <catalogCSS.DescriptionTop>
                            <span>Агентство недвижимости «Квартал» предлагает вам ознакомиться с лучшими предложениями на рынке жилья в Дзержинске и Нижнем Новгороде. <br />У нас вы найдете:</span>
                        </catalogCSS.DescriptionTop>
                        <catalogCSS.Objects>
                            <li>
                                <img src={Building} alt="" />
                                <span>Квартиры в новостройках и на вторичном рынке</span>
                            </li>
                            <li>
                                <img src={Cottage} alt="" />
                                <span>Дома, коттеджи и участки под застройку</span>
                            </li>
                            <li>
                                <img src={Bag} alt="" />
                                <span>Коммерческую недвижимость (офисы, магазины, склады)</span>
                            </li>
                            <li>
                                <img src={Mother} alt="" />
                                <span>Объекты с возможностью использования материнского капитала</span>
                            </li>
                        </catalogCSS.Objects>
                        <catalogCSS.DescriptionBottom>
                            <span>Наши профессиональные риэлторы окажут полное сопровождение на всех этапах сделки.</span>
                        </catalogCSS.DescriptionBottom>
                    </catalogCSS.Description>
                    <catalogCSS.ObjectButton href="https://m.vk.com/market-207476214" target="_blank">Ознакомиться с каталогом</catalogCSS.ObjectButton>
                    <catalogCSS.Conclusion>Лучшие <span style={{ fontWeight: '250', }}>квартиры по</span> лучшим <span style={{ fontWeight: '250', }}>ценам!</span></catalogCSS.Conclusion>
                </catalogCSS.CatalogContainer>
            </catalogCSS.Catalog>
        </>
    );
});

export default Catalog