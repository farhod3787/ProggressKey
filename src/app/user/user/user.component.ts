import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      $('[data-toggle="offcanvas"]').on("click", function() {
        $('.sidebar-offcanvas').toggleClass('active')
      });
    });
    // $(function() {
 
    //   $(document).on("click", function(e) {
    //     e.preventDefault();
    //     var $item = $(".rad-dropmenu-item");
    //     if ($item.hasClass("active")) {
    //       $item.removeClass("active");
    //     }
    //   });
       
    //   $(".rad-toggle-btn").on('click', function() {
    //     $(".rad-logo-container").toggleClass("rad-nav-min");
    //     $(".rad-sidebar").toggleClass("rad-nav-min");
    //     $(".rad-body-wrapper").toggleClass("rad-nav-min");
 
    //   });
    
    //   $("li.rad-dropdown > a.rad-menu-item").on('click', function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     $(".rad-dropmenu-item").removeClass("active");
    //     $(this).next(".rad-dropmenu-item").toggleClass("active");
    //   });
    
    //   $(".fa-chevron-down").on("click", function() {
    //     var $ele = $(this).parents('.panel-heading');
    //     $ele.siblings('.panel-footer').toggleClass("rad-collapse");
    //     $ele.siblings('.panel-body').toggleClass("rad-collapse", function() {
 
    //     });
    //   });
     
    // }); 

 

    
  }

}
