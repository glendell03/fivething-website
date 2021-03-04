import React from "react";

import { TeamDetails } from "./TeamDetails";

const TeamCard = () => {
  return (
    <div className="h-80 place-items-end grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16 xl:gap-12 md:gap-20">
      {TeamDetails.map((team) => (
        <div key={team.id} className="relative">
          <div className="flex justify-center">
            <div className="z-10 h-28 lg:h-32 xl:h-40 absolute -top-12 md:-top-14 lg:-top-16 xl:-top-20">
              <img
                className="rounded-full h-full border-8 border-trueGray-800"
                src={team.photo}
                alt="Team"
              />
            </div>
            <div className="border-4 w-64 h-48 lg:h-52 xl:h-60 border-pallete-ff9">
              <div className="pt-16 pb-4 px-5 h-full flex flex-col justify-center items-center">
                <div className="my-3">
                  <h1 className="text-xl font-semibold">{team.details.name}</h1>
                  <p className="text-center">{team.details.role}</p>
                </div>
                <div className="flex">
                  {team.details.links.map((link) => (
                    <a
                      key={link.id}
                      className="m-2 text-2xl"
                      href={link.socmed}
                    >
                      {link.logo}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
