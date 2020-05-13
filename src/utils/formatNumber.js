// selain membuat custom function sendiri bisa juga menggunakan package, react-number-format
export default number => {
  // Intl api bawaan browser 
  const formatNumbering = new Intl.NumberFormat("id-ID");
  return formatNumbering.format(number);
}
