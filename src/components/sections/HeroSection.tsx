"use client";
import Image from "next/image";
import FadeIn from "../ui/FadeIn";
import Aurora from "../ui/Aurora";
import Particles from "../ui/Particles";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black"></div>
        
        {/* Aurora Effect with TI2025 Purple/Indigo Theme */}
        <div className="absolute inset-0 opacity-80">
          <Aurora
            colorStops={["#8b5cf6", "#a78bfa", "#6366f1"]}
            blend={0.6}
            amplitude={1.2}
            speed={0.4}
          />
        </div>
        
        {/* 3D Particles Effect */}
        <div className="absolute inset-0 opacity-60">
          <Particles
            particleColors={['#ffffff', '#a78bfa', '#8b5cf6']}
            particleCount={150}
            particleSpread={12}
            speed={0.08}
            particleBaseSize={80}
            moveParticlesOnHover={true}
            particleHoverFactor={0.5}
            alphaParticles={true}
            disableRotation={false}
            sizeRandomness={1.5}
            cameraDistance={20}
          />
        </div>
        
        {/* TI2025 Top Aegis Emblem - blended into background */}
        <div className="absolute top-45 left-1/2 transform -translate-x-1/2 w-40 h-40">
          <Image
            src="/TI2025TopAegis_410x.png"
            alt="TI2025 Top Aegis Trophy"
            width={550}
            height={550}
            className="w-full h-full object-contain opacity-80 drop-shadow-2xl"
            priority
            quality={95}
          />
          {/* Enhanced glow effect around the emblem */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-indigo-500/20 rounded-full blur-2xl -z-10"></div>
        </div>
        
        {/* Additional atmospheric overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-purple-900/20"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Subtle logo/title */}
        <div className="mb-8">
          <h3 className="text-lg text-purple-300 font-light tracking-wider">
          
          </h3>
        </div>

        {/* Main Title */}
        <FadeIn className="mb-12">
          <h1 className="text-10xl md:text-8xl font-bold text-white drop-shadow-2xl mb-6 tracking-wide">
            The International
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-purple-100 drop-shadow-xl tracking-wide">
            2025
          </h2>
        </FadeIn>

        {/* Description */}
        <FadeIn className="mb-16 max-w-3xl mx-auto">
          <p className="text-xl text-gray-200 leading-relaxed drop-shadow-lg">
            The ultimate Dota 2 championship returns with the world&apos;s elite teams competing for glory and the largest prize pool in esports history.
          </p>
        </FadeIn>

        {/* Prize Pool */}
        <FadeIn className="mb-16">
          <div className="text-lg text-purple-200 font-light mb-2">Current Prize Pool</div>
          <div className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl">
         $2,707,203
          </div>
        </FadeIn>

        {/* Countdown / Live CTA */}
        

        {/* Event Details */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-3">
              <svg className="w-full h-full text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-white font-light drop-shadow-md">September 04, 2025</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 mb-3">
              <svg className="w-full h-full text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-white font-light drop-shadow-md">Hamburg, Germany</div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
