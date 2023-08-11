function ipValidator(ipaddress: string) {
  const regex = new RegExp(
    '^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.' +
    '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.' +
    '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.' +
    '(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$'
  );

  return regex.test(ipaddress);
}

export default ipValidator;
