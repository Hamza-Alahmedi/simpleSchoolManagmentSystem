// Tab functionality
let panelIndex = 0;
window.addEventListener("load", function () {
  const tabs = document.querySelectorAll(".tab");
  const tabPanels = document.querySelectorAll(".tabPanel");

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs and tab panels
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });
      tabPanels.forEach(function (panel) {
        panel.classList.remove("active");
      });

      // Add active class to the clicked tab and corresponding panel
      this.classList.add("active");
      tabPanels[index].classList.add("active");
      panelIndex = index;
      console.log(index);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabPanels = document.querySelectorAll(".tabPanel");
  const addBtns = document.querySelectorAll(".addbtn");
  const cancelbtns = document.querySelectorAll(".cancelBtn");
  const saveBtns = document.querySelectorAll(".saveBtn");
  const deletebtns = document.querySelectorAll(".deletebtn");

  function showForm(index) {
    const form = tabPanels[index + 1].querySelector(".add-form");
    form.style.display = "block";
  }

  addBtns.forEach((addbtn, index) => {
    addbtn.addEventListener("click", () => {
      showForm(index);
    });
  });

  function hideForm(panelIndex) {
    const form = tabPanels[panelIndex + 1].querySelector(".add-form");
    form.style.display = "none";
  }

  cancelbtns.forEach((cancelButton, index) => {
    cancelButton.addEventListener("click", () => {
      hideForm(index);
    });
  });

  function deleteRow(panelIndex, rowIndex) {
    let table = tabPanels[panelIndex].querySelector(".custom-table");
    if (table) {
      if (rowIndex >= 0 && rowIndex < table.rows.length) {
        table.deleteRow(rowIndex);
      }
    }
  }

  deletebtns.forEach((deletebtn) => {
    deletebtn.addEventListener("click", (e) => {
      let table = e.target.closest("table");
      let rowIndex = e.target.closest("tr").rowIndex;
      if (table) {
        if (rowIndex >= 0 && rowIndex < table.rows.length) {
          table.deleteRow(rowIndex);
        }
      }
    });
  });

  let rowNumbers = [];
  function addNewRow(panelIndex) {
    let table = tabPanels[panelIndex].querySelector(".custom-table");
    let addForm = tabPanels[panelIndex].querySelector(".add-form");
    let firstName = addForm.querySelector("#firstName").value;
    let lastName = addForm.querySelector("#lastName").value;
    let phoneNumber = addForm.querySelector("#phoneNumber").value;
    let address = addForm.querySelector("#address").value;
    if (!rowNumbers[panelIndex]) {
      rowNumbers[panelIndex] = 1;
    }
    switch (panelIndex) {
      case 1:
        let idValue = rowNumbers[panelIndex];
        rowNumbers[panelIndex]++;
        console.log(panelIndex);

        if (table && firstName && lastName && phoneNumber && address) {
          let newRow = table.insertRow(-1);
          let template = `
      <tr>
                <td>${idValue}</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${phoneNumber}</td>
                <td>${address}</td>

                <td>
                  <button class="deletebtn">
                    <i class="fa-regular fa-trash-can"></i>Delete
                  </button>
                </td>
              </tr>`;
          newRow.innerHTML += template;
          let deleteBtn = newRow.querySelector(".deletebtn");
          deleteBtn.addEventListener("click", (e) => {
            let rowIndex = e.target.closest("tr").rowIndex;
            if (table && rowIndex >= 0 && rowIndex < table.rows.length) {
              deleteRow(panelIndex, rowIndex);
            }
          });

          break;
        } else {
          alert("please fill all the fields");
        }
      case 2:
        let inputClass = addForm.querySelector("#class").value;
        let inputMaterial = addForm.querySelector("#material").value;

        console.log(panelIndex);

        if (
          table &&
          firstName &&
          lastName &&
          phoneNumber &&
          address &&
          inputClass &&
          inputMaterial
        ) {
          let newRow = table.insertRow(-1);
          let template = `
      <tr>
                <td>2</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${phoneNumber}</td>
                <td>${address}</td>
                <td>${inputClass}</td>
                <td>${inputMaterial}</td>


                <td>
                  <button class="deletebtn">
                    <i class="fa-regular fa-trash-can"></i>Delete
                  </button>
                </td>
              </tr>`;
          newRow.innerHTML += template;
          let deleteBtn = newRow.querySelector(".deletebtn");
          deleteBtn.addEventListener("click", (e) => {
            let rowIndex = e.target.closest("tr").rowIndex;
            if (table && rowIndex >= 0 && rowIndex < table.rows.length) {
              deleteRow(panelIndex, rowIndex);
            }
          });

          break;
        } else {
          alert("please fill all the fields");
        }
      case 3:
        console.log(panelIndex);
        let inputstuId = addForm.querySelector("#ID").value;
        let inputyear = addForm.querySelector("#year").value;

        if (table && firstName && lastName && phoneNumber && address && year) {
          let newRow = table.insertRow(-1);
          let template = `
      <tr>
                <td>${inputstuId}</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${phoneNumber}</td>
                <td>${address}</td>
                <td>${inputyear}</td>
                <td>
                  <button class="deletebtn">
                    <i class="fa-regular fa-trash-can"></i>Delete
                  </button>
                </td>
              </tr>`;

          newRow.innerHTML += template;
          let deleteBtn = newRow.querySelector(".deletebtn");
          deleteBtn.addEventListener("click", (e) => {
            let rowIndex = e.target.closest("tr").rowIndex;
            if (table && rowIndex >= 0 && rowIndex < table.rows.length) {
              deleteRow(panelIndex, rowIndex);
            }
          });
          break;
        } else {
          alert("please fill all the fields");
        }
      case 4:
        console.log(panelIndex);
        let inputAdminId = addForm.querySelector("#ID").value;
        let inputUserName = addForm.querySelector("#userName").value;

        if (
          table &&
          firstName &&
          lastName &&
          phoneNumber &&
          address &&
          inputUserName
        ) {
          let newRow = table.insertRow(-1);
          let template = `
      <tr>
                <td>${inputAdminId}</td>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${phoneNumber}</td>
                <td>${address}</td>
                <td>${inputUserName}</td>
                <td>
                  <button class="deletebtn">
                    <i class="fa-regular fa-trash-can"></i>Delete
                  </button>
                </td>
              </tr>`;

          newRow.innerHTML += template;
          let deleteBtn = newRow.querySelector(".deletebtn");
          deleteBtn.addEventListener("click", (e) => {
            let rowIndex = e.target.closest("tr").rowIndex;
            if (table && rowIndex >= 0 && rowIndex < table.rows.length) {
              deleteRow(panelIndex, rowIndex);
            }
          });
          break;
        } else {
          alert("please fill all the fields");
        }
    }
  }

  saveBtns.forEach((saveBtn, index) => {
    saveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addNewRow(panelIndex);
      hideForm(index);
      clearInput(panelIndex);
    });
  });

  function clearInput(panelIndex) {
    console.log(panelIndex);
    const addForm = tabPanels[panelIndex].querySelector(".add-form");
    const inputs = addForm.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
  }
});

const loginBtn = document.querySelector(".loginbtn");
loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Replace the following check with your authentication logic
  const correctUsername = "admin";
  const correctPassword = "12345";

  if (username === correctUsername && password === correctPassword) {
    // Redirect to the next page (replace 'next_page.html' with your desired page)
    window.location.href = "dashboard.html";
  } else {
    // Show the error message
    alert("wrong username or password");
  }
});
