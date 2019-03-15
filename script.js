/*document.getElementsByClassName("outside").addEventListener("click"), function(){
    document.getElementById("").innerText = "Click for cake";
};*/

function open_card() {
	document.getElementById('outside').className = 'open-card';
}

function close_card() {
	document.getElementById('outside').className = '';
}