import executeQuery from "@/pages/api/v1/download/trips/lib/db";

// This function saved trips directly using SLQ query.
// The reason is that `prisma orm` does not support `sql queries`.
// So in that case better way is using mysql connector.
export async function loadDataInfileToDB(): Promise<unknown> {
  console.time("Load Data In File Time");
  const pathCSV = "public/upload/csv";
  const nameCSV = "trips";
  const sql =
    "LOAD DATA LOCAL INFILE '" +
    `${pathCSV}/${nameCSV}.csv` +
    "' REPLACE INTO TABLE Trips " +
    "FIELDS TERMINATED BY ',' ENCLOSED BY '\"' LINES TERMINATED BY '\n' " +
    "IGNORE 1 LINES " +
    "(departureDate,returnDate,departureStationId,returnStationId,coveredDistance,duration) " +
    "set id = NULL;";
  const resQuery = await executeQuery({
    query: sql,
    values: [],
  });
  console.log("Records were inserted", resQuery);
  console.timeEnd("Load Data In File Time");
  return resQuery;
}
