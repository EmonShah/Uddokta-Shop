// category img section js start
$(".catImg1").mouseenter(function(){
    $(this).find('span a').css("background-color","#ffffff");
    $(this).find('span a').css("color","#29407f");
   
      
    });
    $(".catImg1").mouseleave(function(){
        $(this).find('span a').css("background-color", "rgba(255,255,255,.2)");
        $(this).find('spna a').css("color", "#fff");
      });

    
   

      $('.catImg1').on("mouseenter",function(){
        $(this).find('span').css({"background-image":"linear-gradient(transparent, 29407f)","padding-top":"20px"});
        $(this).siblings().css("background-blend-mode", "multiply");
        
         
      })

      $('.catImg1').on("mouseleave",function(){
        $(this).find('span').css("background-image", "linear-gradient(transparent, #29407f)");
        $(this).siblings().css("background-blend-mode", "normal");
      })

     // header menu category mobail dropdown start

      $('.menuToggle').on('click',function(){
         $('#overlay').hide() 
         $('#overlay').toggle() 
         $('.menuDropDown').toggle().parent().parent().children('.headerCategory').children('.headerCat-drop-menu').hide()

      })

      $('.headerCat-iocn span, .headerCat-iocn svg').on('click',function(){
        $('#overlay').hide() 
        $('#overlay').toggle() 
        $('.headerCat-drop-menu').toggle().parent().parent().children('.headerRightBar').children('.menuDropDown').hide()
      })



      $('#overlay').on('click',function(){
        $(this).hide()
        $('.menuDropDown').hide()
        $('.headerCat-drop-menu').hide()
      })
 
    $(window).scroll(function(){
      $('#overlay').hide()
      $('.menuDropDown').hide()
      $('.headerCat-drop-menu').hide()
    })

    // desktop dorpdown sub menu toggle
    $('.drop-menu-link').on('click',function(){
     
      $('.drop-menu-slit2').toggle(function(){
        $('.subMenu-toggle').css('transform',' rotate(0deg)')
      })
      $('.subMenu-toggle').css('transform',' rotate(90deg)')

    })
         // header menu category mobail dropdown end
    
      //category  menu toggle
    
     $('.category-menu span svg').on('click',function(){
        $('.cat-dorp-menu').toggle()
       //$('.category-menu-toggle').css({'background-color':'transparent' })
        
       
     })

    $('.cat-menu').on('click',function(){
      $('.category-menu-wrap').toggle().siblings('.dropdown-menu-wrap').hide()
      $(this).css({'background-color':'#0071de','color':'white'}).siblings('.drop-menu').css({'background-color':'#ece6e6','color':'black'})
      $('.cat-dorp-menu').show()
      $('.category-menu-toggle').css('background-color','#FFF')

    })
    $('.drop-menu').on('click',function(){
      $('.dropdown-menu-wrap').toggle().siblings('.category-menu-wrap').hide()
      $(this).css({'background-color':'#0071de','color':'white'}).siblings('.cat-menu').css({'background-color':'#ece6e6','color':'black'})
      $('.cat-dorp-menu').show()
      $('.category-menu-toggle').css('background-color','#FFF')
    })
 

    //mobail search button section start
    $('.headerSerarch-mob svg').on('click',function(){
      $('.suggestions-search').toggle()
    })

    $('.mobail-search-form span').on('click',function(){
      $('.suggestions-search').toggle()
    })

    //mobail search button section end
    
