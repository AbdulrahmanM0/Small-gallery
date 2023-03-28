gitSrc = (e) => {
    console.log()
    if(e.target.tagName == "IMG"){
    document.images[5].src = e.target.src; 
}}