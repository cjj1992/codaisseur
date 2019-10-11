function submitComment() {
    const inputField = document.getElementById ('name')
    const name = inputField.value
    console.log(name)
    
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    console.log(msg)

    if (!name || !msg) {
        alert('You forgot to fill in your name or message!')
        console.log (true)
        }
        else {
        const comment = document.createElement('section')
        const h1 = document.createElement('h1')
        const p = document.createElement('p')
    
        h1.innerHTML = `${name} said:`
        p.innerHTML = msg
        comment.classList.add('comment')
        comment.appendChild(h1)
        comment.appendChild(p)
    
        console.log(comment) 
        
        // display the elements on the page
        const commentSection = document.getElementById('comments')
        commentSection.appendChild(comment)    
    }

    function validatePostalCode(){
        var regExp = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) {0,1}[0-9][A-Za-z]{2})$/;
        var postcode = document.getElementById("postcode").value;
    
        if( regExp.test( postcode ) ){
            console.log (true)
        } else {
            console.log (false);
        }
    }
    // reset form values
    inputField.value = null
    textArea.value = null
    
    
}
