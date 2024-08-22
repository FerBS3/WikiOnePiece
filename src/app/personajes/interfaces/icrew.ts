export interface ICrew {
  id: number;
  name: string;
  description: string | null;
  status: string;
  is_yonko: boolean;
  number?: string;
  roman_name?: string;
  total_prime?: string;
}
