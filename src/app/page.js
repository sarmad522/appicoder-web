import Image from "next/image";
import HeroBannerSlider from "./component/HeroBannerSlider";
import IntroBlock from "./component/IntroBlock";
import ServicesSection from "./component/services";
import CaseStudyVertical from "./component/CaseStudyVertical";
import WhyChooseUs from "./component/WhyChooseUs";
import Testimonials from "./component/Testimonials";
import Industries from "./component/Industries";
import TechnologyShowcase from "./component/TechnologyShowcase";
import ProductsGallery from "./component/ProductsGallery";
import Awards from "./component/Awards";
import ContactCta from "./component/ContactCta";
import SiteFooter from "./component/SiteFooter";
export default function Home() {
  return (
    <>
          <HeroBannerSlider/>
<IntroBlock/>
<ServicesSection/>
 <CaseStudyVertical
      title="Caviar - Order Food Delivery"
      tags={["iOS Development", "Android Development", "UI/UX Design"]}
      slides={[
        { src: "/images/pic1.png", alt: "Caviar screen 1" },
    // { src: "/images/pick2.png", alt: "Caviar screen 2" },
            { src: "/images/pic1.png", alt: "Caviar screen 1" },

    { src: "/images/pick3.png", alt: "Caviar screen 3" },
        { src: "/images/pic1.png", alt: "Caviar screen 1" },
    // { src: "/images/pick2.png", alt: "Caviar screen 2" },
    { src: "/images/pick3.png", alt: "Caviar screen 3" },
            { src: "/images/pic1.png", alt: "Caviar screen 1" },

      ]}
      bgImage="/images/slideback.png"
    />
    <WhyChooseUs/>
    <Testimonials/>
<Industries/>
<TechnologyShowcase/>
<ProductsGallery/>
<Awards/>
<ContactCta/>
<SiteFooter/>
</>
  );
}
