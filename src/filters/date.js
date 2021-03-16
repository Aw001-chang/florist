
export default function (num) {
  const date = new Date(num * 1000);
  let dataValues = '';
  if (date.getMonth() <= 8) {
    if (date.getDate() <= 9) {
      dataValues = `${date.getFullYear()}-0${date.getMonth() + 1}-0${date.getDate()}`;
    } else {
      dataValues = `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
    }
  } else if (date.getDate() <= 9) {
    dataValues = `${date.getFullYear()}-${date.getMonth() + 1}-0${date.getDate()}`;
  } else {
    dataValues = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
  return dataValues;
}