import Header from "@/Components/header/Header";
import Hero from "@/Components/hero/Hero";
import Items from "@/Components/Items/Items";
import Items2 from "@/Components/Itmes2/Items2";
import Categories from "@/Components/Categories/Categories";
import Speaker from "@/Components/speaker/Speaker";
import Item3 from "@/Components/Item3/Item3";
import Hero2 from "@/Components/hero2/Hero2";
import Service from "@/Components/customer-services/Service";
import Footer from "@/Components/footer/Footer";
export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <Items />
    <Categories />
    <Items2 />
    <Speaker />
    <Item3 />
    <Hero2/>
    <Service />
    <Footer />
    
   </>
  );
}
