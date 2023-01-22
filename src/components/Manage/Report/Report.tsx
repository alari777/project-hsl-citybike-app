import { FC } from 'react';

interface ReportProps {
  reports: string[];
  typeReport: string;
}

const Report: FC<ReportProps> = ({ reports, typeReport }) => {
  return (
    <>
      <ul id={typeReport} key={typeReport}>
        {reports &&
          reports.map((report: string, index: number) => (
            <li key={index}>{report}</li>
          ))}
      </ul>
    </>
  );
};

export default Report;
