import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import heroCSS from "../styles/hero.css";
import NavButtonHOC from "../shared/NavButton";
import House from "../../img/BlockHero/hero.png"
import Logo from "../../img/BlockHero/logo.svg"

const NavButton = NavButtonHOC(heroCSS.HeroButton);

const Hero = forwardRef((props, ref) => {
    
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <heroCSS.Hero>
                <heroCSS.HeroTop ref={ref}  id="hero"/>
                <heroCSS.BlueLine $pad={sectionPadding}>
                    <heroCSS.BlueLineContainer>
                        <heroCSS.infoContainer>
                            <img src={Logo} alt="" />
                            <heroCSS.H1Container>
                                <heroCSS.H1>квартал</heroCSS.H1>
                                <heroCSS.SubText>Агентство недвижимости в Нижнем Новгороде и Дзержинске</heroCSS.SubText>
                            </heroCSS.H1Container>
                        </heroCSS.infoContainer>
                    </heroCSS.BlueLineContainer>
                    <heroCSS.HeroImg>
                        <img src={House} alt="" />
                    </heroCSS.HeroImg>
                </heroCSS.BlueLine>
                <NavButton href='#advantages'>
                    Почему именно мы?
                </NavButton>
            </heroCSS.Hero>
        </>
    );
});

export default Hero