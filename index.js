const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
const tree = newImage('assets/tree.png')
const pillar = newImage('assets/pillar.png')
const pineTree = newImage('assets/pine-tree.png')
const well = newImage('assets/well.png')
character.style.zIndex = 6
well.style.zIndex = -1
tree.style.zIndex = 1
pillar.style.zIndex = 5
pineTree.style.zIndex = 3

function handleDirectionChange(direction){
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

move(character).withArrowKeys(100, 250, handleDirectionChange)
move(tree).to(200, 450)
move(pillar).to(350, 250)
move(pineTree).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(well).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)


// Handle User Input
document.addEventListener('keydown', function(e){
    document.addEventListener('keydown', function(e){
        if(e.repeat) return
        
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
    })  
})

document.addEventListener('keyup', function(e){
    direction = null
})