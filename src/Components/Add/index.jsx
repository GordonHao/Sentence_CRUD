import { makeStyles } from '@material-ui/styles';
import { initial, deleteItem, addItem } from '../../Actions';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
  textSide: {
    width: 'fit-content',
    textAlign: 'left',
    "&:hover": {
      color: 'red'
    },
    cursor: 'pointer'
  }
});

function Add() {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div 
      className={classes.textSide}
      onClick={() => dispatch(addItem())}
      >Add
    </div>
  );
};

export default Add;