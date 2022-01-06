import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import _map from 'lodash/fp/map';
import _flow from 'lodash/fp/flow';
import _values from 'lodash/fp/values';
import { initial, deleteItem, addItem } from '../../Actions';

const useStyles = makeStyles({
  displayFlex: {
    display: 'flex',
  },
  textSide: {
    width: 'fit-content',
    textAlign: 'left',
    "&:hover": {
      color: 'red'
    },
    cursor: 'pointer'
  }
});

export default function RenderTodoList() {
  const sentenceList = useSelector(state => state.sentence);
  const dispatch = useDispatch();
  const classes = useStyles();
  const renderSentence = () => {
    return (
      _flow(
        _values(),
        _map(sentenceList => (
          <li key='sentence'>
            <div className={'sentence', classes.displayFlex}>
              <div>Sentence:&nbsp;</div>
              <div>{sentenceList.split(',')[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div>From:&nbsp;</div>
              <div>{sentenceList.split(',')[1]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div>From_Whom:&nbsp;</div>
              <div>{sentenceList.split(',')[2]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div 
                className={classes.textSide}
                onClick={() => dispatch(deleteItem(sentenceList))}
              >Delete</div>
            </div>
          </li>
          )),
      )(sentenceList)
    );
  };
  return (
    useMemo(() => renderSentence(), [sentenceList])
  );
};