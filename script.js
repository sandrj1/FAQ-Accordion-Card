var accordion = document.getElementsByClassName("box__question");
var i;
var hideAnswer = true;

function toggleAnswer() {
    var question = this.firstChild;
    var arrow = this.lastChild;
    var answer = this.nextElementSibling;
    var j;
    hideAnswer = false;

    function openBox() {
        question.style.fontWeight = "var(--fw-bold)";
        arrow.style.transform = "rotateX(180deg)";
        answer.style.display = "unset";
        hideAnswer = true;
    }

    function closeBox() {
        question.style.fontWeight = "unset";
        arrow.style.transform = "rotateX(0deg)";
        answer.style.display = "none";
        hideAnswer = false;
    }

    for (j = 0; j < accordion.length; j++){
        if (accordion[j].nextElementSibling.style.display === "unset") {
            accordion[j].firstChild.style.fontWeight = "unset";
            accordion[j].lastChild.style.transform = "rotateX(0deg)";
            accordion[j].nextElementSibling.style.display = "none";
            if (hideAnswer) {
                openBox();
            } else {
                closeBox();
            }
            
        } else if (accordion[j].nextElementSibling === answer) {
            if (!hideAnswer) {
                openBox();
            } else {
                closeBox();
            }
        } 
    }
    
}

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener("click", toggleAnswer);
}