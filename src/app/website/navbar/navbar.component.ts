import { Component, OnInit } from '@angular/core';
declare var $: any;
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  selected = 'option2';
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
 
      $(document).scroll(function(event) {
      	var scroll=$(this).scrollTop();
      	if($(this).scrollTop()>250){
      		$('header').addClass('fixed');
      	}
      	else{
      		$('header').removeClass('fixed');
      	}
      });
      document.addEventListener("touchstart", function(){}, true);
      
});
    $('.burger, .overlay').click(function(){
      $('.burger').toggleClass('clicked');
      $('.overlay').toggleClass('show');
      $('nav').toggleClass('show');
      $('body').toggleClass('overflow');
    });

    $(document).ready(function(){
      $(".dropdown-toggle").dropdown();
    });



  }
 

 


}
