function newImage(url){
    let image = document.createElement('img')
    image.style.position = "fixed"
    image.src = url
    document.body.append(image)
    return image
}