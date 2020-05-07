import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

export default function Tag(props) {
  return (
    <div className={props.inInput ? "in-input-tag" : "tag"}>
      {props.value}
      <HighlightOffIcon className="close-icon" onClick={props.removeTag}/> 
    </div>
  )
}
