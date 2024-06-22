import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { RiFeedbackLine, RiMenu4Line } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiFilePdf } from "react-icons/pi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { GoTrash } from "react-icons/go";
import { EachElement } from "./EachElement";
import { FaPlus } from "react-icons/fa";

export const Sidebar = () => {
  const [isChatboxDropdownOpen, setIsChatboxDropdownOpen] = useState(false);
  const [isChatPDFDropDown, setIsChatPDFDropDown] = useState(false);
  const location = useLocation();
  const navigation = useNavigate();

  const toggleChatboxDropdown = () => {
    setIsChatboxDropdownOpen((prev) => !prev);
  };
  const toggleChatPDFDropdown = () => {
    setIsChatPDFDropDown((prev) => !prev);
  };

  const chatList = [
    {
      id: "1",
      name: "Chat 1",
    },
    {
      id: "2",
      name: "Chat 2",
    },
    {
      id: "3",
      name: "Chat 3",
    },
  ];
  const chatPDFList = [
    {
      id: "1",
      name: "ChatPDF 1",
    },
    {
      id: "2",
      name: "ChatPDF 2",
    },
    {
      id: "3",
      name: "ChatPDF 3",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" className="text-2xl shadow shadow-purple-900">
          <RiMenu4Line />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full md:w-[250px] z-[999]">
        <SheetHeader>
          <SheetTitle>
            Welcome to <span className="font-jamjure font-bold">CraftAI</span>
          </SheetTitle>
          <div className="flex flex-col h-full min-h-screen">
            <div className="flex-1 mt-5 flex flex-col gap-3">
              <NavLink
                to="/"
                className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-violet-950 trans-300"
              >
                <span className="text-xl">
                  <LuLayoutDashboard />
                </span>
                <span className="w-36 text-left text-lg">Dashboard</span>
              </NavLink>
              <div>
                <div
                  className={`flex items-center justify-between gap-3 py-2 px-3 rounded-md hover:bg-violet-950 trans-300 ${
                    location.pathname.startsWith("/chatbox")
                      ? "bg-purple-900"
                      : ""
                  }`}
                >
                  <div
                    onClick={toggleChatboxDropdown}
                    className="flex items-start gap-2 cursor-pointer"
                  >
                    <span className="text-xl">
                      <IoChatbubblesOutline />
                    </span>

                    <span className=" text-left text-lg">Chatbox</span>
                  </div>
                  <button className="cursor-pointer">
                    <FaPlus />
                  </button>
                </div>
                {isChatboxDropdownOpen && (
                  <div className="pl-6 mt-2 space-y-2">
                    <EachElement
                      of={chatList}
                      render={(item, index) => (
                        <div
                          key={index}
                          className={`w-full py-1 px-3 flex justify-between items-center rounded-md hover:bg-violet-950 trans-300 ${
                            location.pathname === `/chatbox/${item.id}`
                              ? "bg-purple-900"
                              : ""
                          }`}
                        >
                          <button
                            onClick={() => navigation(`/chatbox/${item.id}`)}
                          >
                            {item.name}
                          </button>
                          <button className="text-lg p-1 bg-red-800 rounded-md ">
                            <GoTrash />
                          </button>
                        </div>
                      )}
                    />
                  </div>
                )}
              </div>
              <div>
                <div
                  className={`flex items-center justify-between gap-3 py-2 px-3 rounded-md hover:bg-violet-950 trans-300 ${
                    location.pathname.startsWith("/chatPDF")
                      ? "bg-purple-900"
                      : ""
                  }`}
                >
                  <div
                    onClick={toggleChatPDFDropdown}
                    className="flex items-start gap-2 cursor-pointer"
                  >
                    <span className="text-xl">
                      <PiFilePdf />
                    </span>

                    <span className=" text-left text-lg">Chat PDF</span>
                  </div>
                  <button className="cursor-pointer">
                    <FaPlus />
                  </button>
                </div>
                {isChatPDFDropDown && (
                  <div className="pl-6 mt-2 space-y-2">
                    <EachElement
                      of={chatPDFList}
                      render={(item, index) => (
                        <div
                          key={index}
                          className={`w-full py-1 px-3 flex justify-between items-center rounded-md hover:bg-gray-800 trans-300 ${
                            location.pathname === `/chatPDF/${item.id}`
                              ? "bg-purple-900"
                              : ""
                          }`}
                        >
                          <button
                            onClick={() => navigation(`/chatPDF/${item.id}`)}
                          >
                            {item.name}
                          </button>
                          <button className="text-lg p-1 bg-red-800 rounded-md ">
                            <GoTrash />
                          </button>
                        </div>
                      )}
                    />
                  </div>
                )}
              </div>

              <NavLink
                to="/feed"
                className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-violet-950 trans-300"
              >
                <span className="text-xl">
                  <RiFeedbackLine />
                </span>
                <span className="w-36 text-left text-lg">Feedback</span>
              </NavLink>
            </div>
            <div className="mb-16">
              <span>Thank</span>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
