import React, { forwardRef } from "react";
import { useSelector } from "react-redux"
import catalogCSS from "../styles/catalog.css";

const Catalog = forwardRef((props,ref) => {
    const sectionPadding = useSelector(state => (state.initial.sectionPadding));

    return (
        <>
            <catalogCSS.Catalog $pad={sectionPadding}>
                <catalogCSS.CatalogContainer>
                    <catalogCSS.Title ref={ref} id="catalog">Каталог наших объектов</catalogCSS.Title>
                    <catalogCSS.Slider></catalogCSS.Slider>
                    <catalogCSS.Conclusion>Лучшие <span style={{ fontWeight: '250', }}>квартиры по</span> лучшим <span style={{ fontWeight: '250', }}>ценам!</span></catalogCSS.Conclusion>
                </catalogCSS.CatalogContainer>
            </catalogCSS.Catalog>
        </>
    );
});

export default Catalog