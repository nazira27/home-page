<template>
  <div class="banner">
    <v-img src="~@/assets/main__bg.e544832.jpg">
      <v-container>
        <v-row align="center" class="main">
          <div>
            <div class="box-wrapper">
            <span class="banner-title" >Ishonchli, Sifatli, Onlayn Yuridik xizmatlar</span>
            <p class="banner-text">Professional yuristlar xizmatidan onlayn foydalaning. O`z savolingizni yozing va bir necha soat ichida javob oling. </p>
            <a class="text-online">ONLINE XIZMAT <img src="~@/assets/arrow.svg" style="margin-left: 5px"/></a>
            </div>
          </div>
        </v-row>
      </v-container>
    </v-img>
  </div>
</template>
<script>
export default {
  name: "Banner"
};
</script>
<style lang="scss">
@media (min-width: 640px) {
  .box-wrapper:after {
    content: "";
    position: absolute;
    left: 35px;
    top: 170px;
    z-index: -1;
    width: 270px;
    height: 450px;
    border: 16px solid rgba(176,142,68,.7);
  }
}

.box-wrapper {
  max-width: 700px;
  padding-left: 50px;
}
.text-online {
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  margin-top: 10px;
  color: #FFFFFF !important;
}
.banner-text {
  max-width: 600px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #FFFFFF;
  margin-top: 47px;
  margin-bottom: 55px !important;
}
.banner-title {
  max-width: 750px;
  font-family: Cantata One;
  font-style: normal;
  font-weight: 400;
  font-size: 54px;
  line-height: 69px;
  color: #FFFFFF;
}
.banner >>> .v-image__image--cover {
  background-repeat: no-repeat;
  background-size: cover;
}
.main {
  margin-top: 20%;
}
</style>
