import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 3,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1204.000000pt" height="1741.000000pt" viewBox="0 0 1204.000000 1741.000000"
 preserveAspectRatio="xMidYMid meet">

<g  className="svg-container" transform="translate(0.000000,1741.000000) scale(0.100000,-0.100000)"
fill="none" stroke="none">
<path ref={outlineLogoRef} 
d="M671 16648 l-651 -747 0 -1686 0 -1685 308 0 c169 0 1769 11 3557 25
1787 14 3258 24 3269 23 14 -2 -671 -795 -2839 -3283 -1572 -1804 -2898 -3325
-2946 -3380 -48 -55 -374 -428 -723 -830 l-636 -730 0 -2177 0 -2178 5309 0
5310 0 625 744 c344 409 631 750 639 757 11 11 18 332 40 1744 15 952 28 1745
27 1762 l0 33 -3564 2 -3564 3 3604 4210 3604 4210 0 1962 0 1963 -5359 2
-5359 3 -651 -747z m11346 -1228 l3 -1945 -3617 -4225 -3616 -4225 3578 -3
3578 -2 -6 -288 c-3 -158 -16 -941 -29 -1740 l-22 -1452 -5278 0 -5278 0 0
2148 0 2149 2933 3365 c1612 1850 3199 3670 3525 4044 l592 679 -3525 3 -3525
2 0 1713 c0 943 3 1717 7 1720 3 4 2407 6 5342 5 l5336 -3 2 -1945z m-7201
-1510 c2482 0 3505 -3 3502 -11 -2 -6 -255 -300 -563 -654 l-560 -644 -180 -1
c-99 0 -1588 -11 -3310 -25 -1722 -14 -3250 -25 -3397 -25 l-268 0 0 1670 0
1671 633 726 632 726 3 -1717 2 -1716 3506 0z m1774 -12400 l5279 0 -621 -740
-622 -740 -5298 0 -5298 0 0 2158 0 2157 638 732 637 731 3 -2149 2 -2149
5280 0z"/>
</g>
</svg>

     
    </div>
  )
}

export default Logo
