import Link from "next/link";

function Header() {
  return (
    <div className="posts">
      <Link href="/post1">
        <a>
          <div className="post">
            <h2>Post 1</h2>
            <p>123</p>
          </div>
        </a>
      </Link>
      <Link href="/post2">
        <a>
          <div className="post">
            <h2>Post 2</h2>
            <p>123</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Header;
