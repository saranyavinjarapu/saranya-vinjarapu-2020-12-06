// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from "../../public/data/filters";

export default async (req, res) => {
  res.statusCode = 200;
  res.json(filters);
  console.log("fu", filters);
};
