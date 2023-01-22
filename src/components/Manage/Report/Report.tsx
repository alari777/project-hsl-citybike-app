import { FC } from 'react';

interface ReportProps {
  reports: string[];
}

const Report: FC<ReportProps> = ({ reports }) => {
  return (
    <>
      <ul>
        {reports &&
          reports.map((report: string, index: number) => (
            <li key={index}>{report}</li>
          ))}
      </ul>
    </>
  );
};

export default Report;
