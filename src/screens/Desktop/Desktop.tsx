import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Desktop = (): JSX.Element => {
  const skills = [
    { text: "Graphic Design", className: "top-[94px] left-[9px]" },
    { text: "Animation", className: "top-[94px] left-[196px]" },
    { text: "UI Design", className: "top-[94px] left-[345px]" },
    { text: "Digital Marketing", className: "top-[163px] left-[9px]" },
    { text: "Photography&Editing", className: "top-[163px] left-56" },
    { text: "Product Management", className: "top-[232px] left-[9px]" },
    { text: "Video Editing", className: "top-[232px] left-[262px]" },
  ];

  const workExperience = [
    {
      logo: "/pb1.png",
      title: "Service Administrator",
      period: "2022-present",
      description:
        "Developed pricing strategies and managed inventory for Apple and Samsung parts. Oversaw supplier relations and financial tracking, optimizing operations through effective stock coordination. Analyzed financial reports to boost performance. Designed marketing materials for New Zealand branches, directed event photography, and coordinated with insurance companies on invoicing and claims.",
      className: "w-[350px] h-[600px]",
    },
    {
      logo: "/nannanxi1-1.png",
      title: "Art & Design Teacher",
      period: "2019 - 2022",
      description:
        "Developed and delivered customized art education programs for diverse age groups, facilitating instruction in creative thinking, composition, and design principles. Offered specialized instruction for children with special needs and conducted live online streaming classes for students.",
      className: "mt-[278px] w-[350px] h-[600px]",
    },
    {
      logo: "/1on11-1.png",
      title: "Graphic Designer",
      period: "2018 - 2019",
      description:
        "Crafted publicity posters, digital assets, and marketing visuals for various campaigns.Spearheaded online promotions and compiled marketing reports to evaluate campaign effectiveness.Worked closely with manufacturers and activity providers to implement brand events and promotional strategies.",
      className: "w-[350px] h-[600px]",
    },
  ];

  const navigationItems = [
    { text: "About" },
    { text: "Work" },
    { text: "Projects" },
  ];

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="z-[3] w-full max-w-[1440px] h-[1024px] relative bg-[url(/bg.svg)] bg-[#e1edf1] bg-[length:100%_100%] bg-[position:center] bg-no-repeat">
        {/* Profile Info */}
        <div className="absolute top-[512px] right-[227px] w-[169px] h-[135px] flex flex-col items-center gap-2.5">
          <div className="inline-flex h-20 w-[169px] relative items-center justify-center gap-2.5 p-2.5">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Itim',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
              Zita Ye
            </h1>
          </div>

          <div className="ml-0.5 h-[45px] w-[134px] relative">
            <img
              className="absolute -top-0.5 left-[89px] w-[60px] h-[60px] object-cover"
              alt="Linkedin"
              src="/linkedin.png"
            />

            <img
              className="absolute top-[-5px] left-[calc(50.00%_-_72px)] w-[65px] h-[65px] object-cover"
              alt="Email"
              src="/email.png"
            />
          </div>
        </div>

        {/* Profile Photo */}
        <div className="absolute top-[calc(50.00%_-_204px)] right-[320px] w-[193px] h-[193px] flex bg-white rounded-[96.5px] shadow-[5px_5px_15px_#00000040]">
          <img
            className="mt-[21px] w-[151.02px] h-[151.02px] ml-[21px] object-cover"
            alt="Zz"
            src="/zz-1.png"
          />
        </div>

        {/* Skills Section */}
        <div className="absolute top-[486px] left-[11%] w-[448px] h-[277px]">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`inline-flex items-center justify-center gap-2.5 p-2.5 absolute ${skill.className} rounded-[30px] border-2 border-solid border-black shadow-[5px_5px_4px_#00000040] bg-white hover:bg-gray-50 cursor-pointer`}
            >
              <span className="relative w-fit mt-[-1.00px] [font-family:'Itim',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {skill.text}
              </span>
            </Badge>
          ))}

          <h2 className="inline-flex items-center justify-center gap-2.5 p-2.5 absolute top-0 left-0">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Itim',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
              Skills
            </span>
          </h2>
        </div>

        {/* About Me Section */}
        <div className="absolute top-[175px] left-[11%] w-[644px] h-[230px] flex flex-col gap-3">
          <h2 className="inline-flex w-[225px] h-20 relative items-center justify-center gap-2.5 p-2.5">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Itim',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal] whitespace-nowrap">
              About Me
            </span>
          </h2>

          <div className="inline-flex w-[644px] h-[138px] relative items-center justify-center gap-2.5 p-2.5">
            <p className="relative w-[624px] h-[118px] mt-[-1.00px] [font-family:'Itim',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]">
              Highly organized and detail-oriented professional with experience
              in administrative support, product management, and creative
              design.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex z-[4] flex-col w-full max-w-[1440px] h-[52px] items-center justify-center px-16 py-0 fixed top-0 left-1/2 transform -translate-x-1/2 bg-white">
        <div className="flex items-center justify-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center justify-center relative flex-1 grow">
            <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto] h-auto p-0 hover:bg-gray-100"
                >
                  <span className="relative w-fit mt-[-1.00px] [font-family:'Itim',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
                    {item.text}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Work Experience Section */}
      <section className="z-[2] w-full max-w-[1440px] h-[1024px] relative bg-[#e1edf1]">
        <div className="absolute top-[54px] left-[8.4%] w-[83.2%] h-[878px] flex gap-[74px] justify-center">
          {workExperience.map((job, index) => (
            <Card
              key={index}
              className={`${job.className} flex bg-white rounded-[35px] shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
            >
              <CardContent className="flex mt-4 w-[317px] h-[235px] ml-4 relative flex-col items-center gap-[22px] p-0">
                <div className="inline-flex flex-col items-center gap-[22px] relative flex-[0_0_auto] mb-[-308.00px] ml-[-3.00px] mr-[-3.00px]">
                  <div className="flex flex-col w-[323px] h-[226px] items-center justify-center gap-[30px] relative">
                    <img
                      className="relative w-[110px] h-[108px] object-cover"
                      alt={job.title}
                      src={job.logo}
                    />

                    <div className="flex flex-col w-[310px] items-center relative flex-[0_0_auto]">
                      <h3 className="relative self-stretch h-11 mt-[-1.00px] [font-family:'Itim',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[normal]">
                        {job.title}
                      </h3>

                      <p className="relative self-stretch [font-family:'Itim',Helvetica] font-normal text-black text-2xl text-center tracking-[0] leading-[normal]">
                        {job.period}
                      </p>
                    </div>
                  </div>

                  <p className="relative w-[259px] h-[295px] [font-family:'Itim',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal]">
                    {job.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <img
            className="absolute top-[129px] left-[29.7%] w-[233px] h-[216px]"
            alt="Vector"
            src="/vector-2.svg"
          />

          <img
            className="absolute top-[653px] right-[39%] w-[351px] h-[267px]"
            alt="Vector"
            src="/vector-1.svg"
          />

          <img
            className="absolute top-[467px] left-[8.4%] w-[518px] h-[465px] object-cover"
            alt="Card"
            src="/card-1.png"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="z-[1] w-full max-w-[1440px] h-[2048px] relative bg-[#e1edf1]">
        <img
          className="absolute top-[243px] left-0 w-full h-[1486px] object-cover"
          alt="Projects"
          src="/projects.png"
        />

       

        <Card className="flex flex-col w-[550px] h-[390px] items-center justify-center gap-2.5 p-2.5 absolute top-[1492px] left-[17%] bg-white rounded-[35px] overflow-hidden shadow-[5px_5px_10px_#00000040] hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-0 w-full h-full">
            <img
              className="relative self-stretch w-full h-[376.89px] mt-[-3.44px] mb-[-3.44px] object-cover"
              alt="Photography"
              src="/photography-1.png"
            />
          </CardContent>
        </Card>

        <Card className="flex flex-col w-[550px] h-[390px] items-center justify-center gap-2.5 p-2.5 absolute top-[1063px] right-[17%] bg-white rounded-[35px] overflow-hidden shadow-[5px_5px_10px_#00000040] hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-0 w-full h-full">
            <img
              className="relative self-stretch w-full h-[390px] mt-[-10.00px] mb-[-10.00px] object-cover"
              alt="Web"
              src="/web-1.png"
            />
          </CardContent>
        </Card>

        <Card className="flex w-[550px] h-[390px] items-center gap-[49px] absolute top-[635px] left-[17%] bg-[#ffffff80] rounded-[35px] overflow-hidden shadow-[5px_5px_10px_#00000040] hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-0 w-full h-full">
            <img
              className="relative w-[550px] h-[390px] rounded-[35px] object-cover"
              alt="Posters"
              src="/posters-1.png"
            />
          </CardContent>
        </Card>

        <Card className="inline-flex items-center gap-[49px] absolute top-[168px] left-[17%] w-[68.7%] h-[382px] bg-[#ffffff80] rounded-[35px] shadow-[5px_5px_10px_#00000040] hover:shadow-xl transition-shadow cursor-pointer">
          <CardContent className="p-4 flex items-center gap-6 w-full h-full">
            <p className="flex-1 [font-family:'Itim',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] text-center">
              In 2016, I participated as a competitor in Blizzard&apos;s
              Hearthstone tournament and was invited to commentate the online
              finals.
              <br />
              Possesses live streaming experience on platforms such as Douyu and
              Toktok.
              <br />
              In 2024, successfully participated as an artist in New
              Zealand&apos;s anime convention Overload, documenting and
              promoting the entire process through recordings and live
              streaming.
            </p>

            <img
              className="w-[433px] h-[382px] object-cover rounded-lg flex-shrink-0"
              alt="Act"
              src="/act-1.png"
            />
          </CardContent>
        </Card>

        <img
          className="absolute top-[1626px] right-[10%] w-[355px] h-[276px] object-cover"
          alt="Cat"
          src="/cat-1.png"
        />
      </section>
    </div>
  );
};
