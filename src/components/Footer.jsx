/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import horizontalLoop from '../utils/functions/horizontalLoop';

function Footer() {

    const gsapInitAnimation = () => {
        gsap.utils.toArray('.wrappers-text-shifted').forEach((line, i) => {
            const links = line.querySelectorAll("a")
            let tl = horizontalLoop(links, {
                repeat: -1,
                speed: 1 + i * 0.5,
                reversed: i ? true : false,
                paddingRight: parseFloat(window.getComputedStyle(links[0]).marginRight + 100)
            })
            links.forEach(link => {
                link.addEventListener("mouseenter", () => gsap.to(tl, {
                    timeScale: 0, overwrite: true
                }))

                link.addEventListener("mouseleave", () => gsap.to(tl, {
                    timeScale: i ? -1 : 1, overwrite: true
                }))

            })


        })
    }

    useEffect(() => {
        gsapInitAnimation()
    }, [])


    return (
        <footer>
            <div className="footer-map">
                <iframe
                    className="pointer-events-none select-none"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63274.36945766059!2d110.15826765686604!3d-7.613217054813654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf009a7d697%3A0xdd34334744dc3cb!2sCandi%20Borobudur!5e0!3m2!1sid!2sid!4v1708074510612!5m2!1sid!2sid"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0, width: "100%", filter: "invert(90%) grayscale(1)" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0" />
            </div>
            <div className="footer-top flex flex-nowrap relative overflow-hidden footer-label  gap-8 bg-[#9B3221] text-white font-bold text-4xl py-8 max-w-screen">
                <div className="wrappers-text-shifted flex gap-12">
                    <a href="https://www.instagram.com/borobudurpark" target='_blank'>
                        <span>
                            @borobudurpark
                        </span>
                    </a>
                    <a href="https://www.instagram.com/borobudurpark" target='_blank'>
                        <span>
                            @borobudurpark
                        </span>
                    </a>
                    <a href="https://www.instagram.com/borobudurpark" target='_blank'>
                        <span>
                            @borobudurpark
                        </span>
                    </a>
                    <a href="https://www.instagram.com/borobudurpark" target='_blank'>
                        <span>
                            @borobudurpark
                        </span>
                    </a>
                    <a href="https://www.instagram.com/borobudurpark" target='_blank'>
                        <span>
                            @borobudurpark
                        </span>
                    </a>
                    <a href="https://www.instagram.com/borobudurpark" target='_blank'>
                        <span>
                            @borobudurpark
                        </span>
                    </a>
                </div>
            </div>
            <div className="footer-bottom container mx-auto">
                <div className="bwrapper px-8 lg:px-16">
                    <div className="wrapper-top py-16 flex lg:flex-row flex-col justify-between">
                        <div className="tleft">
                            <h1 className="text-5xl lg:text-7xl text-[#E4E1D4] font-bold">BOROBUDUR</h1>
                        </div>
                        <div className="topright text-[#E4E1D4] flex flex-col lg:mt-0 mt-4 lg:gap-3 mb-16">
                            <div className="home flex gap-6">
                                <p>Home</p>
                                <p>Magelang, Indonesia</p>
                            </div>
                            <div className="teams flex gap-6">
                                <p>Teams</p>
                                <p>-7.607355, 110.203804</p>
                            </div>
                            <div className="socialmedia flex items-center gap-2 justify-start lg:mt-0 mt-4 lg:justify-center">
                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.333008" width="30" height="30" rx="15" fill="#302E2D" />
                                    <rect x="0.5" y="0.833008" width="29" height="29" rx="14.5" stroke="#E4E1D4" strokeOpacity="0.7" />
                                    <path d="M17.9166 9.49957C18.6895 9.50188 19.43 9.80993 19.9766 10.3565C20.5231 10.903 20.8311 11.6436 20.8334 12.4164V18.2496C20.8311 19.0225 20.5231 19.763 19.9766 20.3096C19.43 20.8561 18.6895 21.1641 17.9166 21.1664H12.0834C11.3105 21.1641 10.57 20.8561 10.0234 20.3096C9.47692 19.763 9.16887 19.0225 9.16656 18.2496V12.4164C9.16887 11.6436 9.47692 10.903 10.0234 10.3565C10.57 9.80993 11.3105 9.50188 12.0834 9.49957H17.9166ZM17.9166 8.33301H12.0834C9.8375 8.33301 8 10.1705 8 12.4164V18.2496C8 20.4955 9.8375 22.333 12.0834 22.333H17.9166C20.1625 22.333 22 20.4955 22 18.2496V12.4164C22 10.1705 20.1625 8.33301 17.9166 8.33301Z" fill="#E4E1D4" />
                                    <path d="M18.7916 12.4165C18.6185 12.4165 18.4493 12.3652 18.3054 12.269C18.1615 12.1729 18.0494 12.0362 17.9832 11.8764C17.9169 11.7165 17.8996 11.5405 17.9334 11.3708C17.9671 11.2011 18.0505 11.0452 18.1728 10.9228C18.2952 10.8004 18.4511 10.7171 18.6209 10.6833C18.7906 10.6496 18.9665 10.6669 19.1264 10.7331C19.2863 10.7993 19.423 10.9115 19.5191 11.0554C19.6152 11.1993 19.6666 11.3684 19.6666 11.5415C19.6668 11.6565 19.6443 11.7704 19.6005 11.8766C19.5566 11.9829 19.4921 12.0795 19.4108 12.1608C19.3295 12.2421 19.233 12.3065 19.1267 12.3504C19.0204 12.3943 18.9065 12.4168 18.7916 12.4165ZM15 12.9996C15.4615 12.9996 15.9127 13.1365 16.2964 13.3929C16.6801 13.6493 16.9792 14.0137 17.1558 14.4401C17.3324 14.8665 17.3786 15.3357 17.2886 15.7883C17.1986 16.2409 16.9763 16.6567 16.65 16.9831C16.3237 17.3094 15.9079 17.5316 15.4552 17.6217C15.0026 17.7117 14.5334 17.6655 14.107 17.4889C13.6807 17.3123 13.3162 17.0132 13.0598 16.6295C12.8034 16.2457 12.6666 15.7946 12.6666 15.3331C12.6672 14.7144 12.9133 14.1213 13.3507 13.6838C13.7882 13.2463 14.3813 13.0003 15 12.9996ZM15 11.8331C14.3078 11.8331 13.6311 12.0383 13.0555 12.4229C12.4799 12.8075 12.0313 13.3541 11.7664 13.9937C11.5015 14.6332 11.4322 15.3369 11.5673 16.0159C11.7023 16.6948 12.0356 17.3185 12.5251 17.8079C13.0146 18.2974 13.6383 18.6308 14.3172 18.7658C14.9961 18.9009 15.6999 18.8316 16.3394 18.5666C16.9789 18.3017 17.5256 17.8531 17.9101 17.2776C18.2947 16.702 18.5 16.0253 18.5 15.3331C18.5 14.4048 18.1313 13.5146 17.4749 12.8582C16.8185 12.2018 15.9283 11.8331 15 11.8331Z" fill="#E4E1D4" />
                                </svg>
                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.333008" width="30" height="30" rx="15" fill="#302E2D" />
                                    <rect x="0.5" y="0.833008" width="29" height="29" rx="14.5" stroke="#E4E1D4" strokeOpacity="0.7" />
                                    <path d="M17.9166 9.49957C18.6895 9.50188 19.43 9.80993 19.9766 10.3565C20.5231 10.903 20.8311 11.6436 20.8334 12.4164V18.2496C20.8311 19.0225 20.5231 19.763 19.9766 20.3096C19.43 20.8561 18.6895 21.1641 17.9166 21.1664H12.0834C11.3105 21.1641 10.57 20.8561 10.0234 20.3096C9.47692 19.763 9.16887 19.0225 9.16656 18.2496V12.4164C9.16887 11.6436 9.47692 10.903 10.0234 10.3565C10.57 9.80993 11.3105 9.50188 12.0834 9.49957H17.9166ZM17.9166 8.33301H12.0834C9.8375 8.33301 8 10.1705 8 12.4164V18.2496C8 20.4955 9.8375 22.333 12.0834 22.333H17.9166C20.1625 22.333 22 20.4955 22 18.2496V12.4164C22 10.1705 20.1625 8.33301 17.9166 8.33301Z" fill="#E4E1D4" />
                                    <path d="M18.7916 12.4165C18.6185 12.4165 18.4493 12.3652 18.3054 12.269C18.1615 12.1729 18.0494 12.0362 17.9832 11.8764C17.9169 11.7165 17.8996 11.5405 17.9334 11.3708C17.9671 11.2011 18.0505 11.0452 18.1728 10.9228C18.2952 10.8004 18.4511 10.7171 18.6209 10.6833C18.7906 10.6496 18.9665 10.6669 19.1264 10.7331C19.2863 10.7993 19.423 10.9115 19.5191 11.0554C19.6152 11.1993 19.6666 11.3684 19.6666 11.5415C19.6668 11.6565 19.6443 11.7704 19.6005 11.8766C19.5566 11.9829 19.4921 12.0795 19.4108 12.1608C19.3295 12.2421 19.233 12.3065 19.1267 12.3504C19.0204 12.3943 18.9065 12.4168 18.7916 12.4165ZM15 12.9996C15.4615 12.9996 15.9127 13.1365 16.2964 13.3929C16.6801 13.6493 16.9792 14.0137 17.1558 14.4401C17.3324 14.8665 17.3786 15.3357 17.2886 15.7883C17.1986 16.2409 16.9763 16.6567 16.65 16.9831C16.3237 17.3094 15.9079 17.5316 15.4552 17.6217C15.0026 17.7117 14.5334 17.6655 14.107 17.4889C13.6807 17.3123 13.3162 17.0132 13.0598 16.6295C12.8034 16.2457 12.6666 15.7946 12.6666 15.3331C12.6672 14.7144 12.9133 14.1213 13.3507 13.6838C13.7882 13.2463 14.3813 13.0003 15 12.9996ZM15 11.8331C14.3078 11.8331 13.6311 12.0383 13.0555 12.4229C12.4799 12.8075 12.0313 13.3541 11.7664 13.9937C11.5015 14.6332 11.4322 15.3369 11.5673 16.0159C11.7023 16.6948 12.0356 17.3185 12.5251 17.8079C13.0146 18.2974 13.6383 18.6308 14.3172 18.7658C14.9961 18.9009 15.6999 18.8316 16.3394 18.5666C16.9789 18.3017 17.5256 17.8531 17.9101 17.2776C18.2947 16.702 18.5 16.0253 18.5 15.3331C18.5 14.4048 18.1313 13.5146 17.4749 12.8582C16.8185 12.2018 15.9283 11.8331 15 11.8331Z" fill="#E4E1D4" />
                                </svg>
                                <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.333008" width="30" height="30" rx="15" fill="#302E2D" />
                                    <rect x="0.5" y="0.833008" width="29" height="29" rx="14.5" stroke="#E4E1D4" strokeOpacity="0.7" />
                                    <path d="M17.9166 9.49957C18.6895 9.50188 19.43 9.80993 19.9766 10.3565C20.5231 10.903 20.8311 11.6436 20.8334 12.4164V18.2496C20.8311 19.0225 20.5231 19.763 19.9766 20.3096C19.43 20.8561 18.6895 21.1641 17.9166 21.1664H12.0834C11.3105 21.1641 10.57 20.8561 10.0234 20.3096C9.47692 19.763 9.16887 19.0225 9.16656 18.2496V12.4164C9.16887 11.6436 9.47692 10.903 10.0234 10.3565C10.57 9.80993 11.3105 9.50188 12.0834 9.49957H17.9166ZM17.9166 8.33301H12.0834C9.8375 8.33301 8 10.1705 8 12.4164V18.2496C8 20.4955 9.8375 22.333 12.0834 22.333H17.9166C20.1625 22.333 22 20.4955 22 18.2496V12.4164C22 10.1705 20.1625 8.33301 17.9166 8.33301Z" fill="#E4E1D4" />
                                    <path d="M18.7916 12.4165C18.6185 12.4165 18.4493 12.3652 18.3054 12.269C18.1615 12.1729 18.0494 12.0362 17.9832 11.8764C17.9169 11.7165 17.8996 11.5405 17.9334 11.3708C17.9671 11.2011 18.0505 11.0452 18.1728 10.9228C18.2952 10.8004 18.4511 10.7171 18.6209 10.6833C18.7906 10.6496 18.9665 10.6669 19.1264 10.7331C19.2863 10.7993 19.423 10.9115 19.5191 11.0554C19.6152 11.1993 19.6666 11.3684 19.6666 11.5415C19.6668 11.6565 19.6443 11.7704 19.6005 11.8766C19.5566 11.9829 19.4921 12.0795 19.4108 12.1608C19.3295 12.2421 19.233 12.3065 19.1267 12.3504C19.0204 12.3943 18.9065 12.4168 18.7916 12.4165ZM15 12.9996C15.4615 12.9996 15.9127 13.1365 16.2964 13.3929C16.6801 13.6493 16.9792 14.0137 17.1558 14.4401C17.3324 14.8665 17.3786 15.3357 17.2886 15.7883C17.1986 16.2409 16.9763 16.6567 16.65 16.9831C16.3237 17.3094 15.9079 17.5316 15.4552 17.6217C15.0026 17.7117 14.5334 17.6655 14.107 17.4889C13.6807 17.3123 13.3162 17.0132 13.0598 16.6295C12.8034 16.2457 12.6666 15.7946 12.6666 15.3331C12.6672 14.7144 12.9133 14.1213 13.3507 13.6838C13.7882 13.2463 14.3813 13.0003 15 12.9996ZM15 11.8331C14.3078 11.8331 13.6311 12.0383 13.0555 12.4229C12.4799 12.8075 12.0313 13.3541 11.7664 13.9937C11.5015 14.6332 11.4322 15.3369 11.5673 16.0159C11.7023 16.6948 12.0356 17.3185 12.5251 17.8079C13.0146 18.2974 13.6383 18.6308 14.3172 18.7658C14.9961 18.9009 15.6999 18.8316 16.3394 18.5666C16.9789 18.3017 17.5256 17.8531 17.9101 17.2776C18.2947 16.702 18.5 16.0253 18.5 15.3331C18.5 14.4048 18.1313 13.5146 17.4749 12.8582C16.8185 12.2018 15.9283 11.8331 15 11.8331Z" fill="#E4E1D4" />
                                </svg>
                            </div>


                        </div>
                    </div>
                    <hr className="w-full" />
                    <div className="wrapper-bottom flex lg:flex-row flex-col justify-between items-center py-6 text-[#E4E1D4]">
                        <div className="bleft">
                            <p>
                                Copyright 2023 Borobudur. All rights reserved.
                            </p>
                        </div>
                        <div className="bright">
                            <p>
                                Created by Connexsoft
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer