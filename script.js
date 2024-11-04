const totalUsersVal = document.getElementById('totalUsers');
const totalSalesVal = document.getElementById('totalSales');

const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', () => {
    const totalUsers = totalUsersVal.textContent;
    const totalSales = totalSalesVal.textContent;
    alert(`Total Users: ${totalUsers}, Total Sales: ${totalSales}`);
});
