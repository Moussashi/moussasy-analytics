<template>
  <div id="wrapper">
    <div id="Title">
      <ul>
        <li v-for="tl in title" :key="tl" class="letters">
          <h1>{{ tl }}</h1>
        </li>
      </ul>
      <nav-bar
        id="nav"
        :home="navbar.home"
        :resume="navbar.resume"
        :work="navbar.work"
        :contact="navbar.contact"
      >
      </nav-bar>
    </div>
    

  <div id="skills-section">
    <div class="container">
      <h1>Basic skills</h1>
      <!-- HTML -->
        <div class="skill-box">
            <span class="title">HTML</span>
            <div class="skill-bar">
                <span class="skill-per html">
                    <span class="tooltip">90%</span>
                </span>
            </div>
        </div>

        <!-- CSS -->
        <div class="skill-box">
            <span class="title">CSS</span>
            <div class="skill-bar">
                <span class="skill-per css">
                    <span class="tooltip">90%</span>
                </span>
            </div>
        </div>

        <!-- Javascript -->
        <div class="skill-box">
            <span class="title">JavaScript</span>
            <div class="skill-bar">
                <span class="skill-per javascript">
                    <span class="tooltip">70%</span>
                </span>
            </div>
        </div>
    </div>


        <div class="container">
      <h1>Data related skills</h1>
      <!-- Python -->
        <div class="skill-box">
            <span class="title">Python / Panda</span>
            <div class="skill-bar">
                <span class="skill-per python">
                    <span class="tooltip">65%</span>
                </span>
            </div>
        </div>

        <!-- Tableau -->
        <div class="skill-box">
            <span class="title">Tableau</span>
            <div class="skill-bar">
                <span class="skill-per tableau">
                    <span class="tooltip">65%</span>
                </span>
            </div>
        </div>

        <!-- GA4 -->
        <div class="skill-box">
            <span class="title">Google analytics 4</span>
            <div class="skill-bar">
                <span class="skill-per ga4">
                    <span class="tooltip">55%</span>
                </span>
            </div>
        </div>

        <!-- GTM -->
        <div class="skill-box">
            <span class="title">Google tag manager</span>
            <div class="skill-bar">
                <span class="skill-per gtm">
                    <span class="tooltip">50%</span>
                </span>
            </div>
        </div>

        <!-- Google cloud platform -->
        <div class="skill-box">
            <span class="title">Google cloud platform</span>
            <div class="skill-bar">
                <span class="skill-per gcp">
                    <span class="tooltip">20%</span>
                </span>
            </div>
        </div>

    </div>
  </div>




      <custom-map id="map"></custom-map>
  </div>
</template>

<script>
import CustomMap from "./Map.vue";
import navBar from "./UI/navBar.vue";
export default {
  components: { CustomMap, navBar },
  data() {

        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M7LMFDHV');


        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M7LMFDHV"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        
    return {
      title: ["S", "K", "I", "L", "L", "S"],
      navbar: {
        home: "Home",
        work: "Work",
        resume: "Resume",
        contact: "Contact",
        thanks: false,
        message: "Thank you, I will respond as soon as possible",
      },
    };
  }
};
</script>

<style scoped>

.para {
  color: blueviolet;
  border: solid white 2px;
}

/*********************************************
*********************SKILLS********************
**********************************************/
#skills-section {
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
}
.container{
    position: relative;
    max-width: 500px;
    width: 100%;
    background: #fff;
    margin: 0 15px;
    padding: 10px 20px;
    border-radius: 7px;
}
.container .skill-box{
    width: 100%;
    margin: 25px 0;
}
.skill-box .title{
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #333;
}
.skill-box .skill-bar{
    height: 8px;
    width: 100%;
    border-radius: 6px;
    margin-top: 6px;
    background: rgba(0,0,0,0.1);
}
.skill-bar .skill-per{
    position: relative;
    display: block;
    height: 100%;
    width: 90%;
    border-radius: 6px;
    background: #4070f4;
    animation: progress 0.4s ease-in-out forwards;
    opacity: 0;
}
.skill-per.html{
    width: 90%;
    animation-delay: 0.1s;
}
.skill-per.css{
    width: 90%;
    animation-delay: 0.1s;
}
.skill-per.javascript{
    width: 70%;
    animation-delay: 0.2s;
}
.skill-per.python{
    width: 55%;
    animation-delay: 0.3s;
}
.skill-per.tableau{
    width: 65%;
    animation-delay: 0.3s;
}
.skill-per.ga4{
    width: 65%;
    animation-delay: 0.3s;
}
.skill-per.gtm{
    width: 50%;
    animation-delay: 0.3s;
}
.skill-per.gcp{
    width: 20%;
    animation-delay: 0.3s;
}
@keyframes progress {
    0%{
        width: 0;
        opacity: 1;
    }
    100%{
        opacity: 1;
    }
}
.skill-per .tooltip{
    position: absolute;
    right: -14px;
    top: -28px;
    font-size: 9px;
    font-weight: 500;
    color: #fff;
    padding: 2px 6px;
    border-radius: 3px;
    background: #4070f4;
    z-index: 1;
}
.tooltip::before{
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background-color: #4070f4;
    transform: translateX(-50%) rotate(45deg);
}
/*********************************************
*********************FONTS********************
**********************************************/

@font-face {
  font-family: "Monoton";
  src: url("../assets/Monoton-Regular.ttf");
}

/*********************************************
*******************GENERAL********************
**********************************************/
#wrapper {
  width: 100vw;
  height: 100vh;
  background: rgb(239, 228, 221);
  background: linear-gradient(
    90deg,
    rgba(239, 228, 221, 1) 43%,
    rgba(255, 255, 255, 1) 88%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  animation: pageDown 2s forwards;
}
#Title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: Monoton;
  color: black;
}
h1 {
  font-size: 3em;
  text-align: center;
  margin-bottom: 0;
}
button {
  background-color: rgb(239, 228, 221);
  border: none;
  padding: 5%;
  border-top: 5px;
  width: 50%;
  align-self: center;
}
button:hover {
  animation: buttonHov 0.3s forwards;
}
ul {
  display: flex;
  font-size: 2rem;
  padding: 0;
}
.letters {
  list-style: none;
}
.letters:hover {
  animation: letters 0.5s ease-in-out;
}

/*********************************************
****************ANIMATIONS********************
**********************************************/
@keyframes pageDown {
  from {
    transform: translateY(-100vh);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes buttonHov {
  100% {
    width: 100%;
    background-color: black;
    color: rgb(239, 228, 221);
    font-weight: bolder;
    font-size: larger;
  }
}
@keyframes letters {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1vh);
    color: rgb(31, 29, 29);
  }
}
/*********************************
**********RESPONSIVE**************
**********************************/
@media only screen and (max-width: 769px) {
  #Title {
    display: flex;
    flex-direction: column;
  }
  #contact {
    display: flex;
    width: 100vw;
    height: 70vh;
    flex-direction: column;
    align-items: center;
  }
  #map {
    width: 80%;
    height: 50vh;
    border: black 1px solid;
  }
  form {
    width: 70%;
  }
  #nav {
    font-size: 1.5rem;
  }
  h1 {
    font-size: 3rem;
    margin: auto;
  }
  #skills-section {
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin-left: 0;
}
}
</style>