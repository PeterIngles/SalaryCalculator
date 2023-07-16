$(document).ready(onReady);

function onReady() {
    console.log('in OnReady')

    $('.submit-button').on('click', handleSubmit)
    $('#tableSalaries').on('click', '#salaryRow', deleteRow)
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('in handleSubmit')
    const firstNameInput = $("#firstNameInput").val();
    const LastNameInput = $("#LastNameInput").val();
    const idInput = $("#idInput").val();
    const titleInput = $("#titleInput").val();
    const annualSalaryInput = $("#annualSalaryInput").val();
  
    console.log('SalaryInput', annualSalaryInput)
    $("#tableSalaries").append(`
    <tr id= "salaryRow">
      <td>${firstNameInput}</td>
      <td>${LastNameInput}</td>
      <td>${idInput}</td>
      <td>${titleInput}</td>
      <td>${annualSalaryInput}</td>
      <td><button>❌</button</td>
    </tr> `)
  }

  function deleteRow(){
    console.log('inside deleteRow', $(this))
    $(this).remove()
  }