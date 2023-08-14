import {ProjectProps} from "./ProjectCard";
import {Technologies as t} from "@/components/technologies/Technologies";
import sk8 from "@/static-content/portfolio-products/sk8.png";
import gomadre from "@/static-content/portfolio-products/gomadre.png"
import box_dev from "@/static-content/portfolio-products/box.dev.png"
import hey from "@/static-content/portfolio-products/hey.png"
import agave_en_linea from "@/static-content/portfolio-products/agave-en-linea.svg"
import somm from "@/static-content/portfolio-products/somm.png"
import class_wiki from "@/static-content/portfolio-products/class-wiki.png"

export type MultilingualProjects = {
    en: ProjectProps[],
    ru: ProjectProps[]
}

export const Projects: MultilingualProjects = {
    en: [
        {
            title: "Sk8ology",
            description: "SK8 is your online skateboard store. We've done a complete redesign, breathing new life into a site that has served a long time. Now the modern design of our website blends seamlessly with your style. ",
            links: [
                {
                    text: "Visit Site",
                    url: "https://sk8.studiobox.dev"
                },
                {
                    text: "Github",
                    url: "https://github.com/molodoychelovek0123/board-online-shop"
                }
            ],
            image: sk8,
            cardType: "large",
            technologies: [
                t.ts,
                t.next,
                t.sass,
                t.tailwind,
            ],
            customClassNames: {
                description: "max-w-[500px]",
                image: "w-full h-auto left-0 sk8-m"
            }
        },
        {
            title: "Gomadre",
            description: "I crafted a website for GoMadre—an online liquor store and Mexican restaurant. With captivating yellow hues and diverse vector graphics, the site emanates a vibrant appeal.",
            links: [
                {
                    text: "Visit Site",
                    url: "https://gomadreshop.com"
                }
            ],
            image: gomadre,
            technologies: [
                t.js,
                t.liquid,
                t.shopify,
            ],
            cardType: "small",
            customClassNames: {
                description: "max-w-[390px]",
                image: "max-w-[50%] h-auto right-0"
            }
        },
        {
            title: "Conversion Opt.",
            description: "I developed a vibrant Next.js website to enhance my TinaCMS skills. Client-approved, its colorful design offers effortless customization.",
            links: [
                {
                    text: "Visit Site",
                    url: "https://conversionoptimizationpros.com"
                },
                {
                    text: "Github",
                    url: "https://github.com/molodoychelovek0123/tina-conversionoptimizationpros"
                }
            ],
            technologies: [
                t.ts,
                t.tina,
                t.next,
                t.tailwind,
            ],
            cardType: "small",
            customClassNames: {
                description: "max-w-[390px]"
            }
        },
        {
            title: "Portfolio 2022",
            description: "My previous portfolio is a colorful project created in React. The development took only 2 days",
            links: [
                {
                    text: "Visit Site",
                    url: "https://cv.studiobox.dev/"
                },
                {
                    text: "Github",
                    url: "https://github.com/molodoychelovek0123/portfolio-rjs"
                }
            ],
            technologies: [
                t.js,
                t.react,
                t.sass,
            ],
            cardType: "small",
            customClassNames: {
                description: "max-w-[390px]"
            }
        },
        {
            title: "DGL",
            description: "Wordpress web project for DGL (architectural agency): dynamic design with GSAP effects emphasizes the company's impressive portfolio, guaranteeing visual impact",
            links: [
                {
                    text: "Visit Site",
                    url: "https://dglandscapes.com"
                }
            ],
            technologies: [
                t.js,
                t.gsap,
                t.php,
            ],
            cardType: "medium",
            customClassNames: {
                description: "max-w-[500px]"
            }
        },
        {
            title: "Box.dev",
            description: "Before working at NMA, I developed a web studio. I practiced minimalism, striving to create attractive and functional websites. I noticed a simple but inspiring design",
            links: [
                {
                    text: "Visit Site",
                    url: "https://studiobox.dev/"
                }
            ],
            image: box_dev,
            technologies: [
                t.js,
                t.php,
                t.sass
            ],
            cardType: "small",

            customClassNames: {
                description: "max-w-[400px]",
                image: "max-w-[61%] h-auto right-0"
            }
        },
        {
            title: "Sommtable",
            description: " Sommtable is your guide to the world of wine and gastronomy, a multi-product project. The platform connects connoisseurs with leading experts. Here you can book online classes, tastings and you have the opportunity to purchase exclusive products. Sommtable is not just a web platform, it is a real community of people who love to explore, learn and enjoy the world of wine and food.",
            links: [
                {
                    text: "Online shop",
                    url: "https://sommtable.com/"
                },
                {
                    text: "Find expert",
                    url: "https://sommtable.pro/"
                },
                {
                    text: "Book experience",
                    url: "https://somm.app/"
                },
                {
                    text: "Wine import",
                    url: "https://sommtableimports.com/"
                }
            ],
            image: somm,
            technologies: [
                t.js,
                t.php,
                t.sass,
                t.shopify,
            ],
            cardType: "large",
            customClassNames: {
                description: "max-w-[650px]",
                bottomIndent: "mb-32",
                image: "somm-m"
            }
        },
        {
            title: "Class.wiki",
            description: "An online educational learning platform created by a team of developers. I was responsible for developing the React part of the system, providing an interactive and dynamic experience for users",
            links: [
                {
                    text: "Visit Site",
                    url: "https://class.wiki/"
                }
            ],
            image: class_wiki,
            technologies: [
                t.ts,
                t.react,
                t.sass,
            ], customClassNames: {
                description: "max-w-[390px]",
                image: "max-w-[50%] h-auto right-0"
            }
        },
        {
            title: "HEY (:",
            description: "An online stylish clothing store for creative people. I present a website where every layout and JS script is carefully crafted to bring to life a very beautiful website. We are glad to see you here!",
            links: [
                {
                    text: "Visit Site",
                    url: "https://heywithlove.ru/"
                }
            ],
            image: hey,
            technologies: [
                t.js,
                t.tilda
            ],
            cardType: "medium",
            customClassNames: {
                description: "max-w-[540px]",
                image: "max-w-[50%] h-auto right-0"
            }
        },
        {
            title: "Agave En Linea",
            description: "Agave en Linea is a GoMadre partner, selling mezcal and agave distillates from Mexico. Worked on interfaces, SquareSpace and Shopify integrations, delivering high quality and culturally immersive experiences",
            image: agave_en_linea,
            links: [
                {
                    text: "Visit Site",
                    url: "https://agaveenlinea.com/"
                }
            ],
            technologies: [
                t.js,
                t.squarespace,
                t.shopify,
            ],
            cardType: "small",

            customClassNames: {
                description: "max-w-[400px]"
            }
        }
    ],
    ru: [
        {
            title: "Sk8ology",
            description: "SK8 - это  интернет-магазин скейтбордов. Мы провели полный редизайн, оживив сайт, дизайн которого уже немного устарел. Теперь современный дизайн  веб-сайта гармонично сочетается с скейтбордным стилем.",
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://sk8.studiobox.dev"
                },
                {
                    text: "Github",
                    url: "https://github.com/molodoychelovek0123/board-online-shop"
                }
            ],
            image: sk8,
            cardType: "large",
            technologies: [
                t.ts,
                t.next,
                t.sass,
                t.tailwind,
            ],
            customClassNames: {
                description: "max-w-[500px]",
                image: "w-full h-auto left-0 sk8-m"
            }
        },
        {
            title: "Gomadre",
            description: "Разработка веб-сайта для GoMadre - интернет-магазина алкоголя и мексиканского ресторана. С яркой желтой палитрой и разнообразной векторной графикой сайт излучает живую привлекательность.",
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://gomadreshop.com"
                }
            ],
            image: gomadre,
            technologies: [
                t.js,
                t.liquid,
                t.shopify,
            ],
            cardType: "small",
            customClassNames: {
                description: "max-w-[390px]",
                image: "max-w-[50%] h-auto right-0"
            }
        },
        {
            title: "Conversion Opt.",
            description: "Я разработал яркий веб-сайт на Next.js, чтобы улучшить свои навыки работы с TinaCMS. Одобренный клиентом, его красочный дизайн предлагает легкость настройки.",
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://conversionoptimizationpros.com"
                },
                {
                    text: "Github",
                    url: "https://github.com/molodoychelovek0123/tina-conversionoptimizationpros"
                }
            ],
            technologies: [
                t.ts,
                t.tina,
                t.next,
                t.tailwind,
            ],
            cardType: "small",
            customClassNames: {
                description: "max-w-[390px]"
            }
        },
        {
            title: "Portfolio 2022",
            description: "Мой предыдущий портфолио - это красочный проект, созданный в React. Разработка заняла всего 2 дня.",
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://cv.studiobox.dev/"
                },
                {
                    text: "Github",
                    url: "https://github.com/molodoychelovek0123/portfolio-rjs"
                }
            ],
            technologies: [
                t.js,
                t.react,
                t.sass,
            ],
            cardType: "small",
            customClassNames: {
                description: "max-w-[390px]"
            }
        },
        {
            title: "DGL",
            description: "Веб-проект на WordPress для DGL (архитектурное агентство): динамичный дизайн с эффектами GSAP подчеркивает впечатляющ portolio компании, гарантируя визуальный эффект.",
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://dglandscapes.com"
                }
            ],
            technologies: [
                t.js,
                t.gsap,
                t.php,
            ],
            cardType: "medium",
            customClassNames: {
                description: "max-w-[500px]"
            }
        },
        {
            title: "Box.dev",
            description: "Перед тем, как начать работать в NMA, я разрабатывал веб-студию. Я придерживался минимализма, стремясь создать привлекательные и функциональные веб-сайты. Мне удалось создать простой, но вдохновляющий дизайн.",
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://studiobox.dev/"
                }
            ],
            image: box_dev,
            technologies: [
                t.js,
                t.php,
                t.sass
            ],
            cardType: "small",

            customClassNames: {
                description: "max-w-[400px]",
                image: "max-w-[61%] h-auto right-0"
            }
        },
        {
            title: "Sommtable",
            description: "Sommtable - ваш проводник в мир вина и гастрономии, многофункциональный проект. Платформа соединяет знатоков с ведущими экспертами. Здесь вы можете бронировать онлайн-уроки, дегустации, а также приобретать эксклюзивные продукты. Sommtable - это не просто веб-платформа, это настоящее сообщество людей, которые любят исследовать, учиться и наслаждаться миром вина и еды.",
            links: [
                {
                    text: "Онлайн магазин",
                    url: "https://sommtable.com/"
                },
                {
                    text: "Найти эксперта",
                    url: "https://sommtable.pro/"
                },
                {
                    text: "Забронировать опыт",
                    url: "https://somm.app/"
                },
                {
                    text: "Импорт вина",
                    url: "https://sommtableimports.com/"
                }
            ],
            image: somm,
            technologies: [
                t.js,
                t.php,
                t.sass,
                t.shopify,
            ],
            cardType: "large",
            customClassNames: {
                description: "max-w-[650px]",
                bottomIndent: "mb-32",
                image: "somm-m"
            }
        },
        {
            title: "Class.wiki",
            description: "Онлайн-образовательная платформа, созданная командой разработчиков. Я был ответственен за разработку части системы на React, обеспечивая интерактивный и динамичный опыт для пользователей.",
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://class.wiki/"
                }
            ],
            image: class_wiki,
            technologies: [
                t.ts,
                t.react,
                t.sass,
            ], customClassNames: {
                description: "max-w-[390px]",
                image: "max-w-[50%] h-auto right-0"
            }
        },
        {
            title: "HEY (:",
            description: "Онлайн-магазин стильной одежды для творческих людей. Я представляю вам веб-сайт, где каждый макет и скрипт на JS тщательно созданы, чтобы оживить красивый сайт. Мы рады видеть вас здесь!",
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://heywithlove.ru/"
                }
            ],
            image: hey,
            technologies: [
                t.js,
                t.tilda
            ],
            cardType: "medium",
            customClassNames: {
                description: "max-w-[540px]",
                image: "max-w-[50%] h-auto right-0"
            }
        },
        {
            title: "Agave En Linea",
            description: "Agave en Linea - партнер GoMadre, продает мескаль и агавные дистилляты из Мексики. Работал над интерфейсами, интеграциями SquareSpace и Shopify, обеспечивая высокое качество и культурно насыщенные впечатления.",
            image: agave_en_linea,
            links: [
                {
                    text: "Перейти на сайт",
                    url: "https://agaveenlinea.com/"
                }
            ],
            technologies: [
                t.js,
                t.squarespace,
                t.shopify,
            ],
            cardType: "small",

            customClassNames: {
                description: "max-w-[400px]"
            }
        }
    ]
}