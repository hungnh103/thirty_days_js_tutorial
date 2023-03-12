function is_valid_variable(str) {
  const pattern = /^[A-Za-z_$][A-Za-z0-9_$]+$/

  return pattern.test(str)
}

is_valid_variable('first_name') // true
is_valid_variable('first-name') // false
is_valid_variable('1first_name') // false
is_valid_variable('firstname') // true
is_valid_variable('$24ahihi') // true
is_valid_variable('+24ahihi') // false
