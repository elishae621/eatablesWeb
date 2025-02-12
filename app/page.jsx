'use client'
import '@styles/globals.css';
import Image from 'next/image';
import Nav from '@components/Nav';
import styles from './page.module.css';
import Footer from '@components/Footer'
import Link from 'next/link';
import useScrollReveal from '@components/useScrollReveal';
import EmblaCarousel from '@components/EmblaCarousel'
import {useState, useEffect} from 'react';

export const Home = () => {

  useScrollReveal([
    `.${styles.convMain}`,
    `.${styles.conv1}`,
    `.${styles.conv2}`,
    `.${styles.conv3}`,
    `.${styles.conv4}`,
    `.${styles.conv5}`,
    `.${styles.sectionOneImage}`,
    `.${styles.sell_deliver}`,
    `.${styles.sell_deliver2}`,
    `.${styles.gwp_right}`,
    `.${styles.gwp_left}`,
    
         
  ]);

  const [slides, setSlides] = useState([
    { image1:  "/assets/images/phone1.svg", image2: "/assets/images/phone1_msg.svg" },
    { image1:  "/assets/images/phone2.svg", image2: "/assets/images/phone2_msg.svg" },
    { image1:  "/assets/images/phone3.svg", image2: "/assets/images/phone3_msg.svg" },  
  ]);

  useEffect(()=>{
    const updateSlidesForScreen = () => {
    if(typeof window !== "undefined" && window.matchMedia("(max-width: 830px)").matches){
      setSlides([
        { image1:  "/assets/images/phone1.svg", image2: "/assets/images/phone1_msg.svg" },
        { image1:  "/assets/images/phone2.svg", image2: "/assets/images/phone2_msg.svg" },
        { image1:  "/assets/images/phone3.svg", image2: "/assets/images/phone3_msg.svg" },  
      
      ]);
    } else {
      setSlides([
        { image1:  "/assets/images/phone1.svg", image2: "/assets/images/phone1_msg.svg" },
        { image1:  "/assets/images/phone2.svg", image2: "/assets/images/phone2_msg.svg" },
        { image1:  "/assets/images/phone3.svg", image2: "/assets/images/phone3_msg.svg" }, 
      ]);
    }

    };

    updateSlidesForScreen();
    if(typeof window !== "undefined"){
      window.addEventListener('resize', updateSlidesForScreen);

    }

    return () => {

      if(typeof window !== "undefined"){
        

        window.removeEventListener('resize', updateSlidesForScreen);

      }
    }
  

  }, []);


  return (
    <div className={styles.main}>

      <div className={styles.doodle}> 


      <Nav />
      <section className={styles.sectionOne}>
      <div className={styles.sectionOneLeftItem}>
     <h1 className={styles.headOrder}>Order with Eatables</h1>
      <p className={styles.headBody}>When you are too occupied, tired or <br/> feeling lazy, we are one click away.</p>

      <div className={styles.downloadLinkContainer}>

<Link className={styles.downloadLink}
href="https://play.google.com/store/apps/details?id=com.eatables.app"
><Image src="assets/images/playstore.svg"
width={15}
height={15}
alt="playstore icon"/> Download on Playstore</Link>
<Link
href="https://apps.apple.com/us/app/eatables/id6502586489"
className={styles.downloadLink}
> <Image src="assets/images/apple.svg"
width={15}
height={15}
alt="apple icon"
/>Download on App Store</Link>
</div>
      </div>

      
  
      <div className={styles.gwp_container}>


      <picture style={{}}>
          <source 
          media="(max-width: 830px)" 
          srcSet="/assets/images/girlWithPhone-mobile.png"
        />
        <Image 
          className={styles.sectionOneImage}
          src="/assets/images/gwp_main.png"
          width={750}
          height={500}
          alt="girl with phone"

          
        />
    </picture>

    <Image 
    className={styles.gwp_right}
    src="/assets/images/gwp_right.svg"
    width={200}
    height={200}
    alt="gwp_right"
    />
    <Image 
    className={styles.gwp_left}
    src="/assets/images/gwp_left.svg"
    width={200}
    height={200}
    alt="gwp_left"
    />
      </div>

      </section>

      </div>

      <section className={styles.sectionTwo}>

        <h1  className={styles.h_1}> Convenience in One app</h1>
      
        <div>
        <Image 
          src="/assets/images/convMain.svg"
          width={300}
          height={250}
          layout="intrinsic"
          className={styles.convMain}
          alt="convMain"
          />

        </div>


        <div className={styles.convImages}>
         
          <Image 
          src="/assets/images/conv1.svg"
          layout="intrinsic"
          width={150}
          height={78}
          className={styles.conv1}
          alt="conv1"
          
          />
          <Image 
          src="/assets/images/conv2.svg"
          width={250}
          height={150}
          className = {styles.conv2}
          alt="conv2"
          />
          <Image 
          src="/assets/images/conv3.svg"
          width={150}
          height={78}
          layout="intrinsic"
          className = {styles.conv3}
          alt="conv3"
          />
          <Image 
          src="/assets/images/conv4.svg"
          width={150}
          height={78}
          layout="intrinsic"
          className = {styles.conv4}
          alt="conv4"
          />
          <Image 
          src="/assets/images/conv5.svg"
          width={150}
          height={78}
          layout="intrinsic"
          className = {styles.conv5}
          alt="conv5"
          />

          
        </div>
      </section>
     

      <section className={styles.sectionThree}>
        <h2 className={styles.h_2}>
          Join Eatables and expand your reach
        </h2>
        <div className={styles.sell_deliverContainer}>

          <div >


         <Image
         
         src="/assets/images/sell_withus.png"
         width={500}
         height={350}
         className={styles.sell_deliver}
         alt="sell_withus"
         
         />
          </div>

         <div >


         <Image
         
         src="/assets/images/vdeliver_withus.png"
         width={500}
         height={350}
         className={styles.sell_deliver2}
         alt="deliver_withus"
         
         />
         </div>
        </div>

        <h2
        className={styles.h_3}
        > Eatables dey for you</h2>
        <p className={styles.stp}> Stop worrying. Just place your order in seconds</p>

        <div className={styles.downloadLinkContainer}>

        <Link className={styles.downloadLink}
        href="https://play.google.com/store/apps/details?id=com.eatables.app"
        ><Image src="assets/images/playstore.svg"
        width={15}
        height={15}
        alt="playstore icon"/> Download on Playstore</Link>
        <Link
        href="https://apps.apple.com/us/app/eatables/id6502586489"
        className={styles.downloadLink}
        > <Image src="assets/images/apple.svg"
        width={15}
        height={15}
        alt="apple icon"
        />Download on App Store</Link>
        </div>
        <br />
        <br />
        <h2
        className={styles.h_3}
        > Bringing convenience to you</h2>
        <p className={styles.stp}> We have partnered with stores around you.</p>

   { /*
        <div className={styles.partnersContainer}>
          <p className={styles.partners}> GGM Farms </p>
          <p className={styles.partners}> LeoMart </p><p className={styles.partners}> Chop Beta with Johnny & Neighbours </p><p className={styles.partners}> Ido's Kitchen </p><p className={styles.partners}> Obatext Shawarma </p><p className={styles.partners}> Foodby_BB </p><p className={styles.partners}> Shugas Confectionery </p><p className={styles.partners}> Pryme Chaw </p><p className={styles.partners}> AZSeasos Restaurants </p><p className={styles.partners}> Choicey Treats </p>
          <p className={styles.partners}> Zinny's Taste </p><p className={styles.partners}> 247 Shawarma </p><p className={styles.partners}> BrishFoods </p><p className={styles.partners}> Yummy Bite Shawarma </p><p className={styles.partners}> JC's Bistro</p><p className={styles.partners}> Duke's Kitchen </p><p className={styles.partners}> Chimama's Kitchen </p><p className={styles.partners}> DD's Fast Food </p><p className={styles.partners}> Sips and Snacks </p><p className={styles.partners}> Exito</p><p className={styles.partners}> Fortune's Meshai Republic</p><p className={styles.partners}> Platter Grillz </p><p className={styles.partners}> Chop Chaw</p>
          <p className={styles.partners}> Hangover Wine Store</p> 
          <p className={styles.partners}> Chat n Chew</p> 
        </div>
*/}

    <div  className={styles.partners_imgContainer}>
        <picture>

        <source 
          media="(max-width: 830px)" 
          srcSet="/assets/images/partners-mobile.svg"
        />

      <Image
        className={styles.partners_img}
        src="/assets/images/partners.svg"
        alt="partners"
        width={100}
        height={200}
      />

        </picture>
      
    </div>

          

      </section>

      <section className={
        styles.sectionFour
      }>
        {/* <div className={styles.carouselContainer}>
          <Image

          src = "/assets/images/carousel_1.svg"
          width={1200}
          height={700}
          className={styles.carousel}
          />
          </div> */}
          <div className={styles.empty}>
            
            <EmblaCarousel slides={slides} />

          </div>
          {/* <div className={styles.carouselContainer}> */}
         
          {/* </div> */}

      </section>
      
      <section className={styles.sectionFive}> 

        <Footer />

      </section>
      

    </div>
  )
}

export default Home;