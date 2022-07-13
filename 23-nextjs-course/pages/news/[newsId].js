// .../news/anything

import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId; // value in the url

  // send a request to the backend API to fetch news item with newsId

  return <h1>Something:{newsId}</h1>;
}

export default DetailPage;
