import React from 'react'

export const WordSlider = () => {


    window.addEventListener ('scroll', function (e) {
        let target1 = document.getElementById('scroll-text1')
        let target2 = document.getElementById('scroll-text2')
        let target3 = document.getElementById('scroll-text3')
        let scrolling = window.scrollY * 0.65
    
        target1.style.transform = `translateX(${scrolling+120}px)`
        target2.style.transform = `translateX(${-scrolling+80}px)`
        target3.style.transform = `translateX(${scrolling}px)`
    })



    return (
        <div id="parallax-text-container">  
                <div id="parallax-text">  
                    <div  id="scroll-text1" >  
                        <ul class="lista"><li>detalles</li><li>skills</li><li>pasión</li><li>innovación</li><li>estrategia</li><li>creatividad</li><li>desarrollo</li><li>skills</li></ul>
                    </div>
                    <div  id="scroll-text2"  >
                        <ul class="lista"><li>estrategia</li><li>creatividad</li><li>pasión</li><li>eficiencia</li><li>desarrollo</li><li>creación</li><li>seguridad</li></ul>
                    </div>
                    <div  id="scroll-text3" >
                        <ul class="lista"><li>desarrollo</li><li>seguridad</li><li>detalles</li><li>objetivos</li><li>creatividad</li><li>estrategia</li><li>innovación</li><li>pasión</li></ul>
                    </div>
                </div>
                <div class="container"></div>
            </div>
    )
}
