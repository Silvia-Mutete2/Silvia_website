$(document).ready(function(){
//For the navbar to appear on scroll

    $(window).scroll(function(){
        if(this.scrollY >200){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
        //Scrolling Button Btn
        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show")
        }else{
            $('.scroll-up-btn').removeClass("show")
        }
    })

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })

    // typing effect
    var typed = new Typed(".typing-1",{
        strings:[
            "Fronted Developer", "Backend Developer", "Web Developer", "Freelancer"
        ],
        typeSpeed:80,
        backSpeed:60,
        loop:true

    })

    var typed = new Typed(".typing-2",{
        strings:[
            "Fronted Developer", "Backend Developer", "Web Developer", "Freelancer"
        ],
        typeSpeed:80,
        backSpeed:60,
        loop:true

    })



})