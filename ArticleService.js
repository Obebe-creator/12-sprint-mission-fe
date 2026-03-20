const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

function getArticleList() {
  fetch(`${BASE_URL}?page=1&pageSize=10&keyword=test`);
}
