"use client"

import React, { useEffect } from 'react'
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

const imghover = () => {
    gsap.registerPlugin(SplitText);
    
    useEffect(()=> {
            const profileImagesContainer = document.querySelector('.profile-images');
            const profileImages = document.querySelectorAll('.profile-images .img');
            const nameElements = document.querySelectorAll('.profile-names .name');
            const nameHeadings = document.querySelectorAll('.profile-names .name h1');

            console.log(nameHeadings);
            nameHeadings.forEach((heading) => {
                const split = new SplitText(heading, {type: 'chars'})
                split.chars.forEach((char)=> {
                    char.classList.add('letter');
                });
            });

            const defaultLetters = nameElements[0].querySelectorAll(".letter");
            gsap.set(defaultLetters, {y: "100%"});

            if (window.innerWidth > 900) {
                profileImages.forEach((img, inx) => {
                    const correspondingName = nameElements[inx + 1];
                    const letters = correspondingName?.querySelectorAll(".letter");

                    img.addEventListener("mouseenter", ()=> {
                        console.log("asdasd");
                        gsap.to(img, {
                            width: 140,
                            height: 140,
                            duration: 0.5,
                            ease: "power2.inOut", 
                        });

                        gsap.to(letters, {
                            y: "-100%",
                            ease: "power2.inOut",
                            duration: 0.75,
                            stagger: {
                                each: 0.025,
                                from: "center",
                            },
                        });
                    });
                    img.addEventListener("mouseleave", ()=> {
                        gsap.to(img, {
                            width: 70,
                            height: 70,
                            duration: 0.5,
                            ease: "power2.inOut", 
                        });

                        gsap.to(letters, {
                            y: "0%",
                            ease: "power2.out",
                            duration: 0.75,
                            stagger: {
                                each: 0.025,
                                from: "center",
                            },
                        });
                    });
                });

                profileImagesContainer?.addEventListener("mouseenter", ()=> {
                    gsap.to(defaultLetters, {
                        y: "0%",
                        ease: "power4.out",
                        duration: 0.75,
                        stagger: {
                            each: 0.025,
                            from: "center",
                        },
                    });
                });

                profileImagesContainer?.addEventListener("mouseleave", ()=> {
                    gsap.to(defaultLetters, {
                        y: "100%",
                        ease: "power4.out",
                        duration: 0.75,
                        stagger: {
                            each: 0.025,
                            from: "center",
                        },
                    });
                });
            }
    }, [])

  return (
    <section>
        <div className='profile-images'>
           <div className="img"><img src="images/img1.jpg" alt="gojo" /></div>
           <div className="img"><img src="images/img2.jpg" alt="songwo" /></div>
           <div className="img"><img src="images/img3.jpg" alt="geto" /></div>
           <div className="img"><img src="images/img4.jpg" alt="mitsuri" /></div>
           <div className="img"><img src="images/img5.jpg" alt="itachi" /></div>
           <div className="img"><img src="images/img6.jpg" alt="naruto" /></div>
           <div className="img"><img src="images/img7.jpg" alt="momo" /></div> 
           <div className="img"><img src="images/img8.jpg" alt="makima" /></div>
           <div className="img"><img src="images/img9.jpg" alt="kakashi" /></div>
        </div>

        <div className='profile-names'>
            <div className="name default"><h1>Ani Mation</h1></div>
            <div className="name"><h1>Gojo Satoru</h1></div>
            <div className="name"><h1>Songwo</h1></div>
            <div className="name"><h1>Geto</h1></div>
            <div className="name"><h1>Mitsuri</h1></div>
            <div className="name"><h1>Itachi</h1></div>
            <div className="name"><h1>Naruto</h1></div>
            <div className="name"><h1>Momo</h1></div>
            <div className="name"><h1>Makima</h1></div>
            <div className="name"><h1>Kakashi</h1></div>
        </div>
    </section>
  )
}

export default imghover