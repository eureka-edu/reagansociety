function scrollToTop(){verticalOffset="undefined"!=typeof verticalOffset?verticalOffset:0,element=$("body"),offset=element.offset(),offsetTop=offset.top,$("html, body").animate({scrollTop:offsetTop},500,"linear")}$(document).foundation(),$(function(){$(document).on("scroll",function(){$(window).scrollTop()>100?$(".scroll-top-wrapper").addClass("show"):$(".scroll-top-wrapper").removeClass("show")})}),$(function(){$(document).on("scroll",function(){$(window).scrollTop()>100?$(".scroll-top-wrapper").addClass("show"):$(".scroll-top-wrapper").removeClass("show")}),$(".scroll-top-wrapper").on("click",scrollToTop)});