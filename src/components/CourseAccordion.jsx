"use client";
import { Accordion } from "flowbite-react";

export default function CourseAccordion() {
  return (
    <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title>
          <p className="font-bold">Introduction To Python</p>
        </Accordion.Title>
        <Accordion.Content>
          <ul className=" text-gray-500 dark:text-gray-400">
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 1</p>
              <p>00:30</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 2</p>
              <p>00:15</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 3</p>
              <p>00:40</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 4</p>
              <p>01:00</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 4</p>
              <p>01:00</p>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <p className="font-bold">Data Type Conversion</p>
        </Accordion.Title>
        <Accordion.Content>
          <ul className=" text-gray-500 dark:text-gray-400">
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 1</p>
              <p>00:30</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 2</p>
              <p>00:15</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 3</p>
              <p>00:40</p>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <p className="font-bold">Arithmetic Operators</p>
        </Accordion.Title>
        <Accordion.Content>
          <ul className=" text-gray-500 dark:text-gray-400">
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 1</p>
              <p>00:30</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 2</p>
              <p>00:15</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 3</p>
              <p>00:40</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 4</p>
              <p>01:00</p>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          <p className="font-bold">Boolean Logic</p>
        </Accordion.Title>
        <Accordion.Content>
          <ul className=" text-gray-500 dark:text-gray-400">
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 1</p>
              <p>00:30</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 2</p>
              <p>00:15</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 3</p>
              <p>00:40</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 4</p>
              <p>01:00</p>
            </li>
            <li className="w-full p-3 hover:bg-yellow-500/30 rounded-md cursor-pointer flex justify-between items-center transition-all duration-300">
              <p>Lecture 4</p>
              <p>01:00</p>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
