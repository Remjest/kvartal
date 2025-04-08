import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import advantagesCSS from "../styles/advantages.css";
import Cert from "../../img/BlockAdvantages/certificate.svg"
import Custom from "../../img/BlockAdvantages/custom.svg"
import Rep from "../../img/BlockAdvantages/reputation.svg"
import Exp from "../../img/BlockAdvantages/experience.svg"
import Search from "../../img/BlockAdvantages/searchClock.svg"
import Broker from "../../img/BlockAdvantages/broker.svg"

const Advantages = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));


    return (
        <>
            <advantagesCSS.Advantages $pad={sectionPadding}>
                <advantagesCSS.AdvantagesContainer>
                    <advantagesCSS.Title ref={ref} id="advantages">Наши преимущества</advantagesCSS.Title>
                    <advantagesCSS.BlocksContainer>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Cert} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Сертифицированные специалисты</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Наша команда состоит из высококвалифицированных экспертов с профильным образованием и необходимыми сертификатами.</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Custom} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Индивидуальный подход</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Мы не работаем по шаблонам — каждый клиент для нас уникален. Анализируем ваши потребности, предлагаем персонализированные решения и сопровождаем на всех этапах сотрудничества.</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Rep} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Идеальная репутация</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Мы дорожим своим именем, поэтому гарантируем прозрачность, честность и надежность. Нас рекомендуют партнеры и клиенты, а отзывы подтверждают наш высокий уровень сервиса.</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Exp} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Большой опыт работы</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Более двух десятилетий мы помогаем клиентам решать сложные задачи. Накопленный опыт позволяет нам находить оптимальные решения даже в нестандартных ситуациях.</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Search} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Быстрый поиск</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Оперативность — один из наших ключевых принципов. Благодаря отработанным алгоритмам и обширной базе данных мы находим подходящие варианты в кратчайшие сроки без потери качества.</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                        <advantagesCSS.Block>
                            <advantagesCSS.BlockTop>
                                <advantagesCSS.BlockImg>
                                    <img src={Broker} alt="" />
                                </advantagesCSS.BlockImg>
                                <advantagesCSS.BlockTitle>
                                    <span>Брокерские услуги</span>
                                </advantagesCSS.BlockTitle>
                            </advantagesCSS.BlockTop>
                            <advantagesCSS.BlockDesk>
                                <span>Предоставляем полный спектр посреднических услуг, включая юридическое сопровождение, переговоры и контроль сделок. Наши клиенты получают профессиональную поддержку на каждом этапе.</span>
                            </advantagesCSS.BlockDesk>
                        </advantagesCSS.Block>
                    </advantagesCSS.BlocksContainer>
                    <advantagesCSS.Conclusion>Мы профессионалы.</advantagesCSS.Conclusion>
                </advantagesCSS.AdvantagesContainer>
            </advantagesCSS.Advantages>
        </>
    );
});

export default Advantages