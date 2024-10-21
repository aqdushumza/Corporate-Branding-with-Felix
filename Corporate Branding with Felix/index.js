
document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question");
    faqQuestions.forEach((question) => {
        question.addEventListener("click", function () {
            this.classList.toggle("active");
            const answer = this.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
                this.querySelector(".icon").src = "images/images/icon/plus.png";
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
                this.querySelector(".icon").src = "images/images/icon/minus.png";
            }
        });
    });
});
