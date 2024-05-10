import Link from 'next/link';

export default function Development(){
  return (
    <div className="header-container">
        <div className="header-container">
          <div className="header">
            <h1 className="title">Project Under Development</h1>
            <p>This project is currently being worked on! At the moment, it is currently not available for public use, but please check back when it does become available.</p>

            <Link href="https://zachary-richman.vercel.app">Home Page!</Link>
          </div>
        </div>
    </div>
  );
}