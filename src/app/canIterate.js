export default function canIterate(object) {
  // Вот этот вариант не работает для пустой строки,
  // хотя у неё есть [Symbol.iterator].
  // Почему - понятно, объяснять не требуется.
  // return !!(object && object[Symbol.iterator]);

  // А вот это прекрасно работает, поскольку при
  // попытке обратиться к свойству [Symbol.iterator]
  // сущностей у которых оно отсутствует,
  // выбрасывает ошибку
  try {
    return !!object[Symbol.iterator];
  } catch {
    return false;
  }
}
