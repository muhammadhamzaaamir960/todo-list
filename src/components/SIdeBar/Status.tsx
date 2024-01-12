"use client";
import { SelectItem } from "@radix-ui/themes";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

function Status() {
  const dropDownData = ["All", "Completed", "Un-Completed"];
  return (
    <div className=" w-4/5 flex justify-start min-w-fit mt-12  outline-none border-green-400 border-b-2 pb-4">
      <Select.Root>
        <Select.Trigger
          className="flex items-center w-fit justify-between rounded px-[15px] text-[13px] leading-none h-[25px] gap-3 bg-primary border-none text-violet11 shadow  outline-none group"
          aria-label="Status"
        >
          <h4 className="text-md text-gray-900 font-semibold">Status: </h4>
          <Select.Value placeholder="All" />
          <Select.Icon className="text-gray-900 font-semibold   ">
            <ChevronDownIcon className="group-data-[state=open]:rotate-180 transition-all ease-in-out duration-300   " />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position={"popper"}
            align="end"
            className="overflow-hidden outline-none w-full mt-2 bg-primary p-1 flex justify-start gap-10 rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
          >
            <Select.Viewport className="p-[10px] ">
              <Select.Group className="cursor-pointer ">
                <Select.Label className="px-[25px] mb-2 text-gray-700 text-sm text-start leading-[25px] ">
                  Status
                </Select.Label>

                {dropDownData.map((item: string, index: number) => {
                  return (
                    <>
                      <SelectItem
                        key={index}
                        value={`${item}`}
                        className="flex items-center gap-3 text-sm "
                      >
                        {item}
                      </SelectItem>
                      {index === 2 ? (
                        ""
                      ) : (
                        <Select.Separator className="h-[0.01rem] bg-gray-400  my-[5px]" />
                      )}
                    </>
                  );
                })}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

export default Status;
