import { transformPost } from "../transformers";

export const getPosts = (page, limit) =>
  fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
    .then((loadedPosts) =>
      Promise.all([loadedPosts.json(), loadedPosts.headers.get("Link")])
    )
    .then(([loadedPosts, links]) => ({
      posts: loadedPosts && loadedPosts.map(transformPost),
      links,
    }));




// import { transformPost } from "../transformers";

// // Функция получения постов с логированием заголовков
// export const getPosts = (page, limit) =>
//   fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
//     .then((response) => {
//       // Логируем все заголовки ответа
//       console.log("Response Headers:", [...response.headers.entries()]);

//       // Пытаемся извлечь заголовок "Link"
//       const links = response.headers.get("Link");
//       console.log("Extracted Links Header:", links); // Логируем, что получили

//       // Возвращаем промис с результатом парсинга тела ответа и заголовком links
//       return Promise.all([response.json(), links]);
//     })
//     .then(([loadedPosts, links]) => ({
//       posts: loadedPosts && loadedPosts.map(transformPost),
//       links, // Здесь мы увидим результат
//     }));




// import { transformPost } from "../transformers";

// export const getPosts = (page, limit) =>
//   fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
//     .then((response) => {
//       console.log("Response Headers:", [...response.headers.entries()]);
//       const links = response.headers.get("Link");
//       console.log("Extracted Links Header:", links);

//       // Возвращаем посты и links (который может быть null)
//       return Promise.all([response.json(), links]);
//     })
//     .then(([loadedPosts, links]) => ({
//       posts: loadedPosts && loadedPosts.map(transformPost),
//       links: links || null, // Если заголовок отсутствует, возвращаем null
//     }));
