import { JSON_INDENTATION } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatJsonData = (data: any) => {
  const formattedConfigData = JSON.stringify(data, null, JSON_INDENTATION);

  return formattedConfigData;
};
