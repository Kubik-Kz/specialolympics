   TweenMax.from(".header-1", 2, {
            delay: 1.2,
            y: -50,
            opacity: 0,
            ease: Expo.easeInOut
      })

 TweenMax.staggerFrom(".header-contact_social a", 2, {
            delay: 1.8,
            opacity: 0,
            y: -20,
            ease: Expo.easeInOut
      }, 0.1);

   TweenMax.from(".header-contact_language", 2, {
            delay: 1.8,
            y: -20,
            opacity: 0,
            ease: Expo.easeInOut
      }) 

   TweenMax.staggerFrom(".header-menu__item", 2, {
            delay: 1.4,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
      }, 0.1);  
          
           TweenMax.from(".header-content_logo", 2, {
            delay: 1.4,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }) 
        

    TweenMax.from(".header-content_mainText h1", 2, {
            delay: 1.6,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })
        TweenMax.from(".header-content_mainText p", 2, {
            delay: 1.8,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })  
        TweenMax.from(".last-news-block", 2, {
            delay: 1.8,
            x: 120,
            opacity: 0,
            ease: Expo.easeInOut
      })      
        TweenMax.from(".last-news-block_text p", 2, {
            delay: 1.9,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })      
             
        TweenMax.from(".read-more", 2, {
            delay: 2,
            y: 20,
            opacity: 1,
            ease: Expo.easeInOut
      })      
        
        
     
        TweenMax.from(".hamburger", 2, {
            delay: 2,
            
            opacity: 0,
            ease: Expo.easeInOut
      })      
        
        



   TweenMax.to(".overlay-body", 2, {
         delay: 0.5,
         top: "-150vh" ,
         ease: Expo.easeInOut
    })
  
  



const Line =  new TimelineLite();
const Line2 = new TimelineLite();
const Line3 = new TimelineLite();
const Line4 = new TimelineLite();
const Line5 = new TimelineLite();
const Line6 = new TimelineLite();
const Line7 = new TimelineLite();
const Line8 = new TimelineLite();
const Line9 = new TimelineLite();
const Line10 = new TimelineLite();
const Line11 = new TimelineLite();
const Line12 = new TimelineLite();
const Line13 = new TimelineLite();
const Line14 = new TimelineLite();
const Line15 = new TimelineLite();
const Line16 = new TimelineLite();
const Line17 = new TimelineLite();
const Line18 = new TimelineLite();
const Line19 = new TimelineLite();
const controller = new ScrollMagic.Controller();


///quoteLine
Line.add(

      TweenLite.from(".quote-icon", 2, {
          delay: .4,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })
    
      
);
const scene1 = new ScrollMagic.Scene({
    triggerElement: ".quote"
})
    .setTween(Line)
    .addTo(controller);



///quoteLine2

Line2.add(

    
      TweenLite.from(".quote-text", 2, {
            delay: .5,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })

      
);
const scene2 = new ScrollMagic.Scene({
    triggerElement: ".quote"
})
    .setTween(Line2)
    .addTo(controller);



//quoteLine3 //

Line3.add(

    
      TweenLite.from(".quote-bottom-text", 2, {
            delay: .6,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene3 = new ScrollMagic.Scene({
    triggerElement: ".quote"
})
    .setTween(Line3)
    .addTo(controller);



//quoteLine4 //
Line4.add(

    
      TweenLite.from(".about-us-block_story", 2, {
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      })
    
      
);
const scene4 = new ScrollMagic.Scene({
    triggerElement: ".about-us-block_story"
})
    .setTween(Line4)
    .addTo(controller);



//quoteLine5 //
Line5.add(

    
      TweenLite.from(".about-us-block_text", 2, {
           delay: .2,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene5 = new ScrollMagic.Scene({
    triggerElement: ".about-us-block_text"
})
    .setTween(Line5)
    .addTo(controller);



//quoteLine6 //
Line6.add(

    
      TweenMax.staggerFrom(".left-text--aboutus p", 2, {
           delay: .2,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1) 
    
      
);
const scene6 = new ScrollMagic.Scene({
    triggerElement: ".about-us-block_text"
})
    .setTween(Line6)
    .addTo(controller);


//quoteLine7 //
Line7.add(

    
      TweenMax.staggerFrom(".text-aboutus--gsap p", 2, {
           
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1) 
    
      
);
const scene7 = new ScrollMagic.Scene({
    triggerElement: ".about-us-block_item2"
})
    .setTween(Line7)
    .addTo(controller);



//quoteLine8 //
Line8.add(

    
      TweenMax.staggerFrom(".img--gsap", 2, {
            x: -30,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1) 
    
      
);
const scene8 = new ScrollMagic.Scene({
    triggerElement: ".about-us-block_text"
})
    .setTween(Line8)
    .addTo(controller);



//quoteLine7 //
Line9.add(

    
      TweenMax.staggerFrom(".img--gsap1", 2, {
            x: 30,
            y: 20,
            opacity: 0,
            ease: Expo.easeInOut
      }, 0.1) 
    
      
);
const scene9 = new ScrollMagic.Scene({
    triggerElement: ".about-us-block_item2"
})
    .setTween(Line9)
    .addTo(controller);

//quoteLine10 //

Line10.add(

    
      TweenLite.from(".quote", 2, {
            delay: .1,
            height: 0,
            opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene10 = new ScrollMagic.Scene({
    triggerElement: ".quote"
})
    .setTween(Line10)
    .addTo(controller);


//quoteLine11 //

Line11.add(

    
      TweenLite.from(".advantages", 2, {
            y: 50,
      
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene11 = new ScrollMagic.Scene({
    triggerElement: ".advantages"
})
    .setTween(Line11)
    .addTo(controller);



//quoteLine12 //

Line12.add(

    
      TweenLite.from(".advantages-text", 2, {
            delay: .2,
            y: 50,
      
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene12 = new ScrollMagic.Scene({
    triggerElement: ".advantages-wrap"
})
    .setTween(Line12)
    .addTo(controller);



//quoteLine13 //

Line13.add(

    
      TweenLite.from(".circle-path1", 2, {
            delay: .2,
            y: -50,
             
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene13 = new ScrollMagic.Scene({
    triggerElement: ".advantages-main-wrap"
})
    .setTween(Line13)
    .addTo(controller);





//quoteLine14 //

Line14.add(

    
      TweenLite.from(".circle-path2", 2, {
            delay: .6,
            y: 50,
          
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene14 = new ScrollMagic.Scene({
    triggerElement: ".advantages-main-wrap"
})
    .setTween(Line14)
    .addTo(controller);



//quoteLine15 //

Line15.add(

    
      TweenLite.from(".circle-path3", 2, {
            delay: .8,
            y: 50,
            
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene15 = new ScrollMagic.Scene({
    triggerElement: ".advantages-main-wrap"
})
    .setTween(Line15)
    .addTo(controller);



//quoteLine16 //

Line16.add(

    
      TweenLite.from(".partners-block", 2, {
            delay: .4,
            y: 50,
           
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene16 = new ScrollMagic.Scene({
    triggerElement: ".advantages-main-wrap"
})
    .setTween(Line16)
    .addTo(controller);



//quoteLine17 //

Line17.add(

    
      TweenLite.from(".sponsor-block1-item1", 2, {
            delay: .1,
            y: 50,
           
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene17 = new ScrollMagic.Scene({
    triggerElement: ".sponsor-block1-wrap"
})
    .setTween(Line17)
    .addTo(controller);



//quoteLine18 //

Line18.add(

    
      TweenLite.from(".sponsor-block1-item2", 2, {
            delay: .1,
            y: -50,
           
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene18 = new ScrollMagic.Scene({
    triggerElement: ".sponsor-block1-wrap"
})
    .setTween(Line18)
    .addTo(controller);



//quoteLine18 //

Line19.add(

    
      TweenLite.from(".footer", 2, {
            delay: .1,
            y: -50,
           
           opacity: 0,
            ease: Expo.easeInOut
      }) 
    
      
);
const scene19 = new ScrollMagic.Scene({
    triggerElement: ".sponsor-block1"
})
    .setTween(Line19)
    .addTo(controller);






