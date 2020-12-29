<template>
  <div>
    <Header></Header>
    <Home id="banner"></Home>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/LandingPage/Header";
import Home from "@/components/LandingPage/Home";
import Footer from "@/components/LandingPage/Footer";
export default {
  name: "Landing",
  components: {
    Header,
    Home,
    Footer,
  }
};
</script>