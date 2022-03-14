export const setAnswers = (newAnswer, answers) => {
  answers[newAnswer.id] = {
    value: newAnswer.value
  }
  return answers;
}

export const randomString = (length) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for(let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  if(result.indexOf('7') > -1 || result.indexOf('9') > -1){
    result = '';
  }
  return result;
}