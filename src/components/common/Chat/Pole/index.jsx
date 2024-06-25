import React, { useState } from 'react';
import { StyledPole } from './Pole.styles';
import checkImage from '../../../../_assets/isMulti.svg';
import { LiaCheckDoubleSolid, LiaCheckSolid } from 'react-icons/lia';
import { format } from 'date-fns';
import Image from 'next/image';
import PoleProgress from './PoleProgress';
import PollDetailsModal from '../PollDetailsModal';
import CheckBox from '@/components/molecules/CheckBox';
import ModalContainer from '@/components/molecules/ModalContainer';

const Pole = ({ type, time }) => {
  const pollOptions = ['I want to buy 10 Shares', 'I want to buy 20 Shares', 'I want to buy 30 Shares'];

  const [isMessageRead, setIsMessageRead] = useState(false);
  const [votes, setVotes] = useState(new Array(pollOptions?.length).fill(0));

  const handleVote = (index, e) => {
    if (e.isChecked) {
      const newVotes = [...votes];
      newVotes[index] = 1;
      setVotes(newVotes);
    } else {
      const newVotes = [...votes];
      newVotes[index] = 0;
      setVotes(newVotes);
    }
  };
  return (
    <StyledPole $type={type}>
      <strong className="pole_title">How many shares you want to buy?</strong>
      <div className="isMulti">
        <Image src={checkImage} alt="Checkbox" />
        <span>Select Multiple</span>
      </div>
      {pollOptions.map((option, index) => (
        <div className="votesWrapper" key={index}>
          <CheckBox
            type="rounded"
            onChange={e => handleVote(index, e)}
            color={type}
            label={option}
            fieldName={option}
          />
          <PoleProgress value={20} />
          <span className="totalVotes">22</span>
        </div>
      ))}
      {time && (
        <div className="time-holder">
          <span>{format(time, 'yyyy-MM-dd, hh:mma')}</span>
          <div className="icon">{isMessageRead ? <LiaCheckDoubleSolid size={16} /> : <LiaCheckSolid size={16} />}</div>
        </div>
      )}
      <ModalContainer
        width={600}
        title="Create Poll"
        btnComponent={({ onClick }) => <button onClick={onClick}>View Votes</button>}
        content={({ onClose }) => <PollDetailsModal />}
      />
    </StyledPole>
  );
};

export default Pole;
