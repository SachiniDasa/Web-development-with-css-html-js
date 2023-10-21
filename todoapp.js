const inputlist = document.getElementById('input');
const namelist = document.querySelector('.namelist');
const addtolist = document.querySelector('.addto');
const reset = document.querySelector('#reset')

addtolist.addEventListener('click', function() {
    if (inputlist.value) {
        const listnew = document.createElement('li');
        const licontent = document.createTextNode(inputlist.value);

        listnew.append(licontent)
        namelist.append(listnew)
    } else {
        alert('Please enter a value')
    }
})

reset.addEventListener('click', function() {
    window.location.reload();
})