import { writeFile } from "fs/promises";
import openapiTS, { astToString } from "openapi-typescript";

const generateTypes = async () => {
  const swaggerApiUrl = process.env.SWAGGER_API_URL;
  if (!swaggerApiUrl) {
    return;
  }
  const ast = await openapiTS(new URL(swaggerApiUrl));
  const contents = astToString(ast);

  await writeFile("src/api/types.ts", contents, { flag: "w+" });
};

generateTypes();
