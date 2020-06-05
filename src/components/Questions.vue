<template>
    <div id="fixedExercises" ref="fixedExerciseContainer">
        <div class="content">   
            <div id="route1ex1" v-if="currentExercise === 1">
                <div id="ex1" class="progressbar">
                    <img  class="progress13" src="@/assets/images/exercises/progressbar_1_3.svg" v-if="this.exercise[1][1]['current'] == true">
                    <img  class="progress23" src="@/assets/images/exercises/progressbar_2_3.svg" v-if="this.exercise[1][2]['current'] == true">
                    <img  class="progress33" src="@/assets/images/exercises/progressbar_3_3.svg" v-if="this.exercise[1][3]['current'] == true">
                </div>
                <div class="oebbis">
                    <h3>listen to the audio inputs and repeat.</h3>
                    <div class="question_container" id="e1q1" v-bind:class="{ active: exercise[1][1]['current'] }">
                        <div class="questionExplaination">Masculine article example sentence:</div>
                        <div class="inline-container">
                            <div class="questionPlay"><img id="l1e3q2_0" @click="playAudioFile('traeffpunkt-am-central.ogg')" alt="play button" src="@/assets/icons/audio-input.svg" class="playbutton" /></div>
                            <div class="question"><b>Dä Träffpunkt isch am Central. </b> <div class="smaller">(The meeting point is at Central.)</div></div>  
                        </div>
                        <h3>now go ahead and repeat that sentence</h3>
                        <div class="centered_btn_container">
                            <div>
                                <img  alt="play button" src="@/assets/icons/mic-input-active.svg" class="recordbutton active" />
                                <img  @click="fakeRecording($event)" alt="play button" src="@/assets/icons/mic-input.svg" class="recordbutton notactive" />

                            </div>
                            
                        </div>
                        <div class="centered_btn_container bottom-button">
                            <span class="submitbtn" @click="checkAnswerL1E1Q1()">Check</span>
                        </div>
                </div>

               <div class="question_container" id="e1q2" v-bind:class="{ active: exercise[1][2]['current'] }">
                    <div class="questionExplaination">Feminine article example sentence:</div>
                    <div class="inline-container">
                        <div class="questionPlay"><img id="l1e3q2_0" @click="playAudioFile('frau-stigt-is-tram.ogg')" alt="play button" src="@/assets/icons/audio-input.svg" class="playbutton" /></div>
                        <div class="question"><b>D'Frau stigt is Tram i. </b> <div class="smaller"> (The woman gets on the tram.)</div></div>  
                    </div>
                    <h3>now go ahead and repeat that sentence</h3>
                    <div class="centered_btn_container">
                        <div>
                            <img  alt="play button" src="@/assets/icons/mic-input-active.svg" class="recordbutton active" />
                            <img  @click="fakeRecording($event)" alt="play button" src="@/assets/icons/mic-input.svg" class="recordbutton notactive" />

                        </div>
                        
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <span class="submitbtn" @click="checkAnswerL1E1Q2()">Check</span>
                    </div>
              </div>


                 <div class="question_container" id="e1q3" v-bind:class="{ active: exercise[1][3]['current'] }">
                    <div class="questionExplaination">Feminine article example sentence:</div>
                    <div class="inline-container">
                        <div class="questionPlay"><img id="l1e3q2_0" @click="playAudioFile('gebaeude-mitem-central-schriftzug.ogg')" alt="play button" src="@/assets/icons/audio-input.svg" class="playbutton" /></div>
                        <div class="question"><b>S'Gebäude mitem "Central" Schriftzug isch es Hotel. </b> <div class="smaller">(The building with the "Central" Logo is a hotel.)</div></div>  
                    </div>
                    <h3>now go ahead and repeat that sentence</h3>
                    <div class="centered_btn_container">
                        <div>
                            <img  alt="play button" src="@/assets/icons/mic-input-active.svg" class="recordbutton active" />
                            <img  @click="fakeRecording($event)" alt="play button" src="@/assets/icons/mic-input.svg" class="recordbutton notactive" />

                        </div>
                        
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <span class="submitbtn" @click="checkAnswerL1E1Q3()">Check</span>
                    </div>
              </div>
              
            </div>
            </div>

            <div id="route1ex2" v-if="currentExercise === 2">

                <div id="ex2" class="progressbar">
                    <img  class="progress13" src="@/assets/images/exercises/progressbar_1_3.svg" v-if="this.exercise[2][1]['current'] == true">
                    <img  class="progress23" src="@/assets/images/exercises/progressbar_2_3.svg" v-if="this.exercise[2][2]['current'] == true">
                    <img  class="progress23" src="@/assets/images/exercises/progressbar_3_3.svg" v-if="this.exercise[2][3]['current'] == true">
                </div>
                <div class="question_container" id="e2q1" v-bind:class="{ active: exercise[2][1]['current'] }">
                    <h3>Select the word which fit the following image.</h3>
                    <div class="questionImage"><img id="l1e2q1_0" alt="shopping man" src="@/assets/images/exercises/shoppingman.jpg" class="questionimage" /></div>
                    <div class="imageAnswerQuestionContainer">
                        <div class="option full-width" v-on:click="selectAnswer($event,2,1, 0)"  v-bind:class="{active:exercise[2][1]['selectedAnswer'][0]}">
                            Er poschtet Chleider.
                        </div>
                        <div class="option full-width" v-on:click="selectAnswer($event,2,1, 1)"  v-bind:class="{active:exercise[2][1]['selectedAnswer'][1]}">
                            Sie poschtet Chleider.
                        </div>
                        <div class="option full-width" v-on:click="selectAnswer($event,2,1, 2)"  v-bind:class="{active:exercise[2][1]['selectedAnswer'][2]}">
                            Er gaht hei.
                        </div>
                        <div class="option full-width" v-on:click="selectAnswer($event,2,1, 3)"  v-bind:class="{active:exercise[2][1]['selectedAnswer'][3]}">
                            Er luegt es Huus a.
                        </div>
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <span class="submitbtn" @click="checkAnswerL1E2Q1()">Check</span>
                    </div>
                </div>

                <div class="question_container" id="e2q2" v-bind:class="{ active: exercise[2][2]['current'] }">
                    <h3>Select the word which fit the following image.</h3>
                    <div class="questionImage"><img id="l1e2q2_1" alt="e ma" src="@/assets/images/exercises/limmat.jpg" class="questionimage" /></div>
                    <div class="imageAnswerQuestionContainer">
                        <div class="option" v-on:click="selectAnswer($event,2,2, 0)"  v-bind:class="{active:exercise[2][2]['selectedAnswer'][0]}">
                            Er postet es Wasser.
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,2,2, 1)"  v-bind:class="{active:exercise[2][2]['selectedAnswer'][1]}">
                           Sie luegt d'Limmat a.
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,2,2, 2)"  v-bind:class="{active:exercise[2][2]['selectedAnswer'][2]}">
                            Er gaht ad Limmat.
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,2,2, 3)"  v-bind:class="{active:exercise[2][2]['selectedAnswer'][3]}">
                            Sie lueged d'Limmat a. 
                        </div>
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <span class="submitbtn" @click="checkAnswerL1E2Q2()">Check</span>
                    </div>
                </div>

                <div class="question_container" id="e2q3" v-bind:class="{ active: exercise[2][3]['current'] }">
                    <h3>Select the word which fit the following image.</h3>
                    <div class="questionImage"><img id="l1e2q3_1" alt="e ma" src="@/assets/images/exercises/zug.jpg" class="questionimage" /></div>
                    <div class="imageAnswerQuestionContainer">
                        <div class="option" v-on:click="selectAnswer($event,2,3, 0)"  v-bind:class="{active:exercise[2][3]['selectedAnswer'][0]}">
                            Sie lueged usem Fenster.
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,2,3, 1)"  v-bind:class="{active:exercise[2][3]['selectedAnswer'][1]}">
                           Er luegt es Auto a.
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,2,3, 2)"  v-bind:class="{active:exercise[2][3]['selectedAnswer'][2]}">
                            Sie gaht uf dä Zug.
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,2,3, 3)"  v-bind:class="{active:exercise[2][3]['selectedAnswer'][3]}">
                            Sie gönd uf dä Zug.
                        </div>
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <span class="submitbtn" @click="checkAnswerL1E2Q3()">Check</span>
                    </div>
                </div>

            </div>
             <div id="route1ex3" v-if="currentExercise === 3">
                <div id="ex3" class="progressbar">
                    <img  class="progress13" src="@/assets/images/exercises/progressbar_1_3.svg" v-if="this.exercise[3][1]['current'] == true">
                    <img  class="progress23" src="@/assets/images/exercises/progressbar_2_3.svg" v-if="this.exercise[3][2]['current'] == true">
                    <img  class="progress33" src="@/assets/images/exercises/progressbar_3_3.svg" v-if="this.exercise[3][3]['current'] == true">
                </div>
                <div class="question_container" id="e3q1" v-bind:class="{ active: exercise[3][1]['current'] }">
                    <h3>Look at the following pictures and assign them to the correct words</h3>
                    <div class="questionImage"><img id="l1e3q1_0" alt="e ma" src="@/assets/images/exercises/book.jpg" class="questionimage margin-top" /></div>
                    <div class="imageAnswerQuestionContainer margin-top">
                        <div class="option" v-on:click="selectAnswer($event,3,1, 0)"  v-bind:class="{active:exercise[3][1]['selectedAnswer'][0]}">
                            Es Buech
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,3,1, 1)"  v-bind:class="{active:exercise[3][1]['selectedAnswer'][1]}">
                            Es Papier
                        </div>
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <span class="submitbtn" @click="checkAnswerL1E3Q1()">Check</span>
                    </div>
                </div>

                <div class="question_container" id="e3q2" v-bind:class="{ active: exercise[3][2]['current'] }">
                    <h3>Lok at the following pictures and assign them to the correct words</h3>
                    <div class="questionImage"><img id="l1e3q2_0" alt="e ma" src="@/assets/images/exercises/desk.jpg" class="questionimage margin-top" /></div>
                    <div class="imageAnswerQuestionContainer margin-top">
                        <div class="option" v-on:click="selectAnswer($event,3,2, 0)"  v-bind:class="{active:exercise[3][2]['selectedAnswer'][0]}">
                            En Studänt
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,3,2, 1)"  v-bind:class="{active:exercise[3][2]['selectedAnswer'][1]}">
                            En Schribtisch
                        </div>
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <span class="submitbtn" @click="checkAnswerL1E3Q2()">Check</span>
                    </div>
                </div>

                <div class="question_container" id="e3q3" v-bind:class="{ active: exercise[3][3]['current'] }">
                    <h3>Look at the following pictures and assign them to the correct words</h3>
                    <div class="questionImage"><img id="l1e3q3_0" alt="e ma" src="@/assets/images/exercises/nzz.jpg" class="questionimage margin-top" /></div>
                    <div class="imageAnswerQuestionContainer" margin-top>
                        <div class="option" v-on:click="selectAnswer($event,3,3, 0)"  v-bind:class="{active:exercise[3][3]['selectedAnswer'][0]}">
                            E Zitig
                        </div>
                        <div class="option" v-on:click="selectAnswer($event,3,3, 1)"  v-bind:class="{active:exercise[3][3]['selectedAnswer'][1]}">
                            E Nummere
                        </div>
                    </div>
                    <div class="centered_btn_container bottom-button">
                        <span class="submitbtn" @click="checkAnswerL1E3Q3()">Check</span>
                    </div>
                </div>
            </div>
             <div id="route1ex4" v-if="currentExercise === 4">
                <div id="ex4" class="progressbar">
                    <img  class="progress13" src="@/assets/images/exercises/progressbar_1_2.svg" v-if="this.exercise[4][1]['current'] == true">
                    <img  class="progress23" src="@/assets/images/exercises/progressbar_2_2.svg" v-if="this.exercise[4][2]['current'] == true">
                </div>
                <div class="question_container" id="e4q1" v-bind:class="{ active: exercise[4][1]['current'] }">
                    <SentenceQuestion :Description="'Build the following sentences in Swiss-German.'" :Question="'Hi, I would like a coffee with cream.'" :inputAlias="this.exercise[4][1]['options']" :correctAnswer="exercise[4][1]['correctAnswer']" @correctAnswer="showCorrectFeedback(1)" @wrongAnswer="showWrongFeedback"/>
                </div>

                <div class="question_container" id="e4q2" v-bind:class="{ active: exercise[4][2]['current'] }">
                    <SentenceQuestion :Description="'Build the following sentences in Swiss-German.'" :Question="'Can I have a big beer, please? Thanks.'" :inputAlias="this.exercise[4][2]['options']" :correctAnswer="exercise[4][2]['correctAnswer']" @correctAnswer="showCorrectFeedback(2)" @wrongAnswer="showWrongFeedback"/>
                </div>

            </div>
        </div>
         <div class="feedback-container" ref="feedbackContainer">
                    <div id="correct-feedback" class="feedback" ref="correctFeedback">
                        <div class="feedback-text">perfect!</div>
                        <!--<div class="nextbtn">NEXT</div>-->
                    </div>
                    <div id="wrong-feedback" class="feedback"  ref="wrongFeedback">
                        <div class="feedback-text">not quite..</div>
                        <!--<div class="tryagainbtn">TRY AGAIN</div>-->
                    </div>
                </div>
    </div>
</template>


<script>
//import mapstyles from "@/styles.js";
import shared from "@/shared.js";
import cookies from "@/cookies.js";
import SentenceQuestion from "@/components/SentenceQuestion";

export default {
    name: "questions",
    props: {
        exercise : Object,
        currentExercise: Number
    },
    components:{
        SentenceQuestion
    },
    data: function() {
        return{
            id : this.$route.params.id,
            correctAnswers: {
                "l1e1q1" : null, //correct answer of the first question
                "l1e1q2" : null,
                "l1e1q3" : null,
                "l1e2q1" : 0,
                "l1e2q2" : 1,
                "l1e2q3" : 3,
                "l1e3q1" : 0,
                "l1e3q2" : 1,
                "l1e3q3" : 0,
                "l1e4q1" : 14235
            },
            checkedElement: null,
            audioE3Q1: null
        }
    },
    mounted: function(){
            var res = this.id.split('.');
            this.id= res[0];
            this.part=res[1];
            
    },
    created: function(){
        this.target = document.querySelectorAll("scrollcontent");
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        selectAnswer($event, lektion, exercise, questionNo){
            for (let [key, value] of Object.entries(this.exercise[lektion][exercise]["selectedAnswer"])) {
                //console.log(`${key}: ${value}`);
                this.exercise[lektion][exercise]["selectedAnswer"][key] = false;
            }
            this.checkedElement = $event.currentTarget;
            this.exercise[lektion][exercise]["selectedAnswer"][questionNo] = true;

        },
        deSelectAnswers(lektion, exercise){
            for (let [key, value] of Object.entries(this.exercise[lektion][exercise]["selectedAnswer"])) {
                //console.log(`${key}: ${value}`);
                this.exercise[lektion][exercise]["selectedAnswer"][key] = false;
            }
        },
        checkAnswerL1E1Q1: function(){

            console.log("correct answer to question 1.");
            //this.checkedElement.style.borderColor = "green";
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            correctFeedback.style.display = "inline-block";
            wrongFeedback.style.display = "none";
            feedbackContainer.classList.add("show");
            this.playAudioFile("correct.wav")

            setTimeout(()=>{          
                feedbackContainer.classList.remove("show");
            }, 1000);

            setTimeout(()=>{       
                this.exercise[1][1]["done"]=true;
                this.exercise[1][1]["current"] = false;
                this.exercise[1][2]["current"] = true;
                localStorage.progress = JSON.stringify(this.exercise);
                correctFeedback.style.display = "none";
            }, 1600);
            
        },       
        checkAnswerL1E1Q2: function(){

            console.log("correct answer to question 2.");
            //this.checkedElement.style.borderColor = "green";
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            correctFeedback.style.display = "inline-block";
            wrongFeedback.style.display = "none";
            feedbackContainer.classList.add("show");
            this.playAudioFile("correct.wav")

                setTimeout(()=>{          
                    feedbackContainer.classList.remove("show");
                }, 1000);

                setTimeout(()=>{
                    this.exercise[1][2]["done"]=true;
                    this.exercise[1][2]["current"] = false;
                    this.exercise[1][3]["current"] = true;
                    localStorage.progress = JSON.stringify(this.exercise);
                    correctFeedback.style.display = "none";
                }, 1600);
        },
        checkAnswerL1E1Q3: function(){

            console.log("correct answer to question 3.");
            //this.checkedElement.style.borderColor = "green";
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            correctFeedback.style.display = "inline-block";
            wrongFeedback.style.display = "none";
            feedbackContainer.classList.add("show");
            this.playAudioFile("correct.wav")

                setTimeout(()=>{          
                    feedbackContainer.classList.remove("show");
                }, 1000);

                setTimeout(()=>{
                    this.exercise[1][3]["done"]=true;
                    this.exercise[1][3]["current"] = false;
                    this.exercise[1]["done"] = true;
                    localStorage.progress = JSON.stringify(this.exercise);
                    correctFeedback.style.display = "none";
                    this.closeExercise();
                    this.$emit("oncloseInput");
                }, 1600);
        },
        checkAnswerL1E2Q1: function(){
            var correct = false;
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;

            for (let [key, value] of Object.entries(this.exercise[2][1]["selectedAnswer"])) {
                //console.log(`${key}: ${value}`);
                if(this.exercise[2][1]["selectedAnswer"][key] == true){
                    if(key == this.correctAnswers["l1e2q1"]){
                        console.log("correct answer to question.");
                        this.checkedElement.classList.add("correct");
                        correct = true;
                        correctFeedback.style.display = "inline-block";
                        wrongFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                        this.playAudioFile("correct.wav")
                    }else{
                        correct = false;
                        console.log("wrong answer to question");
                        this.playAudioFile("incorrect.wav")
                        this.checkedElement.classList.add("wrong")
                        wrongFeedback.style.display = "inline-block";
                        correctFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                        setTimeout(()=>{      
                            this.checkedElement.classList.remove("wrong")
                            feedbackContainer.classList.remove("show");
                            //wrongFeedback.style.display = "none";
                        }, 800);
                    }
                }
            }
            if(correct == true){
                console.log("next question")
                
                setTimeout(()=>{          
                    feedbackContainer.classList.remove("show");
                }, 1000);

                 setTimeout(()=>{
                    this.exercise[2][1]["done"]=true;
                    this.exercise[2][1]["current"] = false;
                    this.exercise[2][2]["current"] = true;
                    this.checkedElement.classList.remove("correct");
                    correctFeedback.style.display = "none";
                    this.deSelectAnswers(2,1)
                }, 1600);
            }
        },
        checkAnswerL1E2Q2: function(){
            var correct = false;
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            for (let [key, value] of Object.entries(this.exercise[2][2]["selectedAnswer"])) {
                console.log(`${key}: ${value}`);
                if(this.exercise[2][2]["selectedAnswer"][key] == true){
                    if(key == this.correctAnswers["l1e2q2"]){
                        this.playAudioFile("correct.wav")
                        console.log("correct answer to question.");
                        this.checkedElement.classList.add("correct");
                        correct = true;
                        correctFeedback.style.display = "inline-block";
                        wrongFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");

                    }else{
                        this.playAudioFile("incorrect.wav")
                        correct = false;
                        console.log("wrong answer to question");
                        this.checkedElement.classList.add("wrong")                     
                        wrongFeedback.style.display = "inline-block";
                        correctFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                         setTimeout(()=>{      
                            feedbackContainer.classList.remove("show");
                            this.checkedElement.classList.remove("wrong")
                        }, 500);
                    }
                }
            }
            if(correct == true){
                setTimeout(()=>{          
                    feedbackContainer.classList.remove("show");
                }, 1000);

                setTimeout(()=>{
                    this.exercise[2][2]["done"]=true;
                    this.exercise[2][2]["current"] = false;
                    this.exercise[2][3]["current"] = true;
                    localStorage.progress = JSON.stringify(this.exercise);
                    correctFeedback.style.display = "none";
                    this.checkedElement.classList.remove("correct");
                    this.deSelectAnswers(2,2);
                     console.log('eq2',this.exercise)
                }, 1600);
            }
        },
        checkAnswerL1E2Q3: function(){
            var correct = false;            
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            console.log(this.checkedElement)
            for (let [key, value] of Object.entries(this.exercise[2][3]["selectedAnswer"])) {
                console.log(`${key}: ${value}`);
                if(this.exercise[2][3]["selectedAnswer"][key] == true){
                    if(key == this.correctAnswers["l1e2q3"]){
                        this.playAudioFile("correct.wav")
                        console.log("correct answer to question.");
                        this.checkedElement.classList.add("correct");
                        correct = true;
                        correctFeedback.style.display = "inline-block";
                        wrongFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                    }else{
                        this.playAudioFile("incorrect.wav")
                        correct = false;
                        console.log("wrong answer to question");
                        this.checkedElement.classList.add("wrong")                     
                        wrongFeedback.style.display = "inline-block";
                        correctFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                         setTimeout(()=>{      
                            feedbackContainer.classList.remove("show");
                            this.checkedElement.classList.remove("wrong")
                        }, 500);
                    }
                }
            }
            if(correct == true){
                setTimeout(()=>{          
                    feedbackContainer.classList.remove("show");
                }, 1000);
                setTimeout(()=>{
                    this.exercise[2][3]["done"]=true;
                    // always together:
                    this.exercise[2]["done"] = true;
                    this.exercise[2][3]["current"] = false;
                    localStorage.progress = JSON.stringify(this.exercise);
                    correctFeedback.style.display = "none";
                    this.checkedElement.classList.remove("correct");
                    this.deSelectAnswers(2,3);
                    this.closeExercise();
                    this.$emit("oncloseInput");
                }, 1600);
            }
        },
        checkAnswerL1E3Q1: function(){
            var correct = false;
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            //console.log(this.checkedElement)
            for (let [key, value] of Object.entries(this.exercise[3][1]["selectedAnswer"])) {
                //console.log(`${key}: ${value}`);
                if(this.exercise[3][1]["selectedAnswer"][key] == true){
                    if(key == this.correctAnswers["l1e3q1"]){
                            
                        this.playAudioFile("correct.wav")
                        console.log("correct answer to question.");
                        this.checkedElement.classList.add("correct");
                        correct = true;
                        correctFeedback.style.display = "inline-block";
                        wrongFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");

                    }else{
                        this.playAudioFile("incorrect.wav")
                        correct = false;
                        console.log("wrong answer to question");
                        this.checkedElement.classList.add("wrong")                     
                        wrongFeedback.style.display = "inline-block";
                        correctFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                        setTimeout(()=>{      
                            feedbackContainer.classList.remove("show");
                            this.checkedElement.classList.remove("wrong")

                        }, 500);
                    
                    }
                }
            }
            if(correct == true){
                console.log("next question")
                setTimeout(()=>{          
                    feedbackContainer.classList.remove("show");
                }, 1000);
                 setTimeout(()=>{
                    
                    this.deSelectAnswers(3,1);
                    this.exercise[3][1]["done"]=true;
                    this.exercise[3][1]["current"] = false;
                    this.exercise[3][2]["current"] = true;                            
                    correctFeedback.style.display = "none"; 
                    this.checkedElement.classList.remove("correct");                
                    this.deSelectAnswers(3,1);
                }, 1600);
            }
        },
        checkAnswerL1E3Q2: function(){
            var correct = false;
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            console.log(this.checkedElement)
            for (let [key, value] of Object.entries(this.exercise[3][2]["selectedAnswer"])) {
                console.log(`${key}: ${value}`);
                if(this.exercise[3][2]["selectedAnswer"][key] == true){
                    if(key == this.correctAnswers["l1e3q2"]){
                        this.playAudioFile("correct.wav")
                        console.log("correct answer to question.");
                        this.checkedElement.classList.add("correct");
                        correct = true;
                        correctFeedback.style.display = "inline-block";
                        wrongFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                    }else{
                        this.playAudioFile("incorrect.wav")
                        correct = false;
                        this.checkedElement.classList.add("wrong")                     
                        wrongFeedback.style.display = "inline-block";
                        correctFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                        setTimeout(()=>{      
                            feedbackContainer.classList.remove("show");
                            this.checkedElement.classList.remove("wrong")
                        }, 500);
                    }
                }
            }
            if(correct == true){
                setTimeout(()=>{          
                    feedbackContainer.classList.remove("show");
                }, 1000);
                setTimeout(()=>{
                    this.exercise[3][2]["done"]=true;
                    this.exercise[3][2]["current"] = false;
                    this.exercise[3][3]["current"] = true;
                    localStorage.progress = JSON.stringify(this.exercise);
                    correctFeedback.style.display = "none";
                    this.checkedElement.classList.remove("correct");
                    this.deSelectAnswers(3,2);
                }, 1600);
            }
        },        
        checkAnswerL1E3Q3: function(){
            var correct = false;
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            console.log(this.checkedElement)
            for (let [key, value] of Object.entries(this.exercise[3][3]["selectedAnswer"])) {
                console.log(`${key}: ${value}`);
                if(this.exercise[3][3]["selectedAnswer"][key] == true){
                    if(key == this.correctAnswers["l1e3q3"]){
                        this.playAudioFile("correct.wav")
                        console.log("correct answer to question.");
                        this.checkedElement.classList.add("correct");
                        correct = true;
                        correctFeedback.style.display = "inline-block";
                        wrongFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                    }else{
                        this.playAudioFile("incorrect.wav")
                        correct = false;
                        this.checkedElement.classList.add("wrong")                     
                        wrongFeedback.style.display = "inline-block";
                        correctFeedback.style.display = "none";
                        feedbackContainer.classList.add("show");
                        setTimeout(()=>{      
                            feedbackContainer.classList.remove("show");
                            this.checkedElement.classList.remove("wrong")
                        }, 500);
                    }
                }
            }
            if(correct == true){
                setTimeout(()=>{          
                    feedbackContainer.classList.remove("show");
                }, 1000);
                setTimeout(()=>{
                    this.exercise[3][3]["done"]=true;
                    // always together:
                    this.exercise[3]["done"] = true;
                    this.exercise[3][3]["current"] = false;
                    localStorage.progress = JSON.stringify(this.exercise);
                    correctFeedback.style.display = "none";
                    this.checkedElement.classList.remove("correct");
                    this.deSelectAnswers(3,3);
                    this.closeExercise();
                    this.$emit("oncloseInput");
                }, 1600);
            }
        },
        showCorrectFeedback: function(qId){
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            correctFeedback.style.display = "inline-block";
            wrongFeedback.style.display = "none";
            feedbackContainer.classList.add("show");
            this.playAudioFile("correct.wav")
            setTimeout(()=>{      
                feedbackContainer.classList.remove("show");
                correctFeedback.style.display = "none";
                this.exercise[4][qId]["done"] = true;
                this.exercise[4][qId]["current"] = false;
                if(qId==1){
                    this.exercise[4][2]["current"] = true;

                }else{
                    console.log("broooo");
                    this.exercise[4]["current"] = false;
                    this.exercise[4]["done"]=true;
                    this.closeExercise();
                    this.$emit("oncloseInput");
                }
                 localStorage.progress = JSON.stringify(this.exercise);
            }, 500);
        },
        showWrongFeedback: function(){
            let correctFeedback = this.$refs.correctFeedback;
            let wrongFeedback = this.$refs.wrongFeedback;
            let feedbackContainer = this.$refs.feedbackContainer;
            wrongFeedback.style.display = "inline-block";
            correctFeedback.style.display = "none";
            feedbackContainer.classList.add("show");
            this.playAudioFile("incorrect.wav")
            setTimeout(()=>{      
                feedbackContainer.classList.remove("show");
            }, 500);
        },
        playAudioFile: async function(audioName){
            this.audioE3Q1 = await new Audio(require('@/assets/audio/'+audioName))
            this.audioE3Q1.play();
            console.log("play audio " +audioName)
        },
        playSample1: function(){
            this.audioE3Q1 = new Audio(require('@/assets/audio/efrau.mp4'))
            this.audioE3Q1.play();
            console.log("play audio")
        },        
        playSample2: function(){
            this.audioE3Q2 = new Audio(require('@/assets/audio/esmeitli.mp4'))
            this.audioE3Q2.play();
            console.log("play audio")
        },
        playAudioFile: async function(audioName){
            this.audioE3Q1 = await new Audio(require('@/assets/audio/'+audioName))
            this.audioE3Q1.play();
            console.log("play audio " +audioName)
        },
        fakeRecording: async function($event){
            console.log($event)
                $event.target.style.opacity = 0;
            setTimeout(()=>{
                $event.target.style.opacity = 1;

            }, 3000);

        },
        closeExercise: function(){
            console.log("close exercise")
            this.exercise[1][1]["current"] = false;
            this.exercise[1][2]["current"] = false;    
            this.exercise[1][3]["current"] = false;
            this.exercise[2][1]["current"] = false;
            this.exercise[2][2]["current"] = false;
            this.exercise[2][3]["current"] = false;
            this.exercise[3][1]["current"] = false;
            this.exercise[3][2]["current"] = false;           
            this.exercise[3][3]["current"] = false;
            this.exercise[4][1]["current"] = false;
            this.exercise[4][2]["current"] = false;
            this.deSelectAnswers(2,1);
            this.deSelectAnswers(2,2);
            this.deSelectAnswers(2,3);
            this.deSelectAnswers(3,1);
            this.deSelectAnswers(3,2);
            this.deSelectAnswers(3,3);
            this.deSelectAnswers(4,1);
            this.deSelectAnswers(4,2);
            console.log("this ex test", this.exercise);
            this.$emit("onclose");
        }
    }
}


</script>


<style lang="scss">
h3{
    font-family: "Roboto Slab", serif;
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0px;
}
.closeExerciseBtn{
    top:300px;
    left:100px;
    position: absolute;
}
#fixedExercises{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 50px;
    left: 0;
    background-color:rgba(50,50,50,0.8);
    z-index: 9010;
    text-align:left;
    //display:none;
    left:100%;
    transition: left 0.6s ease-in;
    &.active{
        //display:block;
        left:0%;
        transition: left 0.6s ease-out;
    }

    .content{
        padding: 10px 0 0 0;
        width: 90%;
        margin: 0 auto;
        .imageQuestionContainer{
            .questionimage{
                &.active{
                    border: 2px solid #008fff;
                }
                
            }
        }
    }

}
.questionImage{
    img{
        max-height:130px;
        @media print, screen and (min-width: 40em) {
             max-height:200px;
        }
    }
}
.recordbutton{
    cursor:pointer;
    &.active{
        opacity:1;
    }
    &.notactive{
        margin-left: -32px;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
    }
}
.parallax-layer-1{
    z-index: 90002;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
.verb-container{
    font-size:12px;
}
.progressbar{
    text-align:left;

}
//QUESTIONS
.question_container{
    display: none;
    &.active{
        display: block;
    }
    .question{
        display:inline;
        margin-top:-5px;
        .smaller{
            font-size:12px;
        }
    }
    .questionExplaination{
        display: block;
    }
    .questionImage{
        text-align:center;
    }
}

.centered_btn_container{
    text-align:center;
    
    &.bottom-button{
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 160px;
    }
}
.feedback-container{
    width: 100%;
    position: absolute;
    bottom: -80px;
    left: 0;
    text-align: center;
    transition: bottom 0.3s ease-in;
    &.show{
        bottom:50px;
        transition: bottom 0.3s ease-out;
    }
    .feedback {
        display: none;
        position: relative;
        top: 0;
        height: 200px;
        width: 300px;
        border-radius: 30px;
        margin: 0 auto;

        &#correct-feedback{
            background-color: #D3FFB2;
            .feedback-text{
                color: #78D124;
            }
        }
        &#wrong-feedback{
            background-color: #FFC188;
            .feedback-text{
                color: #FD7122;
            }
        }
    }
    .feedback-text{
        font-size: 20px;
        font-weight: bold;
        font-family:  'Roboto', sans-serif;
        margin:15px auto;
    }
}
.submitbtn{
    display:inline-block;
    width: 200px;
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
.margin-top{
    margin-top:20px;
}
.imageAnswerQuestionContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
 
    .option{
        
        border:2px solid #87FFF2;
        padding: 7px 13px;
        border-radius: 30px;
        width: 48%;
        max-width:400px;
        min-width:225px;
        text-align:center;
        @media print, screen and (min-width: 40em) {
            max-width:400px;
        }
        margin-top: 10px;
        
        cursor:pointer;
        &.active{
            background-color:#87FFF2;
            color:#323232;
        }
        &.wrong{
            background-color:#FFC188;
            border-color : #FD7122;
            color : #323232;
        }
        &.correct{
            background-color:#D3FFB2;
            border-color : #78D124;
            color : #323232;
        }
        &.full-width{
            width:75%;
            text-align:center;
            @media print, screen and (min-width: 40em) {
                max-width:350px;
            }
        }
    }
    .feedback{
        display:inline-block;
    }
    .submitbtn{
        display:inline-block;
        width: auto;
    }
}
.inline-container{
    margin-top:20px;
    margin-bottom:20px;
    display:flex;
    user-select: none;
}
.questionPlay{
    display: inline;
    margin-right:20px;
    img{
        cursor:pointer;
        max-width:100px;
    }
}
.oebbis{
    margin-top:30px;
    h3{
        margin:20px 0px;
    }
}
</style>