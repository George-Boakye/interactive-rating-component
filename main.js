let numbers = document.querySelectorAll(".numbers");// all btns with numbers
let btn = document.getElementById("submit");// button
let evaluation = document.getElementById('evaluation');
let secondCard = document.getElementById('second-card');
let rating = document.getElementById('rating');



for (let i = 0 ; i < numbers.length; i++) {
  numbers[i].addEventListener('click' , ()=>{

      // getting the clicked number from the buttons 1 to 5
        let selectedNumber = numbers[i].innerHTML;

        // remove previously selected rating to have one rating at a time
        for(let i=0; i < numbers.length; i++){
          numbers[i].classList.contains('selected')
          numbers[i].classList.remove('selected');
        }
        
        //add class to clicked number
        numbers[i].classList.add('selected');
        

        //button to display the result card
        btn.addEventListener('click', () => {
          evaluation.style.display = "none";
          secondCard.style.display = "block";
          rating.innerText = selectedNumber;
        });
  });
}
