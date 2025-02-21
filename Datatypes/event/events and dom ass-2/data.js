function onfocus(){
    alert('test')
    document.getElementByID('abc').style.background="yellow"
}
function changecolor(){
    let name=document.getElementByID('xyz').value;
    document.getElementById('xyz').value=name.toUppercase()
}