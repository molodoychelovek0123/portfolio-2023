import React from 'react';
import {Button} from '@/components/common/Button';

import Modal from 'react-modal';
import Link from "next/link";
import Image from "next/image";

import styles from "./Contact.module.scss";
import useTranslation from "next-translate/useTranslation";

const LinkedInIcon = () => (
    <svg
        width={34}
        height={34}
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34 34H27.2V22.1017C27.2 18.8377 25.7601 17.0166 23.1778 17.0166C20.3677 17.0166 18.7 18.9142 18.7 22.1017V34H11.9V11.9H18.7V14.3853C18.7 14.3853 20.8335 10.6416 25.6411 10.6416C30.4504 10.6416 34 13.5764 34 19.6488V34ZM4.1514 8.36553C1.8581 8.36553 0 6.49223 0 4.18193C0 1.87333 1.8581 0 4.1514 0C6.443 0 8.30109 1.87333 8.30109 4.18193C8.30279 6.49223 6.443 8.36553 4.1514 8.36553ZM0 34H8.5V11.9H0V34Z"
            fill="white"
        />
    </svg>
);

const TgIcon = () => (
    <svg
        width={38}
        height={32}
        viewBox="0 0 38 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M35.5708 0.258008L1.76669 13.3313C-0.514573 14.1613 -0.514573 15.6139 1.35191 16.0289L9.85479 18.7266L13.173 28.6872C13.5878 29.7247 13.3804 30.1398 14.4173 30.1398C15.2469 30.1398 15.6616 29.7247 16.0764 29.3097C16.2838 29.1022 18.1503 27.2346 20.2242 25.1595L28.9344 31.5924C30.5935 32.4224 31.6305 32.0074 32.0452 30.1398L37.8521 2.95567C38.4742 0.673032 37.0225 -0.572041 35.5708 0.258008ZM31.2157 6.48338L15.0395 21.2167L14.4173 28.0646L11.0991 18.1041L30.1788 6.06835C31.0083 5.44581 31.8378 5.86084 31.2157 6.48338Z"
            fill="white"
        />
    </svg>
);

const GithubIcon = () => (
    <svg
        width={34}
        height={38}
        viewBox="0 0 34 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.67632 3.53197C3.77603 1.75272 4.19738 0.979009 5.40569 0.357692C6.70581 -0.31104 8.75637 0.000167608 11.1692 1.23264C12.2085 1.76374 12.3143 1.77456 14.1357 1.53901C16.5567 1.2258 19.6734 1.22691 21.9078 1.54187C23.5976 1.78007 23.7086 1.76816 24.7504 1.23596C28.1753 -0.513511 30.8793 -0.399043 31.8585 1.5368C32.3472 2.50307 32.4379 5.01036 32.059 7.07832C31.8489 8.22478 31.8712 8.36791 32.3773 9.12024C35.9386 14.4139 33.3726 22.9945 27.2702 26.1967C26.8032 26.4418 26.4097 26.5935 26.089 26.717C25.1042 27.0963 24.8052 27.2115 25.1672 28.9574C25.3415 29.7972 25.5514 31.8851 25.634 33.5976C25.7831 36.6928 25.7809 36.7144 25.2427 37.3459C24.5102 38.2049 23.4543 38.2194 22.7389 37.3803C22.2722 36.8331 22.2267 36.5747 22.2267 34.4634C22.2267 31.3435 21.8876 29.2697 21.0866 27.4927C20.134 25.378 20.8402 24.5895 23.0187 24.1169C26.0467 23.4598 28.4116 21.5749 29.7298 18.7679C30.9831 16.0996 31.172 12.4122 28.9062 10.1697C28.2618 9.39726 28.2169 8.69765 28.6771 6.58801C28.849 5.79953 28.9932 4.78231 28.9974 4.32729C29.0039 3.60871 28.939 3.5002 28.5015 3.5002C28.2246 3.5002 27.1667 3.90648 26.151 4.40294L24.5297 5.19559C24.3822 5.26763 24.2173 5.29534 24.0547 5.27651C19.9321 4.7992 16.0149 4.79182 11.8721 5.27838C11.7089 5.29755 11.5432 5.26985 11.3953 5.19744L9.77487 4.40428C8.75899 3.90691 7.70113 3.5002 7.42433 3.5002C6.78431 3.5002 6.77468 3.97683 7.35806 6.80857C7.71442 8.538 7.95422 8.92335 6.92404 10.3062C5.37988 12.379 4.99417 14.9529 5.82222 17.6573C6.86587 21.0652 9.42152 23.3674 13.0145 24.1356C15.1804 24.5986 15.7465 25.2028 14.9195 27.7081C14.2684 29.6796 13.8568 30.1877 12.9106 30.1877C11.6376 30.1877 10.8402 29.0754 11.279 27.9114C11.4723 27.3984 11.4148 27.3436 10.2222 26.9049C6.58183 25.5661 3.79746 22.5653 2.52444 18.6085C1.54049 15.5504 1.97343 11.57 3.55192 9.16413C4.08937 8.34498 4.09769 8.27551 3.84687 6.70733C3.70497 5.8196 3.62822 4.39082 3.67632 3.53197Z"
            fill="white"
        />
        <path
            d="M3.01763 25.772C2.51306 24.9755 1.49046 24.7603 0.733595 25.2913C-0.0232519 25.8223 -0.227781 26.8985 0.276789 27.6949C0.6493 28.283 1.09494 28.7661 1.47338 29.1643C1.54315 29.2378 1.61094 29.3086 1.67713 29.3778C1.99414 29.7092 2.27404 30.0018 2.55515 30.3492C3.17693 31.1172 3.79722 32.1516 4.14975 34.0066C4.30678 34.8329 4.87114 35.278 5.18385 35.4725C5.52297 35.6833 5.8935 35.8075 6.19842 35.8885C6.82217 36.054 7.57936 36.14 8.29797 36.1901C9.08683 36.2452 9.9416 36.263 10.7059 36.2679C10.7065 37.2245 11.4437 38 12.353 38C13.2626 38 14 37.224 14 36.2667V34.5334C14 33.5761 13.2626 32.8001 12.353 32.8001C12.1977 32.8001 12.0297 32.8006 11.8518 32.8013C10.8852 32.8044 9.6253 32.8084 8.51569 32.7311C7.98062 32.6938 7.54076 32.6409 7.2182 32.5763C6.72149 30.5242 5.91903 29.1589 5.06275 28.101C4.68423 27.6336 4.29227 27.2245 3.97345 26.8917C3.91376 26.8295 3.85664 26.7699 3.80264 26.713C3.43477 26.326 3.19414 26.0507 3.01763 25.772Z"
            fill="white"
        />
    </svg>

);

const EmailIcon = () => (
    <svg
        width={34}
        height={28}
        viewBox="0 0 34 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M32 5C32 3.35 30.65 2 29 2H5C3.35 2 2 3.35 2 5M32 5V23C32 24.65 30.65 26 29 26H5C3.35 26 2 24.65 2 23V5M32 5L17 15.5L2 5"
            stroke="white"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)


Modal.setAppElement('#__next');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backdropFilter: "blur(5px)",
        background: "rgb(0, 0, 0,0.80)",
        border: "none",
        borderRadius: 15,
        padding: 40,
        maxWidth: "768px",
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
    },
};

export const Contact = () => {
    const [modalContactIsOpen, setContactIsOpen] = React.useState(false);

    function openContactModal() {
        setContactIsOpen(true);
    }

    function closeContactModal() {
        setContactIsOpen(false);
    }

    const [modalAboutIsOpen, setAboutIsOpen] = React.useState(false);

    function openAboutModal() {
        setAboutIsOpen(true);
    }

    function closeAboutModal() {
        setAboutIsOpen(false);
    }


    const {t} = useTranslation();
    return (
        <>
            <div className="relative">
                <h3 className="responsive_text uppercase text-center leading-contactCTA font-bold"
                    style={{
                        "--small-size": "65",
                        "--phone-size": "80",
                        "--tablet-size": "100",
                        "--desktop-size": "160"
                    } as React.CSSProperties}>
                    {
                        t('contact:CTA').split('\n').map((item, index) =>
                            <React.Fragment key={index}>{index !== 0 && <br/>}{item}</React.Fragment>
                        )
                    }
                </h3>
                <div className="a-centered flex flex-col md:flex-row justify-center gap-4 text-center">
                    <Button type={"tall"} link={"#!"} onClick={openContactModal}> {t('contact:contact_button')} </Button>
                    <Button type={"tall"} link={"#!"} onClick={openAboutModal}> {t('contact:about_button')} </Button>
                </div>
            </div>


            <Modal
                isOpen={modalContactIsOpen}
                onRequestClose={closeContactModal}
                style={customStyles}
                contentLabel="Contact me"
            >
                <h4 className="text-4xl md:text-5xl xl:text-6xl uppercase font-title font-semibold">Contact me</h4>
                <button data-blobity onClick={closeContactModal}
                        className="absolute top-2 right-4 pr-2 pl-2 pb-0.5 cursor-none">x
                </button>
                <div className={`${styles.contact_item} my-4`}>
                    <Button link="https://www.linkedin.com/in/boxdeveloper/" dark={false}>

                        <LinkedInIcon/>

                    </Button>
                </div>

                <div className={`${styles.contact_item} my-4`}>
                    <Button link="https://tg.me/boxdeveloper" dark={false}>

                        <TgIcon/>

                    </Button>
                </div>

                <div className={`${styles.contact_item} my-4`}>
                    <Button link="https://github.com/molodoychelovek0123/" dark={false}>

                        <GithubIcon/>

                    </Button>
                </div>

                <div className={`${styles.contact_item} my-4`}>
                    <Button link="mailto:boxdeveloper@studiobox.dev" dark={false}>

                        <EmailIcon/>

                    </Button>
                </div>
            </Modal>
            <Modal
                isOpen={modalAboutIsOpen}
                onRequestClose={closeAboutModal}
                style={customStyles}
                contentLabel="Contact me"
            >
                <h4 className="text-4xl md:text-5xl xl:text-6xl uppercase font-title font-semibold">My Journey</h4>
                <button data-blobity onClick={closeAboutModal}
                        className="absolute top-2 right-4 pr-2 pl-2 pb-0.5 cursor-none">x
                </button>

                <p className="text-lg leading-description my-4">
                    {
                        t('contact:journey_text').split('\n').map((item, index) =>
                            <React.Fragment key={index}>{index !== 0 && <br/>}{item}</React.Fragment>
                        )
                    }

                </p>
                <p className={"my-4"}>
                    <Button link={"https://docs.google.com/spreadsheets/d/1GJdaFRZZwJPZ2dcZq6TgpTZm8JHnirCiHgmb_mRG1KM/"} type={"wide"} dark={false}> Full portfolio </Button>
                </p>

                <h5 className="text-3xl md:text-4xl xl:text-5xl uppercase font-title font-semibold">My Friends</h5>

                <p className="text-lg leading-description">
                    {
                        t('contact:friends_text').split('\n').map((item, index) =>
                            <React.Fragment key={index}>{index !== 0 && <br/>}{item}</React.Fragment>
                        )
                    }
                </p>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 my-8">
                    <Link  data-no-blobity href={"https://studiobox.dev"}> <Image src={"/box_dev.png"} alt={"Box Dev Logotype"} height={100} width={100} objectFit={"contain"}/></Link>
                    <Link  data-no-blobity href={"https://newmedia.agency"}> <Image src={"/nma.svg"} alt={"New Media Agency Logotype"} height={40} width={150} objectFit={"contain"}/></Link>
                    <Link  data-no-blobity href={"https://wixlab.com"}> <Image src={"/wixlab.webp"} alt={"Wixlab Logotype"} height={40} width={150} objectFit={"contain"}/></Link>
                    <Link  data-no-blobity href={"https://iskra.studio"}> <Image src={"/iskra.svg"} alt={"Iskra Studio Logotype"} height={85} width={100} objectFit={"contain"}/></Link>

                </div>



            </Modal>
        </>
    )
}