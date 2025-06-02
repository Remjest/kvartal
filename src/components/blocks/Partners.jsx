import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import partnersCSS from "../styles/partners.css";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, AutoPlay, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "../styles/Sliders.css"
import NGSR from "../../img/BlockPartners/ngsr.png"
import RGR from "../../img/BlockPartners/rgr.png"
import One from "../../img/BlockPartners/1.png"
import Two from "../../img/BlockPartners/2.png"
import Three from "../../img/BlockPartners/3.png"
import Four from "../../img/BlockPartners/4.png"
import Five from "../../img/BlockPartners/5.png"

const Partners = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const slidesRerView = useSelector(state => (state.initial.clientMode)) === 'mobile' ? '1' : "";
    const _plugins = [new Arrow(), new AutoPlay(), new Fade()];
    
    return (
        <>
            <partnersCSS.Partners $pad={sectionPadding}>
                <partnersCSS.PartnersContainer>
                    <partnersCSS.Title ref={ref} id="partners">Наши партнеры</partnersCSS.Title>
                    <partnersCSS.SliderContainer>
                        <Flicking plugins={_plugins} circular={true}
                            align="center"
                            duration='500'
                            panelsPerView={slidesRerView}
                            >
                            <partnersCSS.Slide>
                                <partnersCSS.SlideImg>
                                    <img src={One} alt="" />
                                </partnersCSS.SlideImg>
                            </partnersCSS.Slide>
                            <partnersCSS.Slide>
                                <partnersCSS.SlideImg>
                                    <img src={Two} alt="" />
                                </partnersCSS.SlideImg>
                            </partnersCSS.Slide>
                            <partnersCSS.Slide>
                                <partnersCSS.SlideImg>
                                    <img src={Three} alt="" />
                                </partnersCSS.SlideImg>
                            </partnersCSS.Slide>
                            <partnersCSS.Slide>
                                <partnersCSS.SlideImg>
                                    <img src={Four} alt="" />
                                </partnersCSS.SlideImg>
                            </partnersCSS.Slide>
                            <partnersCSS.Slide>
                                <partnersCSS.SlideImg>
                                    <img src={Five} alt="" />
                                </partnersCSS.SlideImg>
                            </partnersCSS.Slide>
                            <ViewportSlot>
                                <span className={`flicking-arrow-prev is-thin sliderArrow`}></span>
                                <span className={`flicking-arrow-next is-thin sliderArrow`}></span>
                            </ViewportSlot>
                        </Flicking>
                    </partnersCSS.SliderContainer>
                    <partnersCSS.Subtitle>Мы являемся частью:</partnersCSS.Subtitle>
                    <partnersCSS.Guilds>
                        <a href="https://nngsr.ru/sostav/firm_5406/" target="_blank" rel="noopener noreferrer">
                            <partnersCSS.Guild>
                                <img src={NGSR} alt="" />
                            </partnersCSS.Guild>
                        </a>
                        <a href="https://reestr.rgr.ru/agentstvo-agentstvo-nedvizhimosti-kvartal-19043/" target="_blank" rel="noopener noreferrer">
                            <partnersCSS.Guild>
                                <img src={RGR} alt="" />
                            </partnersCSS.Guild>
                        </a>
                    </partnersCSS.Guilds>
                </partnersCSS.PartnersContainer>
            </partnersCSS.Partners>
        </>
    );
});

export default Partners