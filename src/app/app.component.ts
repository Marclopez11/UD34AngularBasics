import { Component } from '@angular/core';


// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  calculadora = "Calculadora";


   insrt(num : Number|String){
    $('.calc-display').val($('.calc-display').val()+num);
  }


  eql(){
      $('.calc-display-result').val(eval($('.calc-display').val()));

  }

  c(){
      $('.calc-display').val('');
  }

}
