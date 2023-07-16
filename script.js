$(document).ready(onReady);

function onReady() {
    console.log('in OnReady')

    $('.submit-button').on('click', handleSubmit)
    $('#tableSalaries').on('click', '#salaryRow', deleteRow)
}

let totalAnnualSalaries = 0

function handleSubmit(event) {
    event.preventDefault();
    console.log('in handleSubmit')
    const firstNameInput = $("#firstNameInput").val();
    const lastNameInput = $("#lastNameInput").val();
    const idInput = $("#idInput").val();
    const titleInput = $("#titleInput").val();
    const annualSalaryInput = Number($("#annualSalaryInput").val());

    totalAnnualSalaries += annualSalaryInput

    console.log('SalaryInput', annualSalaryInput)
    $("#tableSalaries").append(`
    <tr id= "salaryRow">
      <td>${firstNameInput}</td>
      <td>${lastNameInput}</td>
      <td>${idInput}</td>
      <td>${titleInput}</td>
      <td>${annualSalaryInput}</td>
      <td><button>❌</button></td>
    </tr> `)

    $('#firstNameInput').val("")
    $('#lastNameInput').val("")
    $('#IDInput').val("")
    $('#titleInput').val("")
    $('#annualSalaryInput').val("")

    let monthlyTotalSalary = Math.round(totalAnnualSalaries/12)

    $('#totalMonthlySalaries').text(`TOTAL MONTHLY SALARY: ${monthlyTotalSalary}`)

    if (monthlyTotalSalary > 20000){
        $('#totalMonthlySalaries').addClass("redBackground")
    }
}

 function deleteRow() {
    console.log('inside deleteRow', $(this))
    $(this).remove()
}