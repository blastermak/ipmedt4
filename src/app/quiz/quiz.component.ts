import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {

    $( document ).ready(function() {

      console.log('im in');
      console.log();

      // store answers in an array
      const n = (new Date()).getTime();
      const answers = [n];
      let score = 0;

      // if the restart button is pressed, start quiz again
      $('.back').click(function() {

        console.log('backbutton');

        const previousCard = parseInt($('.progress-bar').attr('card'), 10 ) - 1;
        const currentCard = previousCard + 1;

        // remove last answer from answers array
        answers.pop();

        progress(previousCard, answers); // update progress bar

        // remove the back button
        if (previousCard === 0) {
          $('.back').addClass('hidden');
        }

        $('.card-' + (currentCard + 1)).fadeOut();
        $('.card-' + currentCard).delay(450).removeClass('hidden').hide().fadeIn();
      });




      // forward
      $('.btn-block').click(function() {
        console.log('iets');
        let currentCard = $(this).closest('[class^="card-"]').attr('class');
        console.log(currentCard);
        currentCard = parseInt(currentCard.split('-')[1], 10);
        console.log(currentCard);

        // add answer to answers array
        const answer = $(this).text();
        answers[currentCard] = answer;

        progress(currentCard, answers); // update progress bar

        // add in back button
        if (currentCard !== 0 && $('.back').hasClass('hidden')) {
          $('.back').removeClass('hidden');
        }


        $('.card-' + currentCard).fadeOut();

        if (currentCard === 13) {
          $('.theEnd').delay(450).removeClass('hidden').hide().fadeIn();

          for (let i = 0; i < answers.length; i++) {
            const temp = answers[i];
            //if (temp == 'Ja') {
              score = score + 1;
            }
            // Do something
          }
          if (score <= 6) {
            $('#score').html('Je hebt weinig symptomen');
          }
          if (score >= 6 && score <= 12) {
            $('#score').html('Je hebt veel symptomen. Een afspraak bij de huisarts is een goed idee');
          }
        }
        $('.card-' + (currentCard + 1)).delay(450).removeClass('hidden').hide().fadeIn();
      });
    });

    function progress(card, answers) {
      let biggestHeight = 300;
      const amountOfCards = $('[class^=\'card-\']').length;

      const height = $('.cardHolder').height();
      if (height > biggestHeight) {
        biggestHeight = height;
        $('.cardHolder').css('min-height', biggestHeight + 'px');
      }

      if (answers !== undefined) {
        console.log(card, answers);
      }

      const percentage = (100 / amountOfCards) * card;
      $('.progress-bar').css('width', percentage + '%').attr('aria-valuenow', percentage).attr('card', card);
    }

  }

}
