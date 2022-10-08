function addInputField()
{
    var data = document.getElementById("input_field_form").value;
    parent = document.getElementById("Heap");
    let form_to_add = document.createElement('input');
    form_to_add.classList.add('input_field');
    form_to_add.placeholder = data;
    let br = document.createElement('br');
    parent.appendChild(form_to_add);
    parent.appendChild(br);
}