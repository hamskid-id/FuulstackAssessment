"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Text } from "./text";

interface tableProps {
  dataLength: number;
  mobileTable?: React.ReactNode;
  tableHeadRow?: string[] | React.ReactNode[];
  tableHeadRowChildren?: React.ReactNode;
  tableHeadRowStyle?: string;
  children: React.ReactNode;
  caption?: string;
  tableHead?: React.ReactNode;
}

export const TableLayout = ({
  mobileTable,
  dataLength,
  tableHeadRow,
  tableHeadRowStyle,
  children,
  tableHeadRowChildren,
  caption,
  tableHead,
}: tableProps) => {
  return (
    <div className="w-full text-Text_200 font-medium flex flex-col justify-between h-full">
      {tableHead && <div className="my-4">{tableHead}</div>}
      <div className={cn("w-full mb-4 ", mobileTable && "md:block hidden")}>
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader>
            {tableHeadRowChildren ? (
              tableHeadRowChildren
            ) : (
              <TableRow
                className={
                  tableHeadRowStyle
                    ? tableHeadRowStyle
                    : "font-[600] text-[16px] bg-none border-none shadow-none"
                }
              >
                {tableHeadRow?.map((heading, index) => (
                  <TableHead key={index}>{heading}</TableHead>
                ))}
              </TableRow>
            )}
          </TableHeader>
          <TableBody className="font-[400] text-sm">{children}</TableBody>
        </Table>
      </div>
      <div className="flex flex-col gap-2 md:hidden mb-4">{mobileTable}</div>
      {dataLength < 1 && (
        <div className="flex flex-col items-center justify-center my-[3rem] text-Text_200 mx-auto ">
          <Text style="text-xl">No Data!</Text>
        </div>
      )}
    </div>
  );
};
