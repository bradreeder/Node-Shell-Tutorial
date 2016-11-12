(function() {

  const terminalMenu = require('terminal-menu');
  const cat = require('./cat.js');
  const menu = terminalMenu({ width: 29, x: 4, y: 2 });
  let selected = '';

  menu.reset();
  menu.write('LESSON 1\n');
  menu.write('-----------------------------\n');

  menu.add('INTRODUCTION');
  menu.add('GETTING STARTED');
  menu.add('CAT');
  menu.add('LS');
  menu.add('OPTIONS');
  menu.add('GREP');
  menu.add('EXECUTABLES');
  menu.add('EXIT');

  menu.on('select', (label) => {
    selected = label.toLowerCase().replace(' ', '-');
    menu.close();
  });

  menu.on('close', () => {
    if (selected !== 'exit') cat(`../lessons/${selected}.txt`);
    process.stdin.setRawMode(false);
    process.stdin.end();
  });

  process.stdin.setRawMode(true);
  process.stdin.pipe(menu.createStream()).pipe(process.stdout);

})();
