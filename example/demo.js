import O18N from '../src';
import locale from './locale';

const lang = new O18N();
lang.add(locale);

const id = _id => document.getElementById(_id);

Array.prototype.slice.call(document.getElementsByTagName('button')).forEach((button) => {
  button.addEventListener('click', () => {
    lang.locale = button.id;
    id('locale').innerText = button.id;
    ({
      name: id('name').innerText,
      book: id('book').innerText,
      cat: id('cat').innerText,
      onlyCNAttr: id('onlyCNAttr').innerText,
      onlyTWAttr: id('onlyTWAttr').innerText,
      onlyENAttr: id('onlyENAttr').innerText,
    } = lang);
  });
});
