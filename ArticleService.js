const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

function getArticleList() {
  fetch(`${BASE_URL}?page=1&pageSize=10&keyword=test`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function getArticle(articleId) {
  fetch(`${BASE_URL}/${articleId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

function createArticle(title, content, image) {
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
      image: image,
    }),
  });
}
