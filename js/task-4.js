const getTotalBalanceByGender = (users, gender) => {
const totalBalance = users
.filter(user => user.gender === gender)
.reduce((acc, user) => acc + parseFloat(user.balance), 0);

return totalBalance;
}
