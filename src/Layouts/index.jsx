import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initial, deleteItem, addItem } from '../Actions';
import RenderTodoList from '../Components/Sentence';
import Add from '../Components/Add';

export default function Main() {
  const sentenceList = useSelector(state => state.sentence);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!sentenceList) {
      dispatch(initial());
    }
  }, [sentenceList, dispatch]);

  return (
    <div>
      <Add />
      <ul>
        <RenderTodoList />
      </ul>
    </div>
  );
};