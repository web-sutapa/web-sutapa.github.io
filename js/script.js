

    // <!-- numscroller section JavaScript start-->
 
        $(document).ready(function () {
            var a = 0;
            $(window).scroll(function() {
            
              var oTop = $('#counter').offset().top - window.innerHeight;
              if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                  var $this = $(this),
                    countTo = $this.attr('data-count');
                  $({
                    countNum: $this.text()
                  }).animate({
                      countNum: countTo
                    },
            
                    {
            
                      duration: 2000,
                      easing: 'swing',
                      step: function() {
                        $this.text(Math.floor(this.countNum));
                      },
                      complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                      }
            
                    });
                });
                a = 1;
              }
            
            });
        });
  
    // <!-- numscroller section JavaScript end-->

    
//numscroller section background animation js start

$(document).ready(function () {

  // geting canvas by id c
  var c = document.getElementById("c");
  var ctx = c.getContext("2d");
  
  //making the canvas full screen
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  
  //chinese characters - taken from the unicode charset
  var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
  //converting the string into an array of single characters
  matrix = matrix.split("");
  
  var font_size = 10;
  var columns = c.width/font_size; //number of columns for the rain
  //an array of drops - one per column
  var drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for(var x = 0; x < columns; x++)
      drops[x] = 1; 
  
  //drawing the characters
  function draw()
  {
      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
      ctx.fillRect(0, 0, c.width, c.height);
  
      ctx.fillStyle = "#ec0e0e"; //green text
      ctx.font = font_size + "px arial";
      //looping over drops
      for(var i = 0; i < drops.length; i++)
      {
          //a random chinese character to print
          var text = matrix[Math.floor(Math.random()*matrix.length)];
          //x = i*font_size, y = value of drops[i]*font_size
          ctx.fillText(text, i*font_size, drops[i]*font_size);
  
          //sending the drop back to the top randomly after it has crossed the screen
          //adding a randomness to the reset to make the drops scattered on the Y axis
          if(drops[i]*font_size > c.height && Math.random() > 0.975)
              drops[i] = 0;
  
          //incrementing Y coordinate
          drops[i]++;
      }
  }
  setInterval(draw, 5);
  });
  
   //numscroller section background animation js start


    // <!-- header javascript start -->
 
        /* Please ❤ this if you like it! */

        $(document).ready(function () {
            (function ($) {
                "use strict";

                $(function () {
                    var header = $(".start-style");
                    $(window).scroll(function () {
                        var scroll = $(window).scrollTop();

                        if (scroll >= 10) {
                            header.removeClass('start-style').addClass("scroll-on");
                            $(".navigation-wrap").css("background-color", "#0f0f0f");
                        }else {
                            header.removeClass("scroll-on").addClass('start-style');
                            $(".navigation-wrap").css("background-color", "transparent");
                        }
                      
                    });
                });
                

               
               
                //Animation

                // $(document).ready(function () {
                //     $('body.hero-anime').removeClass('hero-anime');
                // });

                //Menu On Hover

                $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
                    if ($(window).width() > 750) {
                        var _d = $(e.target).closest('.nav-item'); _d.addClass('show');
                        setTimeout(function () {
                            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                        }, 1);
                    }
                });

                //Switch light/dark

                $("#switch").on('click', function () {
                    if ($("body").hasClass("dark")) {
                        $("body").removeClass("dark");
                        $("#switch").removeClass("switched");
                    }
                    else {
                        $("body").addClass("dark");
                        $("#switch").addClass("switched");
                    }
                });

            })(jQuery);
        });

    // <!-- header javascript end -->

    // <!--Skill section javascript start-->


        $(document).ready(function () {
            function hex_initial_animation() {
                $(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
                $(".hex-wrap").velocity("callout.pulse");
                $(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
            }
            hex_initial_animation();

            var hoverdetect = setInterval(function () { hovernotify() }, 3000);
            function hovernotify() {
                $(".hover-notify").velocity("callout.tada");
            }
            function myStopFunction() {
                $(".hover-notify").velocity('stop', true).velocity("fadeOut");
                clearInterval(hoverdetect);
            }

            $(".hex-init").mouseenter(function () {

                myStopFunction();

                var title_color = $(this).parent().attr("data-color");
                var title_name = $(this).parent().attr("data-title");
                var desc_name = $(this).parent().attr("data-content");

                function hex_description() {
                    $('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
                    $('.' + desc_name).siblings().removeClass('desc-active');
                    setTimeout(function () {
                        $('.' + desc_name).addClass('desc-active');
                        $('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
                        $('.code-title, .desc-active span').velocity({ color: title_color }, { queue: false });
                        $('.code-title').text(title_name)
                    }, 0);
                }
                hex_description();

                $(this).parent().addClass('hexactive');
                $('.hexactive').velocity({ scaleX: "1.1", scaleY: "1.1" }, { duration: 200 });

            }).mouseleave(function () {
                $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
            });
        });
  

    // <!--Skill section javascript End-->

    // <!--heading lighting effects javascript start -->


        $(document).ready(function () {
            var i = 0;
            var go_forward;

            bg_gradient_animation();

            function bg_gradient_animation() {
                if (i <= 0)
                    go_forward = true;
                if (i >= 100)
                    go_forward = false;

                if (go_forward)
                    i += 0.5;
                else
                    i -= 0.3;

                h1.style['background-image'] = `linear-gradient(to right,  #2b2b2b ${i - 10}%,#fff ${i}%,#2b2b2b ${i + 10}%`;
                h2.style['background-image'] = `linear-gradient(to right,  #2b2b2b ${i - 10}%,#fff ${i}%,#2b2b2b ${i + 10}%`;
                h3.style['background-image'] = `linear-gradient(to right,  #2b2b2b ${i - 10}%,#fff ${i}%,#2b2b2b ${i + 10}%`;
                h4.style['background-image'] = `linear-gradient(to right,  #2b2b2b ${i - 10}%,#fff ${i}%,#2b2b2b ${i + 10}%`;

                requestAnimationFrame(bg_gradient_animation);
            }
        });
   
    // <!--heading lighting effects javascript end -->



//banner type js start

$(document).ready(function () {
    window.addEventListener('load',function(){
        initSlider(
          'slider', //id
          [' Specialized in ' , ' HTML Developer ', ' Web Designer'], 
          100, //duration
          1000 //delay
        );
      });
      
      //just copy and paste below
      var createText = function(text,id,duration){
        document.getElementById(id).innerHTML = '';
        for(let i = 0; i < text.length; i++){
          setTimeout(()=>{
            let newText = text.substr(0,(i+1));
            document.getElementById(id).innerHTML = newText;
          },duration*i);
        }
      }
      var clearText = function(id,duration){
        let text = document.getElementById(id).innerHTML;
        for(let i = text.length; i > 0; i--){
          setTimeout(()=>{
            let newText = text.substr(0,text.length-i);
            document.getElementById(id).innerHTML = newText;
          },duration*i);
        }
      }
      var initSlider = function(id,texts,duration,delay){
        let durs = [];
        for(let i = 0; i < texts.length-1; i++){
          let beforeDur;
          if(i==0){
            beforeDur = 0;
          }
          else{
            beforeDur=durs[i-1];
          }
          durs.push((texts[i].length*duration*2) + (2*delay) + beforeDur);
        }
        
        let allTime = 0;
        for (let i = 0; i < texts.length; i++){
          allTime += (texts[i].length*duration*2) + (2*delay);
        }
        let mainSlider = function(){
          for(let i = 0; i < texts.length; i++){
            setTimeout(()=>{
              createText(texts[i],id,duration);
              setTimeout(()=>{
                clearText(id,duration);
              },texts[i].length*duration + delay);
            },i === 0 ? 0 : durs[i-1]);
          }
        }
        mainSlider();
        setInterval(()=>{
          mainSlider();
        },allTime);  
      }
      
});


//banner type js end


//resume section background animation js start

$(document).ready(function(){
  $('.background').Geometryangle({
  
  // handle transparent colors
  mesh:{
  
    width: 1.2,
    height: 1.2,
  
    // How far should the mesh vary into z-space.
    depth: 10,
  
    // Number of columns for the mesh.
    columns: 12,
  
    columns_auto: false,
  
    // Number of rows for the mesh.
    rows: 7,
  
    rows_auto: true,
    zoom: 1,
    xRange: 0.8,
    yRange: 0.1,
    zRange: 3.0,
    ambient:  'rgba(0, 0, 0, 1)',
    diffuse: 'rgba(36, 0, 0, 1)',
    background:'rgba(250, 0, 0, 1)',
    speed: 0.0002,
    fluctuationSpeed: .2,
    fluctuationIntensity: 0,
    onRender: function () {
    },
    floorPosition: false,
    draw: true
  
  }, 
  
  
  lights: {
  
    // How many light sources belong to this light.
    count: 1,
  
    xyScalar: 1,
  
    // Position of light source.
    zOffset: 100,
  
    ambient: 'rgba(97,0,94, 1)',
    diffuse: 'rgba(97,18,94, 1)',
    speed: 0.001,
    gravity: 100,
  
    // Dampening of light's movements.
    dampening: 0.95,
  
    minLimit: 10,
    maxLimit: null,
    minDistance: 20,
    maxDistance: 400,
    autopilot: false,
    draw: false, //show circle
    bounds: FSS.Vector3.create(),
    step: FSS.Vector3.create(
      Math.randomInRange(0.2, 1.0),
      Math.randomInRange(0.2, 1.0),
      Math.randomInRange(0.2, 1.0)
    )
  
  },
  
  // specify the thickness, color, stroke, etc. 
  line: {
  
    fill: "rgba(0, 0, 0, 0)",
    thickness: 1,
    fluctuationIntensity: 0,
    fluctuationSpeed: 0.5,
    draw: false
  
  }, 
  
  // Set the point attributes for the vertex. 
  vertex: {
  
    // Radius of vertice circle.
    radius: 0,
  
    fill: "rgba(0, 0, 0, 0)",
  
    // Fluctuates opacity of vertex.
    fluctuationSpeed: 0.5,
  
    fluctuationIntensity: 0,
    strokeWidth: 0,
    strokeColor: "rgba(0, 0, 0, 0)",
  
    // Instead of setting alpha channel to zero
    // Set draw to false to avoid computing.
    draw: false
  
  }
  
  });
  });
  //resume section background animation js end


// Click menu scroll page start


// ===== Scroll to Top ==== 


$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});
// Click menu scroll page end




 