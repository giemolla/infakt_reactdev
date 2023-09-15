import axios from "axios";
import { AxiosResponse } from "axios";
import { AccountantResponseType } from "../types/Accountant";

type AxiosAccountantResponse = AxiosResponse<AccountantResponseType>;

type FetchAccountantsFn = (page?: number) => Promise<AxiosAccountantResponse>;

export const fetchAccountants: FetchAccountantsFn = (page: number = 1) =>
  axios.get(
    `https://randomuser.me/api/?results=4&seed=accountants&page=${page}&inc=cell,name,email,picture,login`
  );
