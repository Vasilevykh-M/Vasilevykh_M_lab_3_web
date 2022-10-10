function addInputField()
{
    var data = document.getElementById("input_field_form").value;
    parent_RU = document.getElementById("Heap_RU");
    parent_EN = document.getElementById("Heap_EN");
    let form_to_add = document.createElement('input');
    form_to_add.classList.add('input_field');
    form_to_add.placeholder = data;
    let br = document.createElement('br');

    
    parent_RU.appendChild(form_to_add);
    parent_RU.appendChild(br);


    let form_to_add_ = document.createElement('input');
    form_to_add_.classList.add('input_field');
    form_to_add_.placeholder = data;
    let br_ = document.createElement('br');

    parent_EN.appendChild(form_to_add_);
    parent_EN.appendChild(br_);
}