import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import contactsCSS from "../styles/contacts.css";
import Vk from "../../img/BlockContacts/vk.svg"
import Clock from "../../img/BlockContacts/clock.svg"
import Geo from "../../img/BlockContacts/geo.svg"
import Phone from "../../img/BlockContacts/phone.svg"


const Contacts = forwardRef((props, ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));
    const center = [56.243204, 43.454592];

    return (
        <>
            <contactsCSS.Contacts $pad={sectionPadding}>
                <contactsCSS.ContactsContainer>
                    <contactsCSS.Map>
                        <YMaps query={{ apikey: "0e41cf21-dcbb-4f07-aad8-3cb488036754" }}>
                            <Map
                                defaultState={{
                                    center: center,
                                    zoom: 17,
                                    controls: [],
                                }}
                                width="100%"
                                height="100%"
                                modules={["control.ZoomControl"]}
                                options={{
                                    yandexMapDisablePoiInteractivity: true,
                                    // suppressMapOpenBlock: true,
                                    scrollZoom: false,
                                }}
                            >
                                <Placemark
                                    geometry={center}
                                    options={{
                                        preset: "islands#blueDotIcon",
                                    }}
                                />
                            </Map>
                        </YMaps>
                    </contactsCSS.Map>
                    <contactsCSS.Info>
                        <contactsCSS.Title ref={ref} id="contacts">Контакты</contactsCSS.Title>
                        <contactsCSS.PointContainer>
                            <a href="https://m.vk.com/ankvartaldzr" target="_blank">
                                <contactsCSS.Point>
                                    <contactsCSS.PointImg>
                                        <img src={Vk} alt="" />
                                    </contactsCSS.PointImg>
                                    <contactsCSS.Pointinfo>
                                        <contactsCSS.PointTitle>
                                            <span>Наше сообщество ВК</span>
                                        </contactsCSS.PointTitle>
                                        <contactsCSS.PointDesk>
                                            {'(кликабельно)'}
                                        </contactsCSS.PointDesk>
                                    </contactsCSS.Pointinfo>
                                </contactsCSS.Point>
                            </a>
                            <contactsCSS.Point>
                                <contactsCSS.PointImg>
                                    <img src={Clock} alt="" />
                                </contactsCSS.PointImg>
                                <contactsCSS.Pointinfo>
                                    <contactsCSS.PointTitle>
                                        <span>Время работы</span>
                                    </contactsCSS.PointTitle>
                                    <contactsCSS.PointDesk>
                                        Пн-пт <contactsCSS.PointDel></contactsCSS.PointDel> 10:00-18:00
                                    </contactsCSS.PointDesk>
                                </contactsCSS.Pointinfo>
                            </contactsCSS.Point>
                            <contactsCSS.Point>
                                <contactsCSS.PointImg>
                                    <img src={Geo} alt="" />
                                </contactsCSS.PointImg>
                                <contactsCSS.Pointinfo>
                                    <contactsCSS.PointTitle>
                                        <span>Адрес</span>
                                    </contactsCSS.PointTitle>
                                    <contactsCSS.PointDesk>
                                        улица Грибоедова, 3, Дзержинск, Нижегородская область
                                    </contactsCSS.PointDesk>
                                </contactsCSS.Pointinfo>
                            </contactsCSS.Point>
                            <contactsCSS.Point>
                                <contactsCSS.PointImg>
                                    <img src={Phone} alt="" />
                                </contactsCSS.PointImg>
                                <contactsCSS.Pointinfo>
                                    <contactsCSS.PointTitle>
                                        <span>Телефон</span>
                                    </contactsCSS.PointTitle>
                                    <contactsCSS.PointDesk>
                                        +7 (905) 865-63-41 <br />
                                        +7 (905) 667-67-75
                                    </contactsCSS.PointDesk>
                                </contactsCSS.Pointinfo>
                            </contactsCSS.Point>
                        </contactsCSS.PointContainer>
                    </contactsCSS.Info>
                </contactsCSS.ContactsContainer>
            </contactsCSS.Contacts>
        </>
    );
});

export default Contacts