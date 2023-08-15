import React from 'react';


const schemaData = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Kirill Tatarinov",
    "url": "https://hireme.studiobox.dev",
    "jobTitle": "Frontend Developer",
    "worksFor": [
        {
            "@type": "Organization",
            "name": "Studiobox.dev",
            "startDate": "2020-01-01",
            "endDate": "2021-12-31",
            "url": "https://studiobox.dev"
        },
        {
            "@type": "Organization",
            "name": "NMA",
            "startDate": "2021-01-01",
            "endDate": "2023-08-15",
            "url": "https://newmedia.agency"
        }
    ],
    "birthDate": "2001-10-30",
    "email": "boxdeveloper@studiobox.dev",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "Moscow",
        "addressCountry": "Russia"
    },
    "description": "Passionate Frontend Developer with experience in web development and a focus on creating user-friendly and responsive interfaces.",
    "sameAs": [
        "https://linkedin/in/boxdeveloper",
        "https://github.com/molodoychelovek0123/",
        "https://t.me/boxdeveloper",
    ]
}

export const Schema = () => {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}></script>
}