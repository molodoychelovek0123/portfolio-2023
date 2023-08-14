import React from "react";
import styles from "./Dropdown.module.scss";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

export const Dropdown = () => {

    const {t, lang} = useTranslation();
    const [open, setOpen] = React.useState(false);
    return (
        <div className={`${styles.dropdown} ${open ? styles.dropdown__open : ""}`} onClick={() => {
            setOpen(!open);
        }}>
            <div className={`${styles.dropdown_selected}`} tabIndex={0}>
                <span>{lang == "en" && <>English </>} {lang == "ru" && <>Russian </>} </span>
            </div>
            <div className={`${styles.dropdown_list}`}>

                <Link locale="en" href={"/"} className={`${styles.dropdown_item}`}> English </Link>

                <Link locale="ru" href={"/"} className={`${styles.dropdown_item}`}> Russian </Link>


            </div>
        </div>

    )
}