function newItem() {
    let li = $('<li></li>');
    let inputValue =$('#input').val();
    li.append(inputValue);

    if (inputValue ==='') {
        alert("You must put something in the note!");
    } else {
        $('#list').append(li);
    }


function strikeOut() {
    li.toggleClass("strike");
}
li.on("dblclick", function strikeOut() {
    li.toggleClass("strike");
});

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem(){
    li.addClass("delete")
}

$('#list').sortable();
}