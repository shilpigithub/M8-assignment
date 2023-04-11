let storage;

let empList = [];
let form = document.querySelector('#addForm');
let empTable = document.querySelector('#empTable');
let tableBody = document.querySelector('#empTable tbody');
// CREATE AN ARRAY OF EMPLOYEES
let employees = [
            [12341234, 'Tim', 5489, 'tim@yahoo.com', 'Sales'],
            [22222222, 'Osho', 2222, 'osho@yahoo.com', 'Administrative'],
            [33333333, 'Harry', 3333, 'harry@yahoo.com', 'Engineering'],
            [44444444, 'Michael', 4444, 'michael@yahoo.com', 'Executive'],
            [55555555, 'Jerry', 5555, 'jerry@yahoo.com', 'Marketing']

];


// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

window.addEventListener('load', () => {
   // $('id').focus();

    if(!localStorage.getItem('empList')){
        empList = employees;
        console.log(empList);
       
    }
    else{
        //alert('ENTERED ELSE');
        empList = JSON.parse(localStorage.getItem('empList'));
        
    }
    buildGrid(empList);
   
});

// GET DOM ELEMENTS
const $ = (id) => {
    return document.getElementById(id);
};

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empId= $('id').value;
    let name = $('name').value;   
    let extension = $('extension').value;
    let email = $('email').value;
    let dept = $('department').value ;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmpAdd = [empId,name,extension,email,dept];


    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    empList.push(newEmpAdd);
    // BUILD THE GRID
    buildGrid(empList);
    // RESET THE FORM
    document.querySelector('#addForm').reset();
    
    $('id').value = "";
    $('name').value = "";
    $('extension').value = "";
    $('email').value = "";
    $('department').value = "";

    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {

    if (e.target.parentElement.rowIndex != 0) {
        let empId = e.target.parentElement.cells[0].innerText;
        let empName = e.target.parentElement.cells[1].innerText;
        if (confirm(`Do you want to delete employee \n ID: ${empId} Name: ${empName}`)) {
          let rowIndex = e.target.parentNode.rowIndex;
            empTable.deleteRow(e.target.parentNode.rowIndex);
          empList.splice(rowIndex -1 ,1)
         // $("empCount").value =  $("empCount").value -1;
          
        }
      }
       // BUILD THE GRID
       buildGrid(empList);
     
    
});

// BUILD THE EMPLOYEES GRID
function buildGrid(employees) {
    let count = 0;
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    document.querySelector('#empTable tbody').remove();
    
    // REBUILD THE TBODY FROM SCRATCH
    let tblBodyRebuild = document.createElement('tbody');
    let row ="";
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    
    for( i of employees){
        ++count;
        row += "<tr>";
        
        for (j of i){
             row += "<td>" + j +"</td>";
             
        }
        row += '<td class="btn btn-danger btn-sm float-right"  style="color:black;">' + "X" + '</td>'
        row += "</tr>"       
        
    }
    
    tblBodyRebuild.innerHTML = row;
    console.log(tblBodyRebuild);

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tblBodyRebuild);

    // UPDATE EMPLOYEE COUNT
    document.querySelector('#empCount').value = count;

    // STORE THE ARRAY IN STORAGE


    localStorage.setItem('empList', JSON.stringify(employees));    
    //let newArray = JSON.parse(localStorage.getItem('empStrArr'));
};