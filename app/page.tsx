import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { apiBaseUrl } from "@/config";
import { Farmers, FarmersResponse } from "@/types";
import { MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";

const getFarmerList = async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/farmers`);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const result: FarmersResponse = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default async function FarmerList() {
  const farmersData = await getFarmerList();

  return (
    <div className="py-4 lg:py-6">
      <div className="flex gap-2 items-center w-full justify-end">
        <Avatar>
          <AvatarImage
            className="object-cover"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          />
          <AvatarFallback>AAA</AvatarFallback>
        </Avatar>
        <p className="font-semibold">Joni Joni</p>
      </div>
      <div className="flex justify-between mt-6">
        <h1 className="font-bold text-xl">Farmer List</h1>
        <Button>Add Farmer</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No</TableHead>
            <TableHead>Farmer Name</TableHead>
            <TableHead>ID Card Number</TableHead>
            <TableHead>Birthdate</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {/* <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end w-full">
                <MoreVertical width={15} />
              </div>
            </TableCell>
          </TableRow> */}
          {farmersData &&
            farmersData.farmers.map((farmer, idx) => (
              <TableRow key={farmer.id}>
                <TableCell className="font-medium">{idx + 1}</TableCell>
                <TableCell>{farmer.name}</TableCell>
                <TableCell>{farmer.idCardNumber}</TableCell>
                <TableCell>{farmer.birthDate}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end w-full">
                    <MoreVertical width={15} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}
