import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Blog</h1>
      <p>The latest news about RunAsh from the RunAsh team< br />Hey, I'm a Senior Software Engineer at RunAsh. I enjoy working with Next.js and crafting beautiful front-end experiences.<br />This portfolio is built with **Next.js** and a library called [Nextra](https://nextra.vercel.app/). It allows you to write Markdown and focus on the _content_ of your portfolio.</p>
      <hr />









      <h2>
        <Link href="/">
          <a>&larr; Back to home</a>
        </Link>
      </h2>
    </>
  );
}


