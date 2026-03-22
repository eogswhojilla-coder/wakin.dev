import React, { useState } from "react";
import HeaderSection from "./_sections/header-section";
import HeroSection from "./_sections/hero-section";
import FloatingLines from "./_sections/floating-line-section";
import AboutSection from "./_sections/about-section";
import ProjectSection from "./_sections/project-section";
import ExperienceSection from "./_sections/experience-section";
import ContactSection from "./_sections/contact-section";
import FooterSection from "./_sections/footer-section";
import CarouselSection from "./_sections/carousel-section";
import ProgressScrollSection from "./_sections/progress-scroll-section";
import SplashScreen from "./_sections/splash-screen-section";

export default function Page() {
    const [splashDone, setSplashDone] = useState(false);

    return (
        <>
            {!splashDone && (
                <SplashScreen onComplete={() => setSplashDone(true)} />
            )}

            <div
                className="bg-[#09090b] w-full min-h-screen relative"
                style={{
                    overflowX: "clip",
                    pointerEvents: splashDone ? "auto" : "none",
                    opacity: splashDone ? 1 : 0.3,
                    transition: "opacity 0.5s ease",
                }}
            >
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-purple-600/12 rounded-full blur-[120px]" />
                    <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-indigo-600/8 rounded-full blur-[120px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/8 rounded-full blur-[100px]" />

                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
                                             linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                            backgroundSize: "60px 60px",
                        }}
                    />

                    <FloatingLines
                        enabledWaves={["top", "middle", "bottom"]}
                        lineCount={5}
                        lineDistance={5}
                        bendRadius={5}
                        bendStrength={-0.5}
                        interactive={true}
                        parallax={true}
                    />
                </div>

                <div className="relative z-10">
                    <HeaderSection />
                    <ProgressScrollSection />

                    <main className="flex flex-col gap-0">
                        <section id="home">
                            <HeroSection />
                        </section>
                        <section id="about">
                            <AboutSection />
                        </section>
                        <CarouselSection />
                        <section id="projects">
                            <ProjectSection />
                        </section>
                        <section id="experience">
                            <ExperienceSection />
                        </section>
                        <section id="contact">
                            <ContactSection />
                        </section>
                        <FooterSection />
                    </main>
                </div>
            </div>
        </>
    );
}
