var section_border = document.getElementById('section-border')

function Input(id_border){
    let border = document.getElementById(id_border)
    let value = border.value
    let code = document.getElementById('code-' + id_border)

    if(id_border == 'input-top-left'){
        section_border.style.borderTopLeftRadius = `${value}px`
        code.innerHTML = `border-top-left-radius: ${value}px`
    }
    else if(id_border == 'input-bottom-left'){
        section_border.style.borderBottomLeftRadius = `${value}px`
        code.innerHTML = `border-bottom-left-radius: ${value}px`
    }
    else if(id_border == 'input-top-right'){
        section_border.style.borderTopRighttRadius = `${value}px`
        code.innerHTML = `border-top-right-radius: ${value}px`
    }
    else{
        section_border.style.borderBottomRighttRadius = `${value}px`
        code.innerHTML = `border-bottom-right-radius: ${value}px`
    }
}