// dropdown menu functionality
const dropDownArrow = document.getElementById('dropdown')
dropDownArrow.addEventListener('click', dropdown)
const relatedWords = document.getElementById('relatedWords')

function dropdown(){
    if(relatedWords.classList.contains('hide')){
       relatedWords.classList.remove('hide')
    }
    else(
        relatedWords.classList.add('hide')
    )

}

function closeDropdown(){
    relatedWords.classList.add('hide')
}

const soundLink = document.getElementById('soundLink');
const phonetics = document.getElementById('phonetics');


soundLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = phonetics.href;
});




function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
  }
  