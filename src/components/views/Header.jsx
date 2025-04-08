import React, { useEffect, useRef } from "react";
import Logo from "../../img/Header/hLogo.svg";
import headerCSS from "../styles/header.css";
import Burger from "../services/Burger";
import NavButtonHOC from "../shared/NavButton";
import { useSelector, useDispatch } from "react-redux";
import { setShowBurger } from "../../redux-state/reduces/header";


const NavButton = NavButtonHOC(headerCSS.MenuButton)

const Header = () => {
    const dispatch = useDispatch();
    const isShowBurger = useSelector(state => state.headerReducer.showBurger);
    const clientMode = useSelector(state => state.initial.clientMode);
    const sectionPadding = useSelector(state => state.initial.sectionPadding);
    const buttonState = useSelector(state => state.headerReducer.activeButton);

    const burgerRef = useRef(null);
    const menuRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Проверяем, что ref существуют и меню открыто
            if (!burgerRef.current || !isShowBurger) return;
            // Проверяем клик вне элементов
            const clickedBurger = burgerRef.current?.contains(event.target);
            const clickedMenu = menuRef.current?.contains(event.target);
            
            if (!clickedBurger && !clickedMenu) {
                dispatch(setShowBurger(false));
            }
        };

        // Вешаем обработчик только при открытом меню
        if (isShowBurger) {
            document.addEventListener('click', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isShowBurger, dispatch])

    return (
        <>
            <headerCSS.Header $pad={sectionPadding}>
                <headerCSS.HeaderContainer>
                    <headerCSS.LogoContainer>
                        <img src={Logo} alt="" />
                    </headerCSS.LogoContainer>
                    {clientMode === 'desktop' &&
                        <headerCSS.MenuDesktopContainer>
                            <NavButton name="главная" isActive={buttonState[0]} href='#hero'></NavButton>
                            <NavButton name="преимущества" isActive={buttonState[1]} href='#advantages'></NavButton>
                            <NavButton name="объекты" isActive={buttonState[2]} href='#catalog'></NavButton>
                            <NavButton name="услуги" isActive={buttonState[3]} href='#services'></NavButton>
                            <NavButton name="партнеры" isActive={buttonState[4]} href='#partners'></NavButton>
                            <NavButton name="контакты" isActive={buttonState[5]} href='#contacts'></NavButton>
                        </headerCSS.MenuDesktopContainer>}
                    {clientMode === 'mobile' && <Burger ref={burgerRef} />}
                </headerCSS.HeaderContainer>
            </headerCSS.Header>
            {clientMode === 'mobile' &&
                <headerCSS.MenuMobileContainer ref={menuRef} $transform={isShowBurger}>
                <headerCSS.MenuMobileContainerWrap>
                    <NavButton name="главная" isActive={buttonState[0]} href='#hero'></NavButton>
                    <NavButton name="преимущества" isActive={buttonState[1]} href='#advantages'></NavButton>
                    <NavButton name="объекты" isActive={buttonState[2]} href='#catalog'></NavButton>
                    <NavButton name="услуги" isActive={buttonState[3]} href='#services'></NavButton>
                    <NavButton name="партнеры" isActive={buttonState[4]} href='#partners'></NavButton>
                    <NavButton name="контакты" isActive={buttonState[5]} href='#contacts'></NavButton>
                </headerCSS.MenuMobileContainerWrap>
                </headerCSS.MenuMobileContainer>}
        </>
    )
}

export default Header

