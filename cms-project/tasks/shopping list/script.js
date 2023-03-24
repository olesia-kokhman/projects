function openInput() {
    document.getElementById("inp").style.display = "block";
    document.getElementById("addButton").style.display = "block";
    document.getElementById("labelForInput").style.display = "block";
    document.getElementById("deleteButton").style.display = "block";
}

function addNewElement() {
    let listValue = document.createElement("li");
    document.getElementById("mainList").appendChild(listValue);

    let inpValue = document.createElement("input");
    inpValue.type = "checkbox";
    inpValue.className = "custom-checkbox";
    listValue.appendChild(inpValue);

    let linkValue = document.createElement("a");
    let valueOfLink = document.getElementById("inp").value;
    let contextOfLink = document.createTextNode(valueOfLink);
    linkValue.appendChild(contextOfLink);

    let string = "https://www.mohito.com/mo/en/all/";
    linkValue.href = string + valueOfLink;
    linkValue.className = "links";

    listValue.appendChild(linkValue);

}

function deleteAll() {
    let checkboxes = document.getElementsByClassName("custom-checkbox");
    for(let i = 0; i< checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            checkboxes[i].checked = false;
        }
    }
}