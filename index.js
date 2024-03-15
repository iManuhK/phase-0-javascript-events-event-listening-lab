function addingEventListener(a,b) {
    function clickAlert() {
        alert('I was clicked!');
    }
const input = document.getElementById('button');

input.addEventListener('click', clickAlert);
}
addingEventListener('click', clickAlert);