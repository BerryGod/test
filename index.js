const aufg = require('auto-update-from-github');
 
aufg({
    git: 'BerryGod/test', // 远程git地址
    dir: './', // 本地路径
    type: 'version', // 检测类型 version | commit
    freq: 3000 // 刷新频率
});
