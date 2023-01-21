// This function downloads remote CSV file with trips
export async function downloadTripsCsv(url: string): Promise<string> {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'text/csv;charset=UTF-8',
    },
  });
  if (response.status === 200) {
    return await response.text();
  }
  return '';
}
