export type Farmers = {
  id: number;
  name: string;
  idCardNumber: string;
  birthDate: string;
};

export type FarmersResponse = {
  farmers: Farmers[];
};
