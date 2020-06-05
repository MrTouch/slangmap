<template>
    <div>
        <h3>{{Description}}</h3>
        <div class="question">{{Question}}</div>
        <div class="answers">
            <div class="bubbletag"  v-for="answer of answers" :key="answer.value">
                <span class="active" :class="{wrong : answer.validity == validity.WRONG, correct : answer.validity == validity.CORRECT}" @click="unselect(answer)"> {{answer.value}} </span>
            </div>
        </div>
        <div class="options">
            <div class="bubbletag" v-for="option of options" :key="option.value" >
                    <span  v-if="option.active" @click="select(option)">{{option.value}}</span>
            </div>
        </div>
        <div class="centered_btn_container bottom-button">
            <span class="submitbtn" @click="checkAnswer()">Check</span>
        </div>
    </div>
</template>


<script>
// Bei der Umsetzung von diesem Komponenten hatte ich hilfe von Patrick Stillhart.
const VALIDITY = {
    "OPEN" : 0,
    "CORRECT" :1,
    "WRONG" : -1
}

export default {
    props:{
        inputAlias: Array,
        correctAnswer: Array,
        Description: String,
        Question : String
    },
    data(){
        return {
            answers: [],
            options: this.inputAlias.map(value => ({value, active:true})),
            validity : VALIDITY
        }
    },
    methods:{
        select: function(option){   
            this.answers.push({"value":option.value, "validity" : VALIDITY.OPEN});
            option.active = false;
        },
        unselect: function(answer){
            this.answers = this.answers.filter(other => other.value != answer.value);
            this.options.find(other => other.value == answer.value && !other.active).active=true;
        },
        checkAnswer: function(){
            var allCorrect = true;
            for(var x = 0; x < this.answers.length; x++){
                this.answers[x].validity = VALIDITY.WRONG;
            }
            if(this.correctAnswer.length != this.answers.length){
                allCorrect = false;
            }
            for(var i = 0; i < this.correctAnswer.length; i++){
                if(this.answers[i] && this.correctAnswer[i] != this.answers[i].value){
                    allCorrect = false;
                }else{
                    if(this.answers[i])
                        this.answers[i].validity = VALIDITY.CORRECT;
                }
            }
            if(!allCorrect){
                this.$emit("wrongAnswer")
            }else{
                this.answers = [];
                this.options.forEach(option=>{
                    option.active = true;
                })
                this.$emit("correctAnswer")
            }
        }
    }
}
</script>


<style scoped lang="scss">
h3{
    text-transform:lowercase;
}
.answers{
    height:145px;
    margin-top:10px;
}
.bubbletag{
    cursor:pointer;
    display: inline-block;
    margin: 2px 3px;
    span{
        display: inline-block;
        padding: 8px 15px;
        margin: 3px;
        border: 2px solid #87FFF2;
        border-radius: 5000px;
        &.active{
            background-color: #87FFF2;
            color: #323232;
        }
        &.wrong{
            background-color: #FFC188;
            border-color: #FFC188;
            color: #323232;
        }
    }

}
</style>
