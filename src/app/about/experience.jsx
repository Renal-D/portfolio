"use client";
import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("education");

  const educationContent = (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Physics
        <br />
        <span className=" text-accent">
          {" "}
          @
          <a
            href="http://fisika.fmipa.um.ac.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Universitas Negeri Malang 
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2018 - August 2022</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
        I am a Fresh Graduate from S1 Department of Physics, Faculty of Mathematics and Natural Sciences, Universitas Negeri 
Malang.
        </li>
        <li>
        During the first four semesters, I was more interested in physics cloud computing, and I started liking coding since studying cloud computing courses in semester 3.{" "}
{" "}
        </li>
        <li>
        at the end of the semester I created a Water Quality Monitoring System project using Node-RED Based On NodeMCU for my undergraduate thesis. I passed with GPA 3.48/4.00
        </li>
      </ul>
    </div>
  );

  const organizationsContent = (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Ketua Bidang Sarana Prasarana 
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.instagram.com/komipaum/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            KOMIPA UM
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Jan 2020 - Dec 2020</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
        Manage organization’s inventory,
        </li>
        <li>
        Coordinating field members in organization activities and Collaborate with other field teams for organization’s program.
        </li>
        <li>
          One of the biggest events is the{" "}
          <a
            href="https://www.instagram.com/komipaum/"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            MIPA Futsal Competition
          </a>
          , where I served as the Head of Publication and Documentation,
          responsible for organizing all the event{`'`}s visual documentation
          and preparations, including photos, videos,{" "}
          <a
            href="https://www.instagram.com/mfc.um/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            media social content
          </a>
          , and media streaming.
        </li>
      </ul>
    </div>
  );

  const JobsContent = (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        PKL/Internship
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://ppsdmmigas.esdm.go.id/pkl/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            PPSDM Migas
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Sept - Oct 2021</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
        Analysis and acquisition of soil structure data using seismic methods,
        </li>
        <li>
        Processing and data conversion with {" "}
          <a
            href="https://www.winsim.com/download.html"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Winsins software,
          </a>
        </li>
        <li>
        Velocity data analysis, picking first arrival time, and travel time.{" "}
        </li>
      </ul>
    </div>
  );

  const sololearnData = [
    {
      name: "Belajar Fundamental Python",
      link: "",
    },
    {
      name: "Belajar Data Visualization ",
      link: "",
    },
  ];

  const dicodingData = [
    {
      name: "Belajar Dasar Pemrograman Phyton",
      link: "",
    },
    {
      name: "Belajar Membuat Machine Learning Project",
      link: "",
    },
    {
      name: "Belajar Dasar SQL",
      link: "",
    },
    {
      name: "Belajar Membuat Visualisasi Data dengan Phyton",
      link: "",
    },
    {
      name: "Belajar Fundamental Machine Learning",
      link: "",
    },
    {
      name: "Belajar Pre-Processing Data",
      link: "",
    },
    {
      name: "Belajar Tableau",
      link: "",
    },
  ];

  const certificationContent = (
    <div className="cursor-default text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Course
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://digitalent.kominfo.go.id/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Binar x Kominfo
          </a>
        </span>
      </h3>
      <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
        {dicodingData.map((item) => (
          <li key={item.name}>
            {item.name}
            {` `}
            <a href={item.link} target="_blank" rel="noreferrer">
              <BiLinkExternal
                className="inline-flex transition-all hover:text-accent"
                size={14.5}
              />
            </a>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Course
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.revou.com"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            RevoU
          </a>
        </span>
      </h3>
      <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
        {sololearnData.map((item) => (
          <li key={item.name}>
            {item.name}
            <a href={item.link} target="_blank" rel="noreferrer">
              <BiLinkExternal
                className="inline-flex transition-all hover:text-accent"
                size={14.5}
              />
            </a>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Presenter
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://confbrite.net/2022/icolist/kfz/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            IcoLisT
          </a>
        </span>
      </h3>
      <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
        {sololearnData.map((item) => (
          <li key={item.name}>
            {item.name}
            <a href={item.link} target="_blank" rel="noreferrer">
              <BiLinkExternal
                className="inline-flex transition-all hover:text-accent"
                size={14.5}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  let selectedContent;

  if (activeCategory === "education") {
    selectedContent = educationContent;
  } else if (activeCategory === "organizations") {
    selectedContent = organizationsContent;
  } else if (activeCategory === "jobs") {
    selectedContent = JobsContent;
  } else if (activeCategory === "certification") {
    selectedContent = certificationContent;
  }

  const categories = [
    { name: "Education", value: "education" },
    { name: "Organizations", value: "organizations" },
    { name: "Jobs", value: "jobs" },
    { name: "Certification", value: "certification" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-32">
      <div className="mb-5 flex w-full items-center justify-start gap-4 lg:w-[776px]">
        <h1
          className="text-xl font-semibold text-secondary md:text-2xl"
          data-aos="fade-left"
          data-aos-duration="300"
          data-aos-once="true"
        >
          My Experience
        </h1>
        <div
          className="h-[1px] w-32 bg-primary md:w-96"
          data-aos="zoom-in-left"
          data-aos-duration="600"
          data-aos-once="true"
        ></div>
      </div>
      <div
        className="flex flex-col items-center gap-8 md:flex-row md:items-start"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-once="true"
      >
        <div className="flex flex-row overflow-auto font-mono text-sm text-primary md:flex-col">
          {categories.map((category) => (
            <button
              className={`w-auto px-2 py-2 text-start text-xs transition-all duration-300 hover:bg-accent/10 hover:text-accent md:py-3 md:px-5 md:text-base ${
                activeCategory === category.value
                  ? "bg-accent/10 text-accent"
                  : ""
              }`}
              onClick={() => setActiveCategory(category.value)}
              key={category.value}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="h-[480px]  w-[350px] overflow-auto md:w-[490.78px] lg:w-[600px]">
          {selectedContent}
        </div>
      </div>
    </div>
  );
}
