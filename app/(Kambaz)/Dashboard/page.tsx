import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/reactjs.webp" width={200} height={150} alt="React Course Image" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/2345" className="wd-dashboard-course-link">
            <Image src="/images/nlp.webp" width={200} height={150} alt="NLP Course Image"/>
            <div>
              <h5> CS2345 NLP </h5>
              <p className="wd-dashboard-course-title">
                NLP Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/3456" className="wd-dashboard-course-link">
            <Image src="/images/ml.jpg" width={200} height={150} alt="ML Course Image"/>
            <div>
              <h5> CS3456 Machine Learing </h5>
              <p className="wd-dashboard-course-title">
                ML Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/4567" className="wd-dashboard-course-link">
            <Image src="/images/deeplearning.jpg" width={200} height={150} alt="Deep Learning Course"/>
            <div>
              <h5> CS4567 Deep Learning </h5>
              <p className="wd-dashboard-course-title">
                Deep Learning Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/5678" className="wd-dashboard-course-link">
            <Image src="/images/dbms.webp" width={200} height={150} alt="DBMS Course"/>
            <div>
              <h5> CS5678 Database Management System </h5>
              <p className="wd-dashboard-course-title">
                Database Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/6789" className="wd-dashboard-course-link">
            <Image src="/images/cloud.webp" width={200} height={150} alt="Cloud Course"/>
            <div>
              <h5> CS6789 Cloud Computing</h5>
              <p className="wd-dashboard-course-title">
                Cloud Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
        <Link href="/Courses/7890" className="wd-dashboard-course-link">
            <Image src="/images/ai.webp" width={200} height={150} alt="Aritifical Intelligence Course"/>
            <div>
              <h5> CS7890 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                AI Engineer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
