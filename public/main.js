document.querySelector('#checkboxes').addEventListener('change', function(evt){
  let checkboxesDiv = document.querySelector('div#checkboxes');
  let checked = checkboxesDiv.querySelectorAll('input:checked');

  if(checked.length > 2){
    evt.target.checked = false;
  }
  checked = checkboxesDiv.querySelectorAll('input:checked');

  console.log(checked);
})
