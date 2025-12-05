import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="w-full my-20 flex-center">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <p className="hiw-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
  <div className="relative flex-center" style={{ width: 320, height: 570 }}>
    <img 
      src={frameImg}
      alt="frame"
      className="absolute top-0 left-0 z-10 object-fill w-full h-full pointer-events-none"
    />
    <div className="absolute h-[98%] w-[96%] overflow-hidden flex items-center">
    
      <iframe
        className="w-full h-full object-cover rounded-[35px] pointer-events-none"
        src="https://www.youtube.com/embed/xqtA8gfWENc?autoplay=1&mute=1&loop=1&playlist=xqtA8gfWENc&controls=0&showinfo=0&rel=0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        style={{ aspectRatio: "9/16" }}
      >
      </iframe>
    </div>
  </div>
  <p className="mt-3 font-semibold text-center text-gray">Honkai: Star Rail</p>
</div>

          <div className="hiw-text-container">
                <div className="flex flex-col justify-center flex-1">
                  <p className="hiw-text g_fadeIn">
                    A17 Pro is an entirely new class of iPhone chip that delivers our {' '}
                    <span className="text-white">
                      best graphic performance by far
                    </span>.
                  </p>

                  <p className="hiw-text g_fadeIn">
                   Mobile {' '}
                    <span className="text-white">
                      games will look and feel so immersive
                    </span>,
                     with incredibly detailed environments and characters.
                  </p>
                </div>
              <div className="flex flex-col justify-center flex-1 g_fadeIn">
                <p className="hiw-text">New</p>
                <p className="hiw-bigtext">Pro-class GPU</p>
                <p className="hiw-text">with 6 cores</p>
              </div>
              </div>
            </div>
    </section>
  )
}

export default HowItWorks