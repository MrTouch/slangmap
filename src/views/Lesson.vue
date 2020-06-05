<template>
        <!--
       #set-height
        p#time
        video(id="v0",  tabindex="0", autobuffer preload)-->
        <div id="videocontainer">
        <MenuNav :showMapLink="showMapLink" :showStreetViewLink="showStreetViewLink" :showExerciseLink="activeExercise" :active="'home'" @closeInput="backToStreetView" @closeExercise="closeExercise" />
          
            <div id="set-height" style="width:100%;" ref="setHeight">
                <video id="v0" tabindex="0" autobuffer preload="auto">
                   <!-- <source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.webm"/>
                    <source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.ogv"/>
                    <source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="https://www.html5rocks.com/tutorials/video/basics/Chrome_ImF.mp4"/>-->
                    <!--<source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="../assets/videos/tour1_v3.mp4"/>-->
                    <!--<source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="../assets/videos/finalharder2.webm"/>-->
                    <source type="video/mp4; " src="http://it-touch.ch/ba/finalharder.mp4"/>
                </video>
            </div>
            <div id="anchor2" >
                anchor .
            </div>
            <div class="parallax-layer-1">
                
                    <!-- ************************************ INTRO ************************* -->

                    <!--<img class="scroll-icon open-icon open-icon-tutorial1" alt="openicon" src="@/assets/icons/input-icon 1.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('tutorial1_container')" />-->
                    <div class="scrollinfo tutorial tutorial1" id="tutorial1_container">
                        <div class="tutorial_content">
                            <img class="doublearrow" alt="openicon" src="@/assets/icons/double-up-arrows.svg" />
                            <p>scroll up to move along your route and tap on the icons for inputs and exercises.</p>
                        </div>
                    </div>



                <img :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-intro" alt="openicon" src="@/assets/icons/input-icon 1.svg" data-rate="0.8" data-direction="vertical" @click="openInputWindow('intro_container')" />
                <div class ="scrollcontent-container" id="intro_container">
                    <div class="scrollcontent scrollinfo content_intro" >
                        <div class="tophalfimg">
                            <img class="tophalfimg" alt="startimg" src="@/assets/images/poi/schweiz1.png" />
                        </div>
                        <div class="bottomhalf">
                            <img class="close-icon" @click="closeInputWindow('intro_container')" alt="Home" src="@/assets/icons/X.svg" />
                            <div class="text-box">
                            <h3>hey, did you know?</h3>
                            The Swiss-German language is rather a dialect that is spoken throughout the entire german-
speaking part  of Switzerland as everyday language. However, german-speaking regions of Switzerland have numerous dialects of Swiss-German, which can sound somewhat or significantly different from one another.
                            </div>
                        </div>
                    </div>
                </div>


                    <!-- ************************************ CENTRAL ************************* -->


                <img  :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-central_intro" alt="openicon" src="@/assets/icons/input-icon 1.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('central_container')" />
                 <div class ="scrollcontent-container" id="central_container">
                    <div class="scrollcontent scrollinfo content_central_intro" >
                        <img class="tophalfimg" alt="startimg" src="@/assets/images/poi/central.jpg" />
                        <img class="close-icon" @click="closeInputWindow('central_container')" alt="Home" src="@/assets/icons/X.svg" />
                        <div class="text-box">
                            <h3>welcome to central!</h3>
                        Central is a public square or plaza at the northern end of Limmatquai in Zürich. 
                        It is one of the city's nodal points for road and public transportation. It was formerly known as Leonhardplatz or Leonhardsplatz. 
                        Leonhardsplatz first became a node in Zürich's transport system in 1889, when the Polybahn funicular was opened up the hill to the Polytechnikum, the present ETH Zurich. 
                        The former Leonhardplatz is  named after the Central hotel situated there.
                        </div>

                    </div>
                </div>

 
                <img v-if="exercise[1]['done']" :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-central-grammatik" alt="openicon" src="@/assets/icons/exercise-icon-done.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('central_grammatik_container')" />             
                <img v-if="!exercise[1]['done']" :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-central-grammatik" alt="openicon" src="@/assets/icons/exercise-icon.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('central_grammatik_container')" />
                
                <div class ="scrollcontent-container" id="central_grammatik_container">
                    <div class="scrollcontent scrollinfo content_central_grammatik" >
                        <img class="close-icon" @click="closeInputWindow('central_grammatik_container')" alt="Home" src="@/assets/icons/X.svg" />
                        <div class="text-box text-box-solo">
                            <h3>stage 1: listening</h3>
                            Like in German, there are three different articles for nouns in Swiss-German to indicate the gender. In Swiss-German throughout all different dialects) the articles are:
                        </div>
                        <div class="center-audio-container">
                            <div class="clickableInput" @click="playAudioFile('dae.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" />   <b> “dä”</b> (masculine)</div>
                            <div class="clickableInput" @click="playAudioFile('die.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" />  <b>“d’ or die”</b> (feminine)</div>
                            <div class="clickableInput" @click="playAudioFile('s.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" />  <b>“s’”</b> (neuter)</div>
                        </div>
                        <div class="btn-container">
                            <div class="submitbtn" @click="startExercise(1)"> START EXERCISES</div>
                        </div>
                    </div>
                </div>
            <div id="anchor2" >
                anchor .
            </div>
                <!-- ************************************ NIEDERDORF ************************* -->
                <img  :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-niederdorf_intro" alt="openicon" src="@/assets/icons/input-icon 1.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('niderdorf_container')" />
                <div class ="scrollcontent-container" id="niderdorf_container">
                    <div class="scrollcontent scrollinfo content-niederdorf-intro" >
                        <img class="close-icon" @click="closeInputWindow('niderdorf_container')" alt="Home" src="@/assets/icons/X.svg" />
                        <img class="tophalfimg" alt="startimg" src="@/assets/images/poi/niederdorf.jpg" />
                        <div class="text-box">
                            <h3>you are now walking through niederdorf</h3>
                            Niederdorf is a pedestrian zone  which is part of Zurich's old town. The locals fondly refer to it as <div @click="playAudioFile('doerfli.ogg')" class="intext clickableText">“Dörfli”</div>.
                            During the day, countless stores that spread throughout the entire Niederdorf invite you to explore this area and take an extended shopping tour. In the evening, it changes into a vibrant nightlife district with its numerous bars.
                        </div>
                    </div>
                </div>

                <img v-if="exercise[2]['done']" :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-niederdorf-grammatik" alt="openicon" src="@/assets/icons/exercise-icon-done.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('niederdorf_grammatik_container')" />                
               <img v-if="!exercise[2]['done']" :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-niederdorf-grammatik" alt="openicon" src="@/assets/icons/exercise-icon.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('niederdorf_grammatik_container')" />
                <div class ="scrollcontent-container" id="niederdorf_grammatik_container">
                    <div class="scrollcontent scrollinfo content_niederdorf_grammatik" >
                        <img class="close-icon" @click="closeInputWindow('niederdorf_grammatik_container')" alt="Home" src="@/assets/icons/X.svg" />
                        <div class="text-box text-box-solo-long">
                            <h3>stage 2: conjugate verbs</h3>
                            Take a look at some swiss-german verbs and how to conjugate in simple persent.
                        </div>
                        <div class="verbs-container">
                            <div class="verb-container">
                                <b>poste</b> (to shop, buy)
                                <div class="verbs">
                                    <div class="perspro">ich</div> <div class="verb">poste</div>
                                    <div class="perspro">du</div> <div class="verb">poschtisch</div>
                                    <div class="perspro">er / sie</div> <div class="verb">poschtet</div>
                                    <div class="perspro">mir</div> <div class="verb">poschtet</div>
                                    <div class="perspro">ihr</div> <div class="verb">poschtet</div>
                                    <div class="perspro">sie</div> <div class="verb">poschtet</div>
                                </div>
                            </div>
                            <div class="verb-container">
                                <b>gah</b> (to go)
                                <div class="verbs">
                                    <div class="perspro">ich</div> <div class="verb">gahne</div>
                                    <div class="perspro">du</div> <div class="verb">gahsch</div>
                                    <div class="perspro">er / sie</div> <div class="verb">gaht</div>
                                    <div class="perspro">mir</div> <div class="verb">gönd</div>
                                    <div class="perspro">ihr</div> <div class="verb">gönd</div>
                                    <div class="perspro">sie</div> <div class="verb">gönd</div>
                                </div>
                            </div>
                            <div class="verb-container">
                                <b>luege</b> (to look)
                                <div class="verbs">
                                    <div class="perspro">ich</div> <div class="verb">lueg</div>
                                    <div class="perspro">du</div> <div class="verb">luegsch</div>
                                    <div class="perspro">er / sie</div> <div class="verb">luegt</div>
                                    <div class="perspro">mir</div> <div class="verb">lueged</div>
                                    <div class="perspro">ihr</div> <div class="verb">lueged</div>
                                    <div class="perspro">sie</div> <div class="verb">lueged</div>
                                </div>
                            </div>
                        </div>

                        <div class="btn-container" v-if="exercise[1]['done'] == true">
                            <div class="submitbtn" @click="startExercise(2)"> START EXERCISES</div>
                        </div>
                        <!-- <p class="done-sign" v-if="exercise[2]['done'] == true">Done</p>-->
                    </div>
                </div>

                <!-- ************************************ ZENTRAL BIBLIOTHEK ************************* -->
            <div id="anchor3" >
                anchor .
            </div>
                <img  :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-zb_intro" alt="openicon" src="@/assets/icons/input-icon 1.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('zb_container')" />
                <div class ="scrollcontent-container" id="zb_container">
                    <div class="scrollcontent scrollinfo content_zb_intro" >
                        <img class="close-icon" @click="closeInputWindow('zb_container')" alt="Home" src="@/assets/icons/X.svg" />
                        <img class="tophalfimg" alt="startimg" src="@/assets/images/poi/zb.jpg" />
                        <div class="text-box">
                            <h3>psst... this is the central library of zurich</h3>
                            Zentralbibliothek Zürich, often just called <div @click="playAudioFile('zb.ogg')" class="intext clickableText"> “ZB” </div>, is the main library of both the city and the University of Zurich. Founded in 1914 by a merger of the former cantonal and city libraries, it's history goes back to the  library of the Grossmünster abbey in 1259. ZB currently houses 5.1 million items (3.9 million printed volumes, 124'000 manuscripts, 243'000 maps and 560'000 microfiches).
                               
                        </div>
                    </div>
                </div>
 
                 <img v-if="exercise[3]['done']" :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-zb-grammatik" alt="openicon" src="@/assets/icons/exercise-icon-done.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('zb_grammatik_container')" />
                  <img v-if="!exercise[3]['done']"  :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-zb-grammatik" alt="openicon" src="@/assets/icons/exercise-icon.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('zb_grammatik_container')" />
                <div class ="scrollcontent-container" id="zb_grammatik_container">
                    <div class="scrollcontent scrollinfo content_zb_grammatik" >
                        <img class="close-icon" @click="closeInputWindow('zb_grammatik_container')" alt="Home" src="@/assets/icons/X.svg" />
                        <div class="text-box text-box-solo">
                            <h3>stage 3: picture / word assignment</h3>
                            There are three different indefinite articles for nouns in Swiss-German.
                        </div>
                        <div class="center-audio-container">
                               <div class="clickableText" @click="playAudioFile('en.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" />  <b> “en”</b> (masculine)</div>
                            <div class="clickableText" @click="playAudioFile('e.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" /> <b> “e”</b> (feminine)</div>
                            <div class="clickableText" @click="playAudioFile('es.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" /> <b> “es’”</b> (neuter)</div>
                        </div>
                        <div class="btn-container" v-if="exercise[2]['done'] == true">
                            <div class="submitbtn" @click="startExercise(3)"> START EXERCISES</div>
                        </div>
                        <!--<p class="done-sign" v-if="exercise[3]['done'] == true">Done</p>-->
                    </div>
                </div>

            <div id="anchor4" >
                anchor .
            </div>
                <!-- ************************************ CAFE ZÄHRINGER ************************* -->
               <img  :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-cafezahringer_intro" alt="openicon" src="@/assets/icons/input-icon 1.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('cafezahringer_container')" />   
               <div class ="scrollcontent-container" id="cafezahringer_container">
                    <div class="scrollcontent scrollinfo content_cafezahringer_intro" >
                        <img class="tophalfimg" alt="startimg" src="@/assets/images/exercises/zahringer.png" />
                        <div class="text-box">
                            <h3>come in and have a drink or a coffee</h3>
                                There are alot of characteristic bars in Zurich but none of them like Zähringer. Café Zähringer is run in a collective since 1981. Everyone  who works here is a chef and a worker. Their motto is: Living, working  and eating unconventionally.
                            </div>
                    </div>
                </div>

                <img v-if="exercise[4]['done']"  :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-zahringer-grammatik" alt="openicon" src="@/assets/icons/exercise-icon-done.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('zahringer_grammatik_container')" />
                <img v-if="!exercise[4]['done']"  :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-zahringer-grammatik" alt="openicon" src="@/assets/icons/exercise-icon.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('zahringer_grammatik_container')" />
                <div class ="scrollcontent-container" id="zahringer_grammatik_container">
                    <div class="scrollcontent scrollinfo content_zahringer_grammatik" >
                        <div class="text-box text-box-solo-long">
                            <h3>stage 4: sentence building</h3>
                            Typical words for greeting and saying goodbye in Swiss-German:
                        </div>
                        <div class="center-audio-container less-top">
                            <div class="clickableText" @click="playAudioFile('gruezi.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" />  <b> “Grüezi” </b> (Hello, Hi)</div>
                            <div class="clickableText" @click="playAudioFile('uf-wiederluege.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" /> <b>“Uf wiederluege”</b> (Goodbye)</div>
                        </div>
                        <div class="text-box">
                            Terms for beverages in Swiss-German:
                        </div>
                        <div class="left-audio-container">
                            <div class="clickableText" @click="playAudioFile('e-stange.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" />  <b> “E Stange”</b> (A beer)</div>
                            <div class="clickableText" @click="playAudioFile('e-schale.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" /><b> “E Schale”</b> (A coffee with milk)</div>
                            <div class="clickableText" @click="playAudioFile('en-kafi-creme.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" /> <b>“En Kafi creme”</b> (A regular coffee with cream)</div>
                            <div class="clickableText" @click="playAudioFile('gspruetzte-wii.ogg')"> <img class="playIcon" src="@/assets/icons/audio-input.svg" /> <b>“En gsprützte Wii”</b> (A wine spritzer)</div>
                        </div>
                        <div class="btn-container" v-if="exercise[3]['done'] == true">
                            <div class="submitbtn" @click="startExercise(4)"> START EXERCISES</div>
                        </div>
                        <!--<p class="done-sign" v-if="exercise[4]['done'] == true">Done</p>-->
                    </div>
                </div>
            </div>

                <img  :class="{ visible: showMapLink }" class="scroll-icon open-icon open-icon-finish" alt="openicon" src="@/assets/icons/input-icon 1.svg" data-rate="0.9" data-direction="vertical" @click="openInputWindow('finish_container')" />   
               <div class ="scrollcontent-container" id="finish_container">
                    <div class="scrollcontent scrollinfo content_finish" >
                        <img class="tophalfimg" alt="startimg" src="@/assets/images/exercises/zahringer.png" />
                        <div class="text-box">
                            <h3>thanks taking a tour in the prototype of our bachelor project</h3>
                                We hope that you enjoyed the experience. Unfortunatelly there are no more exercises or points of interests implemented. But you can kepp scrolling and enjoy the city of zurich a little bit more. The journey will continue to Grossmünster next and will end at the Sächsilüteplatz.
                            </div>
                    </div>
                </div>
            <!-- ************************************ EXERCISE QUESTIONS ************************* -->
            <Questions  v-bind:class="{ active: activeExercise }" :exercise="exercise" :currentExercise="currentExercise" @onclose="closeExercise" @oncloseInput="closeInputWindow" />
            
         <!--   <div id="popup" v-if="isMobile() && !isLandscape()">Please use Landscape Mode.</div>-->
    <!--p Sorry, your browser does not support the &lt;video&gt; element.-->


    </div>
</template>



<script>

import cookies from "@/cookies.js";
import shared from "@/shared.js";
import db from "@/db.js";
import lesson1 from "@/assets/lessons/lesson1";
import Questions from "@/components/Questions.vue";
import MenuNav from "@/components/MenuNav";

export default {
    name: "lesson",
    data: function() {
        return{
            id : this.$route.params.id,
            part : 0,
            // start video at frame 0
            frameNumber:0,
             // lower numbers = faster playback
            playbackConst: 100,
            // get page height from video duration
            setHeight: {},
            // select video element 
            vid: {},
            currentExercise: 0,
            activeExercise: false,
            finishedLessons: null,
            exercise : localStorage.progress ? JSON.parse(localStorage.progress) : lesson1,
            showMapLink : true,
            showStreetViewLink : false,
            currentInputId: "",
            currentInputElementId: ""
        }
    },
    watch: {
        activeExercise(state){
            if(state){
                window.document.body.classList.add("scrolllock");
            }else{
                window.document.body.classList.remove("scrolllock");
            }
        }
    },
    components: {
        Questions,
        MenuNav
    },
    mounted: function(){
        var res = this.id.split('.');
        this.id= res[0];
        this.part=res[1];
        this.vid = document.getElementById('v0');
        this.playbackConst = 100;
        this.setHeight = document.getElementById("set-height");
        this.vid.addEventListener('loadedmetadata', ()=> {
            this.setHeight.style.height = Math.floor(this.vid.duration) * this.playbackConst + "px";
        });
        this.$root.fixedNav = true;
        this.openInputWindow("tutorial1_container");
        this.go2Exercise(this.part);
    },
    created: function(){
        this.target = document.querySelectorAll("scrollcontent")
        window.requestAnimationFrame(this.scrollPlay);
        screen.orientation.onchange = function (){
            console.log("onchange")
        }
        window.addEventListener('scroll', this.handleScroll);
        //this.updateFinishedLessons(0);
    },
    methods: {
        handleScroll: function(){
            const target = document.querySelectorAll('.scroll-icon');
            var index = 0, length = target.length;
            for (index; index < length; index++) {
                var pos = window.pageYOffset * target[index].dataset.rate;

                if(target[index].dataset.direction === 'vertical') {
                    target[index].style.transform = 'translate3d(0px,'+pos+'px, 0px)';
                } else {
                    var posX = window.pageYOffset * target[index].dataset.ratex;
                    var posY = window.pageYOffset * target[index].dataset.ratey;
                    
                    target[index].style.transform = 'translate3d('+posX+'px, '+posY+'px, 0px)';
                }
            }
        },
        scrollPlay: function(){ 
            var frameNumber  = window.pageYOffset/this.playbackConst;
            this.vid.currentTime  = frameNumber;
            window.requestAnimationFrame(this.scrollPlay);
        },
        isMobile: function() {
    	    var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        },
        isLandscape: function(){
            console.log(screen.orientation.type);
            return screen.orientation.type == "landscape-primary";
        },
        startExercise: function(lesson){
            this.currentExercise = lesson; 
            this.activeExercise = true;
            this.exercise[lesson]["current"] = true;
            this.exercise[lesson][1]["current"] = true
            var element = document.getElementById(this.currentElementId);
            element.classList.add("hide");
            
            console.log(this.exercise)
            console.log("startexercies");
        },
        closeExercise: function(){
            this.activeExercise = false;
            this.exercise[1][1]["current"] = false
            this.exercise[1][2]["current"] = false    
            this.exercise[1][3]["current"] = false
            this.exercise[2][1]["current"] = false
            this.exercise[2][2]["current"] = false
            this.exercise[2][3]["current"] = false
            this.exercise[3][1]["current"] = false
            this.exercise[3][2]["current"] = false
            this.exercise[3][3]["current"] = false
            this.exercise[4][1]["current"] = false
            this.exercise[4][2]["current"] = false
            this.deSelectAnswers(2,1);
            this.deSelectAnswers(2,2);
            this.deSelectAnswers(3,1);
            this.deSelectAnswers(3,2);
            this.deSelectAnswers(3,3);
            this.deSelectAnswers(4,1);
            this.deSelectAnswers(4,2);
            var element = document.getElementById(this.currentElementId);
            element.classList.remove("hide");
        },
        deSelectAnswers(lektion, exercise){
            for (let [key, value] of Object.entries(this.exercise[lektion][exercise]["selectedAnswer"])) {
                console.log(`${key}: ${value}`);
                this.exercise[lektion][exercise]["selectedAnswer"][key] = false;
            }
        },
        updateFinishedLessons: function(fl){
            console.log("fl", fl);
            db.updateUserFinishedLessons(this.fl);
            //this.$router.push("/map");
        },
        go2Exercise: function(part){
            var VueScrollTo = require('vue-scrollto');
            if(part == 1){
                var element = document.getElementById("intro_container");
            }else{

                var element = document.getElementById("anchor"+part);
            }
            console.log("goto", element)
            var duration = 500;
            var options = {
                easing: 'ease-in',
                force: true,
                cancelable: true,
                offset: 0,
                onStart: function(element) {
                    console.log("onstart", element.style)
                // scrolling started
                },
                onDone: function(element) {
                // scrolling is done
                },
                onCancel: function() {
                // scrolling has been interrupted
                },
                x: false,
                y: true
            }

            setTimeout(function(){
                var cancelScroll = VueScrollTo.scrollTo(element, duration, options)
            }, 1000);

            // or alternatively inside your components you can use
            //cancelScroll = this.$scrollTo(element, duration, options)

            // to cancel scrolling you can call the returned function
            //cancelScroll()
        },
        playAudioFile: async function(audioName){
            this.audioE3Q1 = await new Audio(require('@/assets/audio/'+audioName))
            this.audioE3Q1.play();
            console.log("play audio " +audioName)
        },
        openInputWindow(elementId){
            console.log("openInputWindow", elementId);
            var element = document.getElementById(elementId);
            element.classList.add("visible");
             this.currentElementId = elementId;
             this.currentInputElementId = elementId;
             if(elementId != "tutorial1_container"){
                 window.document.body.classList.toggle("scrolllock");
                 this.showMapLink = false;
                 this.showStreetViewLink = true;
             }
            
        },
        closeInputWindow(){
            var element = document.getElementById(this.currentInputElementId);
            element.classList.remove("visible");
            window.document.body.classList.remove("scrolllock");
            setTimeout(()=>{
                this.showMapLink = true;
                this.showStreetViewLink = false;
            }, 500);
        },
        closeTutorialWindow: function(){
                var element = document.getElementById(this.currentElementId);
                element.style.display="none";
                window.document.body.classList.remove("scrolllock");
        },
        backToStreetView: function(){
            this.closeInputWindow();
            console.log("close");
        }
    }
};
</script>


<style scoped lang="scss">

.feedback{
    display:none;
}
#set-height  {
  display: block;
}
#v0{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: center;
}
p {
    font-family: helvetica; 
    font-size: 24px;
  }
#popup{
    z-index: 9000000000;
    position: fixed;
    top: 88px;
    left: 64px;
    background-color:red;
}

.startbtn{
    cursor:pointer;
}
.parallax-layer-1{
    z-index: 9002;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    p{
        font-family: 'Manrope', sans-serif;
        font-size: 14px;
        padding: 0 30px;
    }
}
.done-sign{
    color:rgba(5,161,147,1);
}

.text-box{
    //margin-top:120px;
    padding: 0 15px;
    margin-top:10px;
    &.text-box-solo{
        margin-top:110px;
    }
    &.text-box-solo-long{
        margin-top: 65px;
    }
}
.verbs-container{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px 15px 0 15px;
    .verb-container{
        width: 165px;
        margin-top: 10px;
        .perspro{
            width:70px;
            float:left;
        }
    }
}
.clickableText{
    //color: #14ECD4;
    cursor: pointer;
    margin-top: 5px;
    margin-bottom: 5px;
    .playIcon{
        margin-right:15px;
    }
}   
.content_zahringer_grammatik,
.content_zb_grammatik{
    .clickableText{
        padding: 0 15px;
        color:white;
    }
}
.clickableInput{
    //color: #14ECD4;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    .playIcon{
        margin-right:15px;
    }
}
.center-audio-container{
    display: inline-block;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
    margin-top: 15px;
    &.less-top{
        margin-top:10px;
    }
}
.left-audio-container{
    margin-top:15px;
    padding-left:15px;
}
#tutorial1_container{
    p{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    font-weight: bold;
    }
}
.tutorial{
    //display: none;
    /*opacity: 0;
    animation-name: visiblity;
    animation-duration: 2s;
    transition: visibility 0s, opacity 0.5s linear;*/
    position: absolute;
    width: 74%;
    border:3px solid #14ECD4;
    border-radius: 30px;
    left:13%;
    background-color: rgba(0,0,0,0.8);
    top: 300px;

    .doublearrow{
        margin-top:30px;
    }
    .close-icon{
            position: absolute;
            left: 0;
            top: 0;
            border: 1px solid #14ECD4;
            padding: 7px;
            border-radius: 50%;
            background-color: #14ECD4;
            height: 32px;
            margin: -9px;
            cursor:pointer;
    }

    .tutorial_content{
        display: inline-block;
    }
}
.open-icon{
    position: absolute;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.7 ease-in;
    width: 40px;
    &.visible{
        
    transition: opacity 0.7 ease-out;
        opacity: 1;
    }
    &.open-icon-intro{
        top:750px;
    }
    &.open-icon-tutorial1{
        top: 200px;
    }

    &.open-icon-central_intro{
        top:900px;
    }
    &.open-icon-central-grammatik{
        top:950px;
    }
    &.open-icon-niederdorf_intro{
        top:3300px;
    }
    &.open-icon-niederdorf-grammatik{
        top:3350px;
    }
    &.open-icon-zb_intro{
        top:8380px;
    }
    &.open-icon-zb-grammatik{
        top:8430px;
    }
    &.open-icon-cafezahringer_intro{
        top:10000px;
    }
    &.open-icon-zahringer-grammatik{
        top:10050px;
    }
    &.open-icon-finish{
        top:10550px;
    }
}

.intext{
    display:inline;
}


.scrollcontent-container{
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    left:100%;
    transition: left 0.6s ease-in;
    &.visible{
        left:0%;
        transition: left 0.6s ease-out;
    }
    &.hide{
        left:-100%;
        transition: left 0.6s ease-in;
    }
}

.scrollcontent{
    position: relative;;
    z-index: 9002;
    background-color: rgba(50,50,50,0.8);
    width:100%;
    height:100%;
    text-align:left;
    .tophalfimg{
        height:150px;
        width: 100%;
        object-fit: cover;
        object-position: center;
        @media print, screen and (min-width: 40em) {
            height:300px;
        }
    }
    h2{
        font-size:25px;
    }
    .close-icon{
            position: absolute;
            left: 0;
            top: 0;
            border: 1px solid #14ECD4;
            padding: 7px;
            border-radius: 50%;
            background-color: #14ECD4;
            height: 32px;
            //margin: -9px;
            cursor: pointer;
    }
    .btn-container{
        bottom: 120px;
        position: absolute;
        width: 100%;
        text-align: center;
    }
}

#fixedExercises{
    .content{
        .imageQuestionContainer{
            .questionimage{
                max-height:135px;
                &.active{
                    border: 2px solid #008fff;
                }
            }
        }
        .imagequestion{
            width:100%;
            max-width:500px;
        }
    }
}
#anchor2{
    top: 29800px;
    position: absolute;
    color:transparent;
}
#anchor3{
     position: absolute;
     top: 79300px;
    color:transparent;
}
#anchor4{
     position: absolute;
     top:97007px;
    color:transparent;
}
//QUESTIONS
.question_container{
    display: none;
    &.active{
        display: block;
    }
    .question{
        display:block;
    }
    .questionExplaination{
        display: block;
    }
}

.imageQuestionContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    flex-flow: row wrap;
    .option_container{
        width:40%;
    }
}

.question_container{
    h3{
        margin: 5px 0;
    }
}

.TextAnswerContainer{
    display:flex;
    align-content: space-around;
    flex-direction: row;
    .option_container{
        width:100%;
    }
}

h3{
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    font-weight:bold;
}

.submitbtn{
   
}
.content_finish{
    position: fixed;
    top:0;
}

</style>
