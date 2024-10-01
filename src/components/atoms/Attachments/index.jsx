import React from 'react';
import { AttachmentsWrapper } from './Attachments.style';
import PdfIcon from '../../../_assets/pdf-icon.svg';
import ProjectIcon from '../../../_assets/project-icon.svg';
import DocumentIcon from '../../../_assets/document-icon.svg';
import Image from 'next/image';

const Attachments = () => {
  return (
    <AttachmentsWrapper>
      {/* <h6>Attachments</h6>
      <div className="attachmentWrap">
        <div className="fileName">
          <Image src={PdfIcon} alt="pdfIcon" width={18.33} height={22} />
          <span>Competitor Analysis Template</span>
        </div>
        <div className="fileName">
          <Image src={DocumentIcon} alt="documentIcon" width={18.33} height={22} />
          <span>How to Build a Case Study</span>
        </div>
        <div className="fileName">
          <Image src={ProjectIcon} alt="projectIcon" width={18.33} height={22} />
          <span>Project Documents</span>
        </div>
        <div className="fileName">
          <Image src={PdfIcon} alt="pdfIcon" width={18.33} height={22} />
          <span>Competitor Analysis Template</span>
        </div>
        <div className="fileName">
          <Image src={DocumentIcon} alt="documentIcon" width={18.33} height={22} />
          <span>How to Build a Case Study</span>
        </div>{' '}
        <div className="fileName">
          <Image src={DocumentIcon} alt="documentIcon" width={18.33} height={22} />
          <span>How to Build a Case Study</span>
        </div>
        <div className="fileName">
          <Image src={DocumentIcon} alt="documentIcon" width={18.33} height={22} />
          <span>How to Build a Case Study</span>
        </div>
        <div className="fileName">
          <Image src={DocumentIcon} alt="documentIcon" width={18.33} height={22} />
          <span>How to Build a Case Study</span>
        </div>
        <div className="fileName">
          <Image src={DocumentIcon} alt="documentIcon" width={18.33} height={22} />
          <span>How to Build a Case Study</span>
        </div>
      </div> */}
    </AttachmentsWrapper>
  );
};

export default Attachments;
