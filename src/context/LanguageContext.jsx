import React, { createContext, useEffect, useState } from 'react'

export const ChangeLanguageContext = createContext()

const LanguageContext = ({ children }) => {
    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem("lang")
        return savedLang ? savedLang : "uz"
    })

    useEffect(() => {
        localStorage.setItem("lang", lang)
    }, [lang])

    const translations = {
        uz: {
            welcome_header: "Clicon onlayn elektron savdo do‘koniga xush kelibsiz.",
            search_header: "Istalgan mahsulotni qidiring",
            follow_header: "Bizni kuzatib boring",
            // main
            deals_hero: "Chegirmalar tugashiga qoldi",
            all_hero: "Barcha mahsulotlarni ko‘rish",
            // footer
            praesent_footer: "Ushbu bo‘limda kompaniya haqida qisqacha ma’lumot beriladi.",
            email_footer: "Elektron pochta manzili",
            subscribe_footer: "Obuna bo‘lish",
            compyuter: "Kompyuter va noutbuklar",
            smarthPhone: ""
        },
        en: {
   
        },
    }

    const t = translations[lang]

    return (
        <ChangeLanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </ChangeLanguageContext.Provider>
    )
}

export default LanguageContext
