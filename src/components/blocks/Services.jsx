import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import servicesCSS from "../styles/services.css";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Arrow, AutoPlay, Fade } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/arrow.css";
import "../styles/Sliders.css"
import Stars from "../../img/BlockReviews/stars.png"
import Dima from "../../img/BlockReviews/dima.png"
import Sveta from "../../img/BlockReviews/sveta.png"
import Liza from "../../img/BlockReviews/liza.png"
import Emoji from "../../img/BlockReviews/heart-hands.png"
import House from "../../img/BlockServices/house.png"
import Bank from "../../img/BlockServices/bank.png"
import Doc from "../../img/BlockServices/doc.png"
import Money from "../../img/BlockServices/money.png"

const Services = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const _plugins = [
        new Arrow(),
        new AutoPlay(),
        new Fade()
    ];

    return (
        <>  
            <servicesCSS.Services $pad={sectionPadding}>
                <servicesCSS.ServicesContainer>
                    <servicesCSS.Title ref={ref} id="services">Мы предлагаем услуги</servicesCSS.Title>
                        <servicesCSS.SliderContainer>
                            <Flicking
                                plugins={_plugins}
                                circular="true"
                                align="center"
                                duration='500'
                                circularFallback="bound"
                                moveType="strict"
                                threshold="40"
                                >
                            <servicesCSS.Slide>
                                <servicesCSS.SliderTop>
                                    <servicesCSS.SlideTitle>Сделки с вашей недвижимостью</servicesCSS.SlideTitle>
                                    <servicesCSS.SlideImg>
                                        <img src={House} alt="" />
                                    </servicesCSS.SlideImg>
                                </servicesCSS.SliderTop>
                                    <servicesCSS.SlideText>
                                        Мы обеспечиваем полное сопровождение сделок купли-продажи недвижимости. Наши эксперты возьмут на себя переговоры, проверку юридической чистоты объекта и оформление документов, чтобы ваша сделка прошла быстро, безопасно и выгодно.
                                    </servicesCSS.SlideText>
                                </servicesCSS.Slide>
                            <servicesCSS.Slide>
                                    <servicesCSS.SliderTop>
                                        <servicesCSS.SlideTitle>Составление документов</servicesCSS.SlideTitle>
                                        <servicesCSS.SlideImg>
                                            <img src={Doc} alt="" />
                                        </servicesCSS.SlideImg>
                                    </servicesCSS.SliderTop>
                                    <servicesCSS.SlideText>
                                       Профессиональная подготовка договоров, актов, доверенностей и других юридических документов, связанных с недвижимостью. Мы гарантируем соответствие законодательству и защиту ваших интересов на каждом этапе.
                                    </servicesCSS.SlideText>
                                </servicesCSS.Slide>
                            <servicesCSS.Slide>
                                <servicesCSS.SliderTop>
                                    <servicesCSS.SlideTitle>Оценка недвижимости</servicesCSS.SlideTitle>
                                    <servicesCSS.SlideImg>
                                            <img src={Money} alt="" />
                                        </servicesCSS.SlideImg>
                                </servicesCSS.SliderTop>
                                <servicesCSS.SlideText>
                                    Точное определение рыночной стоимости объекта для продажи, ипотеки, страхования или судебных споров. Используем современные методы анализа и данные актуальных рыночных тенденций.
                                </servicesCSS.SlideText>
                                </servicesCSS.Slide>
                            <servicesCSS.Slide>
                                <servicesCSS.SliderTop>
                                    <servicesCSS.SlideTitle>Оформление ипотеки</servicesCSS.SlideTitle>
                                    <servicesCSS.SlideImg>
                                        <img src={Bank} alt="" />
                                    </servicesCSS.SlideImg>
                                </servicesCSS.SliderTop>
                                <servicesCSS.SlideText>
                                    Помощь в подборе выгодных ипотечных программ от ведущих банков, оформление заявки и сопровождение сделки до полного одобрения. Сокращаем сроки и упрощаем процесс для вас.
                                </servicesCSS.SlideText>
                                </servicesCSS.Slide>
                                <ViewportSlot>
                                    <span className={`flicking-arrow-prev is-thin sliderArrow`}></span>
                                    <span className={`flicking-arrow-next is-thin sliderArrow`}></span>
                            </ViewportSlot>
                        </Flicking>
                        </servicesCSS.SliderContainer>
                    <servicesCSS.Reviews>
                        <servicesCSS.ReviewsTitle>Отзывы клиентов</servicesCSS.ReviewsTitle>
                        <servicesCSS.ReviewsContainer>
                            <servicesCSS.Review>
                                <servicesCSS.ReviewTop>
                                    <servicesCSS.ReviewAvatar>
                                        <img src={Dima} alt="" />
                                    </servicesCSS.ReviewAvatar>
                                    <servicesCSS.ReviewTopRight>
                                        <servicesCSS.ReviewName>Дмитрий Жариков</servicesCSS.ReviewName>
                                        <servicesCSS.ReviewStars>
                                            <img src={Stars} alt="" />
                                        </servicesCSS.ReviewStars>
                                    </servicesCSS.ReviewTopRight>
                                </servicesCSS.ReviewTop>
                                <servicesCSS.RewiewDesk>
                                    <span>Спасибо большое за сделку. Продавали квартиру с детьми, нужно было выделить доли, оформить разрешение опеки, подобрать новое жилье и оформить ипотеку. Все сделали быстро. Спасибо Марии</span>
                                </servicesCSS.RewiewDesk>
                            </servicesCSS.Review>
                            <servicesCSS.Review>
                                <servicesCSS.ReviewTop>
                                    <servicesCSS.ReviewAvatar>
                                        <img src={Sveta} alt="" />
                                    </servicesCSS.ReviewAvatar>
                                    <servicesCSS.ReviewTopRight>
                                        <servicesCSS.ReviewName>Светлана Ивашева</servicesCSS.ReviewName>
                                        <servicesCSS.ReviewStars>
                                            <img src={Stars} alt="" />
                                        </servicesCSS.ReviewStars>
                                    </servicesCSS.ReviewTopRight>
                                </servicesCSS.ReviewTop>
                                <servicesCSS.RewiewDesk>
                                    <span>Спасибо большое Ирине за сопровождение сделки. В короткое время была оформлена ипотека, быстрый выход на сделку. Сразу отдали ключи. Были собраны все справки об отсутствии задолженности. Благодарю</span>
                                </servicesCSS.RewiewDesk>
                            </servicesCSS.Review>
                            <servicesCSS.Review>
                                <servicesCSS.ReviewTop>
                                    <servicesCSS.ReviewAvatar>
                                        <img src={Liza} alt="" />
                                    </servicesCSS.ReviewAvatar>
                                    <servicesCSS.ReviewTopRight>
                                        <servicesCSS.ReviewName>Елизавета Котова</servicesCSS.ReviewName>
                                        <servicesCSS.ReviewStars>
                                            <img src={Stars} alt="" />
                                        </servicesCSS.ReviewStars>
                                    </servicesCSS.ReviewTopRight>
                                </servicesCSS.ReviewTop>
                                <servicesCSS.RewiewDesk>
                                    <span>Спасибочки за проведение сделки. Быстро, качественно. Всем рекомендую. Очень приятные и доброжелательные сотрудники, помогут с любым вопросом и в любое время <img src={Emoji} alt="" /></span>
                                </servicesCSS.RewiewDesk>
                            </servicesCSS.Review>
                        </servicesCSS.ReviewsContainer>
                    </servicesCSS.Reviews>
                </servicesCSS.ServicesContainer>
            </servicesCSS.Services>
        </>
    );
});

export default Services