export default function Education() {
    return (
      <>
        <div className="main main-reverse">
          <div className="content h-20 bg-white text-primary rounded-xl content-reverse">
            <h5>EDUCATION</h5>
          </div>
  
          <div className="content lg:basis-2/3 lg:font-medium">
            <ul className="md:w-[75%] lg:w-full">
              <ul className="flex justify-between">
                <p>PAYAP UNIVERSITY</p>
                <li>2016</li>
              </ul>
              <li className="opacity-60 mb-2">
                Bachelor of Business Administration : Human Resource Management
              </li>
              <ul className="pl-6 mb-8 list-disc">
                <li>Recruitment and selection</li>
                <li>Human resource development</li>
                <li>Performance appraisal</li>
                <li>Managing diversity</li>
              </ul>
  
              {/* School  */}
              <ul>
                <ul className="flex justify-between">
                  <p>DAMRONGRATSONGKROH SCHOOL</p>
                  <li>2012</li>
                </ul>
                <li className="opacity-60 mb-2">Computer Science (Chiang Rai)</li>
                <ul className="pl-6 list-disc">
                  <li>Basic computer skill such as HTML, Ebook</li>
                  <li>Microsoft Office Word/Powerpoint/Excel</li>
                  <li>Adobe Photoshop/Dreamweaver</li>
                </ul>
              </ul>
            </ul>
          </div>
        </div>
      </>
    );
  }
  