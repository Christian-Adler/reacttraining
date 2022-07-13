// .../news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/abc1">ABC 1</Link>
        </li>
        <li>
          <Link href="/news/abc2">ABC 2</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
