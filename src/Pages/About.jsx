import React from "react";

export default function Profile() {
  return (
    <>
      <div className="main">
        {/* Block Left */}
        <div className="ctf p-12 aspect-[3/4] fin">
          <img src="./img/profile.jpg" alt="image_profile" />
        </div>

        {/* Block Right */}
        <div className="primary rounded-[24px] text-white grid items-center gap-8 px-12 py-16 fr">
            <h3>SUPANAT CHAISRI</h3>
            <h6 className="font-medium">Junior Frontend Developer</h6><hr />
            <h5>ABOUT ME</h5>
            <p>
            I'm interested in working as a Frontend Developer. Currently, I keep
            improving my skills and practice myself. If there were experts
             willing to guide or mentor me, I would be extremely grateful.
            </p>
            <h5>HOBBIES</h5>
        

        {/* Icon */}
        <div className="grid gap-2 grid-cols-1 md:grid-cols-4">
        <div className="grid gap-2 col-span-3">
            {/* Location */}
            <div className="flex items-center gap-4 ">
            <img className="size-6" src="./icon/location_on.png" alt="icon_location" />
            Chiang Mai, Thailand
            </div>

            {/* Mail */}
            <div className="flex items-center gap-4">
            <img className="size-6" src="./icon/mail.png" alt="icon_Mail" />
            tleza_championship2@hotmail.com
            </div>

            {/* Phone  */}
            <div className="flex items-center gap-4">
            <img className="size-6" src="./icon/call.png" alt="icon_Phone" />
            0882252252
            </div>

            {/* Birthdate  */}
            <div className="flex items-center gap-4">
            <img className="size-6" src="./icon/cake.png" alt="icon_birthdate" />
            11 FEB 1994
            </div>
        </div>

        <div className="grid gap-2">
            {/* Facebook  */}
            <a className="contact hover:opacity-80"
            href="https://www.facebook.com/THE.Tlez/" target="_blank">
            <img src="./icon/fb.png" alt="icon_facebook" />
            Facebook
            </a>

            {/* IG  */}
            <a className="contact hover:opacity-80"
            href="https://www.instagram.com/the.tlez/" target="_blank">
            <img src="./icon/ig.png" alt="icon_instagram" />
            Instagram
            </a>

            {/* Notion  */}
            <a className="contact hover:opacity-80"
            href="https://bald-move-a08.notion.site/Resume-10acc06b87d2803fa3bceedef02cf141" 
            target="_blank">
            <img src="./icon/notion.png" alt="icon_notion" />
            Notion</a>

            {/* Githup  */}
            <a className="contact hover:opacity-80"
            href="https://github.com/untitlez/supanat-portfolio.git"
            target="_blank">
            <img src="./icon/github.png" alt="icon_githup" />
            GitHub 
            </a>
           
        </div>
        </div>

        </div>
       

      </div>
    </>
  );
}
