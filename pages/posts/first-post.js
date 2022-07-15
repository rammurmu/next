import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Introduction</h1>
      <p>I would like to introduce runash,runash is a live streaming hybrid marketplace and platform for retailing</p>
      <hr />

      <h2>
        <Link href="/">
          <a>&larr; Back to home</a>
        </Link>
      </h2>
    </>
  );
}


