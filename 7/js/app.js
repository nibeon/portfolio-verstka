$(document).ready(function(){
   $('.burger').click(function(){
        if($('.burger i').hasClass("icono-hamburger")) {
            // если иконка - гамбургер, т.е. меню скрыто

            // меняем иконку сменой касса иконки
            $('.burger i').removeClass("icono-hamburger");
            $('.burger i').addClass("icono-cross");
            // если иконка - нгамбургер, удаляем скрытность меню (показываем меню)
            $('#menu').removeClass("hidden");
            // добавляем флексовость
            $('#menu').addClass("flex");

        } else {
            // иначе иконка - крест, т.е. меню открыто
            
            // меняем иконку сменой касса иконки
            $('.burger i').removeClass("icono-cross");
            $('.burger i').addClass("icono-hamburger");
            // если иконка - нгамбургер, добавляем скрытность меню (скрываем меню)
            $('#menu').addClass("hidden");
            // и удаляем флексовость
            $('#menu').removeClass("flex"); 
        }        
   }); 


   // Dark Mode
   if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    // переключение темы
    $('#mode').click(function(){
        $('html').toggleClass("dark");

        if($('html').hasClass("dark")){
            localStorage.theme = 'dark';
            $('#mode').text("Make Light");
        } else {
            localStorage.theme = 'light';
            $('#mode').text("Make Dark");
        }
    });

});