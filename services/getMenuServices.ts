import { apiFetch } from "@/lib/api"

export interface FoodMenu {
   id : number,
   name : string,
   description : string,
   category : string,
   price : number,
   imgPath : string
}


export async function GetMenu() {
  return apiFetch<FoodMenu[]>("/api/getMenu")
}
