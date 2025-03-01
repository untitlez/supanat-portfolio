export default function Education() {
  return (
    <>
      <div
        className="main text-base-100 rounded-xl 
        lg:flex-row-reverse lg:bg-base-100 lg:text-base-content lg:font-medium lg:p-8"
      >
        <div
          className="content h-20 bg-base-100 text-primary rounded-xl justify-center items-center
          lg:h-[280px] lg:w-[50%] lg:bg-primary lg:text-base-100"
        >
          <h5>EDUCATION</h5>
        </div>

        <div className="content gap-8">
          <div>
            <div className="flex justify-between">
              <p>PAYAP UNIVERSITY</p>
              <p className="text-base">2016</p>
            </div>

            <ul className="list-disc pl-6">
              <li className="list-none ml-[-24px] mr-2 text-base-100/60">
                Bachelor of Business Administration : Human Resource Management
              </li>
              <li>Recruitment and selection</li>
              <li>Human resource development</li>
              <li>Performance appraisal</li>
              <li>Managing diversity</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between">
              <p className="break-all mr-8">DAMRONGRATSONGKROH SCHOOL</p>
              <p className="text-base">2012</p>
            </div>
            <ul className="list-disc pl-6">
              <li className="list-none ml-[-24px] text-base-100/60">
                Computer Science (Chiang Rai)
              </li>
              <li>Basic computer skill such as HTML, Ebook</li>
              <li>Microsoft Office Word/Powerpoint/Excel</li>
              <li>Adobe Photoshop/Dreamweaver</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
