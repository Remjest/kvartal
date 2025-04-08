import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setActiveButton } from "../../redux-state/reduces/header";
import Hero from "../blocks/Hero";
import Advantages from "../blocks/Advantages";
import Catalog from "../blocks/Catalog";
import Services from "../blocks/Services";
import Partners from "../blocks/Partners";
import Contacts from "../blocks/Contacts";
import mainCSS from "../styles/main.css";

const Body = () => {
    const dispatch = useDispatch();
    const active = useSelector(state => (state.headerReducer.activeButton));
    const sectionsRef = useRef([]);

    useEffect(() => {
        if (typeof window.IntersectionObserver !== 'undefined') {
            const scrollObserver = new IntersectionObserver(
                (entries) => {
                    let observedEntries = [];
                    entries.forEach((entry) => {
                        // Проверяем, что элемент пересекает верхнюю половину экрана
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                            let curIndex;
                            sectionsRef.current.forEach((sec, index) => {
                                if (entry.target === sec) curIndex = index;
                            });
                            if (curIndex !== undefined) {
                                observedEntries.push([entry, curIndex]);
                            }
                        }
                    });

                    // Выбираем первую секцию, которая находится в верхней половине экрана
                    if (observedEntries.length > 0) {
                        dispatch(setActiveButton(observedEntries[0][1]));
                    }
                },
                {
                    root: null,
                    rootMargin: '0px 0px -80%', // Отслеживаем только верхние 20%
                    threshold: 0.5,
                }
            );

            sectionsRef.current.forEach(section => {
                scrollObserver.observe(section);
            })
            return () => {
                scrollObserver.disconnect();
            };
        }

    }, [sectionsRef.current]);

    const addToRefs = (el, index) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current[index] = el;
        }
    }

    return (
        <>
            <mainCSS.Body>
                    <Hero ref={el => addToRefs(el, 0)} />
                    <Advantages ref={el => addToRefs(el, 1)} />
                    <Catalog ref={el => addToRefs(el, 2)} />
                    <Services ref={el => addToRefs(el, 3)} />
                    <Partners ref={el => addToRefs(el, 4)} />
                    <Contacts ref={el => addToRefs(el, 5)} />
            </mainCSS.Body>
        </>
    );
}

export default Body