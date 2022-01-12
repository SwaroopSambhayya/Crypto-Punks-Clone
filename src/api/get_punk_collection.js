import axios from "axios";
import { dummyList } from "../dummyData";

export const getPunkList = async (setPunkList) => {
  try {
    var response = await axios.get(
      "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x238f65eF9231d86bd9Bb2eFDeAF4306fd69e2A89"
    );
  } catch (e) {
    console.log(e);
  }

  setPunkList(
    response?.data?.assets !== undefined ? response.data.assets : dummyList
  );

  return dummyList;
};
