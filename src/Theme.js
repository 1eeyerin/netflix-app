const size = {
    mobile : "767px",
    tabletStart : "768px",
    tabletEnd : "1279px",
    laptopStart : "1280px",
    laptopEnd : "1679px",
    desktop: "1680px"
}

const theme = {
    mobile : `screen and (max-width:${size.mobile})`,
    tablet : `screen and screen and (min-width:${size.tabletStart}) and (max-width:${size.tabletEnd})`,
    laptop : `screen and screen and (min-width:${size.laptopStart}) and (max-width:${size.laptopEnd})`,
    desktop: `screen and (min-width:${size.desktop})`
}

export default theme;