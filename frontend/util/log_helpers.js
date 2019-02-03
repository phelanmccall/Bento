function checkIsItem(sliceOfState) {
  return sliceOfState.includes('tem') ? '   ' : '';
}

function getTab(isItem) {
  return isItem ? '   ' : '';
}

function getLogString(whatToLog) {
  return Object.keys(whatToLog)[0];
}

function capSlice(sliceOfState) {
  return sliceOfState[0].toUpperCase() + sliceOfState.slice(1);
}

function getSliceColor(sliceOfState) {
  if (sliceOfState.includes('roject')){
      return '#d1817b';
  } else if (sliceOfState.includes('ask')) {
      return '#1ec7ad';
  } else if (sliceOfState.includes('eam')) {
      return '#de09b4';
  } else {
      return '#fff';
  }
}

function componentStyle(color, isItem) {
  return (
    `background:${color};
     color:black;
     border:black ${isItem ? '1px solid' : '2px dotted'};
     ${isItem ? 'padding:1px;' : 'padding:2px;'}
     font-weight:600;
     font-size:14;
     text-align:right;
     right:0;`
   )
 }

function logStringStyle(color, isItem){
  return (
    `background:black;
     color:${color};
     font-size:14;
     padding:1px;`
  )
}

export const indexContainerLog = (sliceOfState, whatToLog) => {
  const logString    =  getLogString(whatToLog);
  const isItem       =  checkIsItem(sliceOfState);
  const tab          =  getTab(isItem);
  const cappedSlice  =  capSlice(sliceOfState);
  console.log(`
${tab}%c${logString} at %cIndex${cappedSlice}Container `,
              logStringStyle(getSliceColor(sliceOfState), isItem),
              componentStyle('#f5c077', isItem),
              whatToLog[logString]
  );
}

export const indexLog = (sliceOfState, whatToLog) => {
  const logString    =  getLogString(whatToLog);
  const isItem       =  checkIsItem(sliceOfState);
  const tab          =  getTab(isItem);
  const cappedSlice  =  capSlice(sliceOfState);

  console.log(
    `
${tab}%c${logString} at %cIndex${cappedSlice} `,
              logStringStyle(getSliceColor(sliceOfState), isItem),
              componentStyle('#96d0e8', isItem),
              whatToLog[logString]
  );
}

export const reducerLog = (sliceOfState, whatToLog) => {
  const logString    =  getLogString(whatToLog);
  const isItem       =  checkIsItem(sliceOfState);
  const tab          =  getTab(isItem);
  const cappedSlice  =  capSlice(sliceOfState);

  console.log(
    `
${tab}%c${logString} at %c${cappedSlice}Reducer `,
              logStringStyle(getSliceColor(sliceOfState), isItem),
              componentStyle('#ba68c8', isItem),
              whatToLog[logString]
  );
}

export const logHelper = (sliceOfState, logString, background, color) => {
  const isItem       =  checkIsItem(sliceOfState);
  const tab          =  getTab(isItem);
  const cappedSlice  =  capSlice(sliceOfState);

  console.log(
    `
${tab}%c${logString} at %c${cappedSlice}Reducer `,
              `background:${background};
               color:${color};`,
              componentStyle('#ba68c8', isItem)
  );
}
