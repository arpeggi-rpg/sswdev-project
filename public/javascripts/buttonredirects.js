let editButtons = document.getElementsByClassName("editButton");    // get edit button for each row

for (let button of editButtons) {
    button.addEventListener("click", () => {
        let parentRow = button.parentNode.parentNode;               // get row button is inside of
        let id = parentRow.children[1].textContent;                 // get id from row
        let url = window.location.href + "update?id=" + id;           // create url to edit booking with that id
        window.location.href = url;                                 // perform the redirect
    });
}