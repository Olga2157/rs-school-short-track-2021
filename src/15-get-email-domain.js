/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let currStr = '';
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      // задаем строку из остатка после @
      currStr = email.slice(i + 1);
    }
  }
  return currStr;
}
// alternative solution:
function getEmailDomain(email) {
  const emailParts = email.split('@');
  const domain = emailParts[1];
  return domain;
}

module.exports = getEmailDomain;
