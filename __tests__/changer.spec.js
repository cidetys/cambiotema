'use strict';

describe('Cambio del valor del textContent de toggleTheme', () => {
  test('button textContent = Oscuro', () => {
      const output = 'Claro';
      document.body.innerHTML = `
      <div>
        <button class="btno">Oscuro</button>
      </div>
      `;
      require('../main');
      
      const switcher = document.querySelector('.btno');
      switcher.click();
      
      expect(switcher.textContent).toEqual(output);
  });

  test('button textContent = Claro', () => {
    const output = 'Oscuro';

    document.body.innerHTML = `
    <div>
      <button class="btno">Oscuro</button>
    </div>
    `;
    require('../main');
    
    const switcher = document.querySelector('.btno');
    switcher.click();
    
    expect(switcher.textContent).toEqual(output);
});
});
