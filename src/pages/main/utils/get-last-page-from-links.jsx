export const getLastPageFromLinks = (links) => {
   const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);
   
   return Number(result[1]);
};

// export const getLastPageFromLinks = (links) => {
//   // Проверяем, что links не null
//   if (!links) {
//     console.error("Error: links is null or undefined.");
//     return null; // Возвращаем null или другое значение по умолчанию
//   }

//   const result = links.match(/_page=(\d{1,4})&_limit=\d{1,3}>; rel="last"/);

//   // Проверка на наличие результата
//   if (result) {
//     return Number(result[1]);
//   } else {
//     console.error("Error: Unable to extract last page from links.");
//     return null;
//   }
// };
