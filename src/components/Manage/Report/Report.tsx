import { FC } from 'react';

interface ReportProps {
  reports: string[];
  typeReport: string;
}

const Report: FC<ReportProps> = ({ reports, typeReport }) => {
  return (
    <div className='mt-3'>
      <label htmlFor={typeReport}>Report:</label>
      <ul id={typeReport} key={typeReport}>
        {reports &&
          reports.map((report: string, index: number) => (
            <li key={index}>{report}</li>
          ))}
      </ul>
    </div>
  );
};

export default Report;
