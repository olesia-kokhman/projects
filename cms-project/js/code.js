const rows = []; // an array of hashes
let checkboxes_ids = [];
let edits_ids = [];
const images = [];
let i = 0;
let editId;
let deleteId;
let rows_ids = [];

function openAddStudentForm() {
    document.getElementById("form").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

function addStudent() {

    const row = {}; // hash

    document.getElementById("form").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    let tableRow = document.createElement("tr");
    tableRow.id = "row-" + i;
    rows_ids.push(tableRow.id);

    document.getElementById("table").appendChild(tableRow);

    let checkboxInput = document.createElement("td");
    checkboxInput.class = "table-context";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.class = "checkbox-item";
    checkbox.id = "checkbox-" + i;
    checkboxes_ids.push(checkbox.id);

    checkbox.addEventListener("change", function () {
        const checkboxId = this.id;
        for (let i = 0; i < images.length; i++) {
            if (checkboxId === checkboxes_ids[i]) {
                if (this.checked) {
                    images[i].src = "images/green_circle.png";
                } else {
                    images[i].src = "images/grey_circle.png";
                }
            }
        }
    });

    checkboxInput.appendChild(checkbox);
    tableRow.appendChild(checkboxInput);

    let groupInput = document.createElement("td");
    groupInput.class = "table-context";
    let groupTempValue = document.getElementById("group").value;
    let groupValue = document.createTextNode(groupTempValue);

    row.group = groupInput;

    groupInput.appendChild(groupValue);
    tableRow.appendChild(groupInput);

    let firstLastNameInput = document.createElement("td");
    firstLastNameInput.class = "table-context";
    let firstNameTempValue = document.getElementById("firstName").value;
    let lastNameTempValue = document.getElementById("lastName").value;

    row.firstLastName = firstLastNameInput;

    let firstLastNameValue = document.createTextNode(firstNameTempValue + " " + lastNameTempValue);
    firstLastNameInput.appendChild(firstLastNameValue);
    tableRow.appendChild(firstLastNameInput);

    let genderInput = document.createElement("td");
    genderInput.class = "table-context";
    let genderTempValue = document.getElementById("gender").value;
    let resultValue;
    if (genderTempValue === "Male") {
        resultValue = "M";
    } else if (genderTempValue === "Female") {
        resultValue = "F";
    } else {
        resultValue = "undefined";
    }
    let genderValue = document.createTextNode(resultValue);

    row.gender = genderInput;

    genderInput.appendChild(genderValue);
    tableRow.appendChild(genderInput);

    let birthdayInput = document.createElement("td");
    birthdayInput.class = "table-context";
    let birthdayTempValue = document.getElementById("birthday").value;
    let birthdayValue = document.createTextNode(birthdayTempValue);

    row.birthday = birthdayInput;

    birthdayInput.appendChild(birthdayValue);
    tableRow.appendChild(birthdayInput);

    let statusInput = document.createElement("td")
    statusInput.class = "table-context";
    let statusInputImage = document.createElement("img");

    statusInputImage.src = "images/grey_circle.png";
    statusInputImage.id = "image-" + i;
    images.push(statusInputImage);

    statusInputImage.style = "width:20px; height:20px;";
    statusInput.appendChild(statusInputImage);
    tableRow.appendChild(statusInput);

    let editDeleteInput = document.createElement("td");
    editDeleteInput.class = "table-context";
    let editInputButton = document.createElement("button");
    let editImage = document.createElement("img");
    editImage.src = "images/pen.png"
    editImage.style = "width:20px; height:20px;";

    editInputButton.id = "edit-" + i;
    edits_ids.push(editInputButton.id);

    editInputButton.addEventListener("click", function () {
        document.getElementById("formEdit").style.display = "block";
        document.getElementById("overlay").style.display = "block";

        editId = this.id;
    });

    editInputButton.appendChild(editImage);
    editDeleteInput.appendChild(editInputButton);

    let deleteInputButton = document.createElement("button");
    let deleteImage = document.createElement("img");
    deleteImage.src = "images/delete_2.jpg";
    deleteImage.style = "width:20px; height:20px;";

    deleteInputButton.id = "delete-" + i;


    deleteInputButton.addEventListener("click", function () {
        document.getElementById("deleteWarning").style.display = "block";
        document.getElementById("overlay").style.display = "block";

        deleteId = this.id;
    })

    deleteInputButton.appendChild(deleteImage);
    editDeleteInput.appendChild(deleteInputButton);
    tableRow.appendChild(editDeleteInput);

    i++;
    rows.push(row);
}

function editStudent() {
    document.getElementById("formEdit").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    for (let i = 0; i < edits_ids.length; i++) {
        if (editId === edits_ids[i]) {
            rows[i].group.innerHTML = document.getElementById("groupEdit").value;
            rows[i].firstLastName.innerHTML = document.getElementById("firstNameEdit").value + " "
                + document.getElementById("lastNameEdit").value;
            rows[i].gender.innerHTML = document.getElementById("genderEdit").value;
            rows[i].birthday.innerHTML = document.getElementById("birthdayEdit").value;

        }
    }
}

function deleteStudent() {
    document.getElementById("deleteWarning").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    let table = document.getElementById("table");

    const deleteIdNum = parseInt(deleteId.match(/\d+/)[0]);

    for (let i = 0; i < rows_ids.length; i++) {
        let rowsNum = parseInt(rows_ids[i].match(/\d+/)[0]);

        if (rowsNum === deleteIdNum) {
            let row = document.getElementById(rows_ids[i]).rowIndex;
            table.deleteRow(row);
        }
    }
}

function cancelAdding() {
    document.getElementById("form").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function cancelEditing() {
    document.getElementById("formEdit").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function cancelDeleting() {
    document.getElementById("deleteWarning").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}