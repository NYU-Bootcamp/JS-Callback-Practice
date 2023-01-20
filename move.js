function move(element) {
    element.style.position = 'fixed'

    function checkZ(y){
        if(y>575){
            element.style.zIndex = -2
        }else if(y>450){
            element.style.zIndex = 0
        }else if(y>350){
            element.style.zIndex = 2
        }else if(y>250){
            element.style.zIndex = 4
        }else{
            element.style.zIndex = 6
        }
    }

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, handleDirectionChange){
        let direction = null;
        let x = left;
        let y = bottom;
    
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){
            if(direction === 'west' && x > 0){
                x-=1
            }
            if(direction === 'north' && window.innerHeight-75 > y){
                y+=1
            }
            if(direction === 'east' && window.innerWidth-50 > x){
                x+=1
            }
            if(direction === 'south' && y >0){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            checkZ(y)
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            if(handleDirectionChange){
                handleDirectionChange(direction)
            }
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            if(handleDirectionChange){
                handleDirectionChange(direction)
            }
        })
    }
    

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}
