const URL_API = 'https://api.adviceslip.com/advice';
const renderId = document.querySelector('.advice-id span');
const renderText = document.querySelector('.advice-text');
const btnNwRnd = document.querySelector('.advice-change');

const adviceGenerator = async () => {
  const rdp = await fetch(`${URL_API}`);
  const rdr = await rdp.json();
  renderId.innerText = rdr.slip.id;
  renderText.innerText = `"${rdr.slip.advice}"`;
}

adviceGenerator();

btnNwRnd.addEventListener('click',()  => {
  adviceGenerator();
});
