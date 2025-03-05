'use client'

import { useTranslation } from 'next-i18next'
import styles from './DetailsBlock.module.css'
import { DetailsBlockType } from './DetailsBlockTypes'
import { useEffect, useState } from 'react'

const DetailsBlock = ({ data }: DetailsBlockType) => {
    const { i18n } = useTranslation()
    const [language, setLanguage] = useState("")
    console.log(language, "language");

    useEffect(() => {
        setLanguage(i18n.language)
    }, [i18n.language])

    const description = language === "am" ? data?.textAm_1 : language === "ru" ? data?.titleRu : data?.titleEn

    return (
        <>
            <div className={styles.block}>
                <div>
                    <p className={styles.title}>{data?.titleAm}</p>
                    <div className={styles.description}>{description}</div>
                </div>

                <div className={styles.images}>
                    <img
                        src={data.image_11}
                        alt="Main Image"
                        className={styles.mainImage}
                    />
                    <img src={data.image_12} alt="Image 12" />
                    <img src={data.image_13} alt="Image 13" />
                    <img src={data.image_14} alt="Image 14" />
                </div>
            </div>

            <div className={styles.block}>
                <div className={styles.images}>
                    <img
                        src={data.image_21}
                        alt="Main Image"
                        className={styles.mainImage}
                    />
                    <img src={data.image_22} alt="Image 12" />
                    <img src={data.image_23} alt="Image 13" />
                    <img src={data.image_24} alt="Image 14" />
                </div>

                <div >
                    <div className={styles.description}>{data.textAm_2}</div>
                </div>
            </div>
        </>
    )
}

export default DetailsBlock
