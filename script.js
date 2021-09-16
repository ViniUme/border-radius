function Carregar(){
    var tl_radius = window.document.getElementById('input-left-top').value;
    var bl_radius = window.document.getElementById('input-left-bottom').value;
    var tr_radius = window.document.getElementById('input-right-top').value;
    var br_radius = window.document.getElementById('input-right-bottom').value;
    var sectionBorder = window.document.getElementById('section-border');
    var radius_code = window.document.getElementById('input-right-bottom').innerHTML;
    var tl_code = window.document.getElementById('code-tl_radius').innerHTML;
    var tr_code = window.document.getElementById('code-tr_radius').innerHTML;
    var bl_code = window.document.getElementById('code-bl_radius').innerHTML;
    var br_code = window.document.getElementById('code-br_radius').innerHTML;

    sectionBorder.style.borderTopLeftRadius = tl_radius + 'px';
    sectionBorder.style.borderBottomLeftRadius = bl_radius + 'px';
    sectionBorder.style.borderTopRightRadius = tr_radius + 'px';
    sectionBorder.style.borderBottomRightRadius = br_radius + 'px';

    if(tl_radius != 0){
        window.document.getElementById('code-tl_radius').innerHTML = 'border-top-left-radius: ' + tl_radius + 'px;';
    }
    if(bl_radius != 0){
        window.document.getElementById('code-bl_radius').innerHTML = 'border-bottom-left-radius: ' + bl_radius + 'px;';
    }
    if(tr_radius != 0){
        window.document.getElementById('code-tr_radius').innerHTML = 'border-top-right-radius: ' + tr_radius + 'px;';
    }
    if(br_radius != 0){
        window.document.getElementById('code-br_radius').innerHTML = 'border-bottom-right-radius: ' + br_radius + 'px;';
    }
}