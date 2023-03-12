const statement = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

filterRegex = /^[A-Za-z ]+(?<salary>\d+)[a-z ,]+(?<bonus>\d+)[a-z ,]+(?<passive_income>\d+)/
const stat = statement.match(filterRegex).groups

const annualIncome = stat.salary * 12 + stat.bonus * 1 + stat.passive_income * 12 // 124_000 euro
