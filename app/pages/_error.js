import Link from 'next/link';

export default function Error(){
  return (
    <div className="header-container">
        <div className="header-container">
          <div className="header">
            <h1 className="title">Page Not Found!</h1>
            <p>We are sorry! You encountered a 404 error, we reccomend reporting the link that brought you here or checking to make sure the url is correct!</p>

            <Link href="https://zachary-richman.vercel.app">Home Page!</Link>
          </div>
        </div>
    </div>
  );
}