// .../news/anything

import { useRouter } from "next/router";
import { Fragment } from "react";
import Link from "next/link";

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId; // value in the url

  // send a request to the backend API to fetch news item with newsId

  return (
    <Fragment>
      <h1>Something:{newsId}</h1>
      <Link href="/news">Back to news</Link>
    </Fragment>
  );
}

export default DetailPage;
